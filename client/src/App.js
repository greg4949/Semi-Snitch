import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import './output.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import IdleEvent from './pages/IdleEvent';
import Report from './pages/Report';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col min-h-screen justify-between">
        <Router>
          <Header />
          <main className="mb-auto">
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/report/:reportId' element={<Report/>}/>
              <Route path='/idle-event/:idleEventId' element={<IdleEvent/>} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;

