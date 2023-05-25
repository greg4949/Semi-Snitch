const { AuthenticationError } = require('apollo-server-express');
const { User, Idle, Report } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      userReports: async (_, __, { user }) => {
        if (!user) { throw new Error('Authentication required.'); }
        const userData = await User.findById(user._id).populate('reports');
        return userData.reports;
      },
      singleReport: async (parent, {reportId}) => {

        return Report.findOne({_id: reportId}).populate({  path: 'idleEvents', model: 'Idle', })
      }
    },


    Mutation: {
      addIdle: async (parent, { reportId, ...idleData }, { user }) => {
        console.log(idleData)
        if (!user) { throw new AuthenticationError('Authentication required'); }
        const userWithReport = await User.findOne({ _id: user._id, reports: reportId });
        if (!userWithReport) { throw new AuthenticationError('You cannot add idle to report that doesnt belong to you'); }
        const idle = await Idle.create(idleData);
        await Report.findByIdAndUpdate(reportId, { $push: { idleEvents: idle._id } });
        return idle;
      },

      addReport: async (parent, { name }, { user }) => {
        if (!user) { throw new AuthenticationError('Authentication required'); }
        const report = await Report.create({ name });
        const userToUpdate = await User.findById(user._id).select('+reports');
        userToUpdate.reports.push(report._id);
        await userToUpdate.save();
        return report;
      },

      deleteReport: async (parent, { reportId }, { user }) => {
        if (!user) { throw new AuthenticationError('Authentication required'); }
        const userToUpdate = await User.findById(user._id);
        if (!userToUpdate.reports.includes(reportId)) { throw new AuthenticationError('You are not authorized to delete this report'); }
        const report = await Report.findById(reportId);
        await Idle.deleteMany({ _id: { $in: report.idleEvents } });
        userToUpdate.reports.pull(reportId);
        await userToUpdate.save();
        const deletedReport = await Report.findByIdAndDelete(reportId);
        return deletedReport;
      },

      addUser: async (parent, { email, password }) => {
        const user = await User.create({ email, password });
        const token = signToken(user);
        return { token, user };
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) { throw new AuthenticationError('No user found with this email address'); }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) { throw new AuthenticationError('Incorrect credentials'); }
        const token = signToken(user);
        return { token, user };
      },

      updateCoaching: async (parent, {idleId, coaching}) => {
        const idleEvent = await Idle.findByIdAndUpdate(idleId, {coaching: coaching}, {new: true})
        return idleEvent
      }

    }
  };

  module.exports = resolvers;