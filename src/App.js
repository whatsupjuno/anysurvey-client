import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './components/Home'
import Login from './components/Login'
import UserList from './components/UserList'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/Login"} component={Login} />
            <Route path={"/UserList"} component={UserList} />
          </main>
        </Router>
      </ApolloProvider>
    )
  }
}


export default App;


// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }
