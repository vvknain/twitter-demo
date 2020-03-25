import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/MainContainer';

const  client = new ApolloClient({
  uri: "localhost:4000/grapghql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <MainContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;




{/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React from this link
            </a>
        </header> */}