import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import AddItem from './components/addItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { id: 0, txt: "read books", done: true },
        { id: 1, txt: "drink 8 cup of waters", done: true },
        { id: 2, txt: "write a note", done: false },
      ]
    }
  }

  handleFresh = (obj) => {
    this.setState({
      lists: obj
    })
  }

  render() {
    return (
      <div className="card bg-dark card-width">
        <h3 className="card-header text-center">TodoList</h3>
        <div className="card-body">
          <List lists={this.state.lists} />
          <hr />
          <AddItem lists={this.state.lists} handleFresh={this.handleFresh.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
