import axios from "axios";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Homework extends Component {
  state = {
    homework: []
  };
  componentDidMount() {
    this.getHomework();
  }
  getHomework = async id => {
    let apiCall = await axios.get("/api/homework").then(jeff => {
      this.setState({ homework: jeff.data });
    });
    console.log(this.state);
    return apiCall;
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name.length < 0 ||
      this.state.class.length < 0 ||
      this.state.assignment.length < 0 ||
      this.state.dueDate.length < 0
    ) {
      this.setState({
        email: "",
        name: "",
        class: "",
        assignment: "",
        dueDate: ""
      });
    }
  };

  render() {
    return (
      <div>
        {this.getHomework}
        <Button variant="contained">{this.handleFormSubmit} Homework</Button>
      </div>
    );
  }
}
export default Homework;
