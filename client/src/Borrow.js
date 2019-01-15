import React, { Component } from "react";
 
class Borrow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cats: []
    };
  }

  componentDidMount() {
    fetch("/borrow")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cats: result.cats
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, cats } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {cats.map(cat => (
            <li key={cat.name}>
              {cat.name} {cat.owner} {cat.image} {cat.description}
            </li>
          ))}
        </ul>
      );
    }
  }
  
}
 
export default Borrow;