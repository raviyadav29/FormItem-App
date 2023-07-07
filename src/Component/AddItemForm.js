import React, { Component } from 'react';

class AddItemForm extends Component {
  state = {
    name: '',
    description: '',
    price: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      const { name, description, price } = this.props.item;
      this.setState({ name, description, price });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form data in this.state
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;
