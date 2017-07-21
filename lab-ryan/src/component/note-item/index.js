import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(e){
    e.preventDefault();
    let array = this.props.notes;
    array.splice(e.target.parentElement.value, 1);
    this.props.app.setState(state => ({
      notes: array,
    }));
  }

  render(){
    return(
      <ul>
        {this.props.notes.map((item, i) =>
          <li key={i} value={i}>
            {item.content}
            <button onClick={this.handleDelete.bind(this)}>delete</button>
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
