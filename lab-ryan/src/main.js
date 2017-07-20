import React from 'react';
import ReactDom from 'react-dom';


class App extends React.component {
  constructor(props){
    super(props);
    this.stae = {
      total: 400,
      expenses: [],
    };
  }

  comonentDidUpdate(){
    console.log('__STATE__', this.state);
  }
  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };

    render() {
      return (
        <main className='app'>

        </main>
      )
    }
  }
}
