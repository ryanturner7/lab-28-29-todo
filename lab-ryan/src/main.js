import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.component {
  constructor(props){
    super(props);
    this.state = {
      notes: null,
    };
  }

  this.getApp = this.getApp.bind(this);

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
ReactDom.render(<App />, document.getElementById('root'));
