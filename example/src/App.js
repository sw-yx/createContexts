import React, { Component } from 'react';
import './App.css';
import createContexts from './createContexts';

const [Provider, Context1, Context2, Context3] = createContexts(3);

class SeeContext1 extends Component {
  static contextType = Context1;
  render() {
    return <div>Context: {this.context}</div>;
  }
}
class SeeContext2 extends Component {
  static contextType = Context2;
  render() {
    return <div>Context: {this.context}</div>;
  }
}

class SeeContext3 extends Component {
  static contextType = Context3;
  render() {
    return <div>Context: {this.context}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <Provider values={['a', 'b', 'c']}>
        <div className="App">
          <header className="App-header">
            <p>See contexts below</p>
            <SeeContext1 />
            <SeeContext2 />
            <SeeContext3 />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
