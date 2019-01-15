import React, { Component } from "react";

 
class Lend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      email: "owner email",
      image: "image url",
      description: "brief description"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Cat Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Owner Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Brief Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
 
export default Lend;