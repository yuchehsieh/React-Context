import React, { Component } from 'react';

import MyProvider from './context/GlobalState';
import MyContext from './context/context';

// first we will make a new context
// const MyContext = React.createContext();

// Then create a provider Component
//class MyProvider extends Component {
//  state = {
//    name: 'Wes',
//    age: 100,
//    cool: true
//  };
//  render() {
//    return (
//      <MyContext.Provider
//        value={{
//          state: this.state,
//          growAYearOlder: () =>
//            this.setState({
//              age: this.state.age + 1
//            })
//        }}
//      >
//        {this.props.children}
//      </MyContext.Provider>
//    );
//  }
// }

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  // static contextType = MyContext;

  render() {
    console.log(this.context);

    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

Person.contextType = MyContext;

const App = props => {
  return (
    <MyProvider>
      <div>
        <p>I am the app</p>
        <Family />
      </div>
    </MyProvider>
  );
};

export default App;
