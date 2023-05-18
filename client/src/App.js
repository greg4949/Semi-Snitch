import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import Scan from './components/Scan';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import './output.css';

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
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path='/'
              element={<Scan />} />
            <Route
              path='/login'
              element={"TODO: ADD LOGIN"} />
            <Route
              path='/signup'
              element={"TODO: ADD SIGNUP"} />
            <Route
              path='/profile'
              element={"TODO: ADD PROFILE"} />
            <Route
              path='/idle-events/:idleEventId'
              element={'TODO: ADD IDLE EVENT PAGE'} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
