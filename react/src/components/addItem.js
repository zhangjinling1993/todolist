import React, { Component } from 'react';

class addItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleFresh = this.props.handleFresh.bind(this);
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {

    }

    handleAddItem = () => {
        let newTxt = document.getElementById("newItem").value;
        if (newTxt === "") {
            alert("不能添加空的待办项！");
            return false;
        }
        let len = this.props.lists[this.props.lists.length - 1].id + 1;
        let newItem = {
            id: len,
            txt: newTxt,
            done: false
        }
        this.props.lists.push(newItem);

        this.setState({
            lists: this.props.lists
        }, () => {
            this.handleFresh(this.props.lists);
        });
    }

    render() {
        return (
            <form action="">
                <input id="newItem" className="form-control" type="text" placeholder="其他待办事项"></input>
                <button
                    type="button"
                    className="card-link btn btn-primary btn-sm btn-block"
                    style={{ marginTop: 10 }}
                    onClick={(e) => {
                        this.handleAddItem(e);
                    }}>
                    添加
            </button>
            </form>
        )
    }
}

export default addItem;