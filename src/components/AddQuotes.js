import React, { Component } from 'react'

class AddQuotes extends Component {
    state = {
        title: null,
        text: null,
        author: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddQuotes(this.state);
    }
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" id="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} />

                    <label htmlFor="name" id="text">Quote:</label>
                    <input type="text" id="text" onChange={this.handleChange} />

                    <label htmlFor="name" id="author">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange} />
                    <button>Add</button>

                </form>

            </div>
        )
    }
}

export default AddQuotes

