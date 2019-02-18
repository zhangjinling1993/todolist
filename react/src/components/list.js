import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        this.handleChangeLists = this.handleChangeLists.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    
    }

    componentDidUpdate() {
        
    }

    handleChangeLists = (e, index) => {
        let currIndex = index;
        this.props.lists[currIndex].done = !this.props.lists[currIndex].done;

        this.setState({
            lists: this.props.lists
        })
    }

    handleDelete = (index) => {
        let currIndex = index;
        this.props.lists.splice(currIndex, 1)
        this.setState({
            lists: this.props.lists
        })
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.lists.map((item, index) => {
                        return (
                            <li key={item.id} className="list-group-item">
                                <div className="form-check">
                                    <input
                                        className="form-check-input" type="checkbox" value={item.txt} id={"defaultCheck" + item.id} defaultChecked={item.done}
                                        onClick={(e) => {
                                            this.handleChangeLists(e, index);
                                        }} ></input>
                                    <label className="form-check-label" htmlFor={"defaultCheck" + item.id} style={item.done ? { color: '#999', textDecoration: 'line-through' } : { color: '#333', textDecoration: 'none' }}>
                                        {item.txt}
                                    </label>
                                    <button
                                        type="button" className="close float-right" aria-label="Close"
                                        onClick={() => {
                                            this.handleDelete(index);
                                        }}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List;