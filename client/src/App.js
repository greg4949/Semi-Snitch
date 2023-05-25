import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import './output.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Report from './pages/Report';
import Signup from './pages/Signup';


let API_URL; // work for both dev and production
if (process.env.NODE_ENV === 'production') {
  API_URL = '/graphql';
} else {
  API_URL = 'http://localhost:3001/graphql';
}
const httpLink = createHttpLink({
  uri: API_URL,
});

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
      <div className="relative flex flex-col min-h-screen overscroll-none">
      <Router>
        <Header />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/report/:reportId' element={<Report/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;

