import React, { Component } from "react";

class Lend extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        owner: '',
        image: '',
        description: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event) {
    event.preventDefault()
    let data = {
        name: this.state.name,
        owner: this.state.email,
        image: this.state.image,
        description: this.state.description
    }
    console.log(data)
    fetch("/lend", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data === "success"){
           this.setState({msg: "Thanks for lending a cat"});  
        }
    }).catch(function(err) {
        console.log(err)
    });
}

logChange(e) {
    this.setState({[e.target.name]: e.target.value});  
}

render() {
  return (
   
    <div id="lend">
     <form onSubmit={this.handleSubmit}>
         <input ref={(ref) => {this.name = ref}} placeholder="Cat Name" type="text" name="name"/><br />
         <input ref={(ref) => {this.owner = ref}} placeholder="Owner's Email" type="text" name="owner"/><br />
         <input ref={(ref) => {this.image = ref}} placeholder="Cat Image URL" type="text" name="image"/><br />
         <input ref={(ref) => {this.description = ref}} placeholder="Description" type="text" name="description"/><br />
        <button type="Submit">Start</button>
     </form>
 ​
    </div>
   )
}
}
 
export default Lend;