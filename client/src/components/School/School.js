import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Card from "../Card/Card"
import "./School.css";



class School extends Component {
  //Setting the state of the componenet
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  state = {
    loaded: false,
    hws: [],
    email: "",
    name: "",
    class: "",
    assignment: "",
    dueDate: ""
  };

  componentDidMount() {
    this.getHomework();
    console.log(this.state);
  }

  getSchool = id => {
    let route = {
      email: this.state.email,
      name: this.state.name,
      class: this.state.class,
      assignment: this.state.assignment,
      dueDate: this.state.dueDate
    };
    return axios.post("/api/homework", route);
  };
  
  getHomework = () => {
    API.getHomework()
      .then(async res => {
        await this.setState({ hws: [...this.state.hws, res.data], loaded: true})
        
        // this.state.hws[0].map( hw => {
        //     <Card name= {hw.name}/>
        // })
      }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name.length < 0 ||
      this.state.class.length < 0 ||
      this.state.assignment.length < 0 ||
      this.state.dueDate.length < 0
    ) {
      alert("Fill out the form entriely before submitting");
    } else {
      this.getSchool();
    }
    window.location.reload()
    this.setState({
      email: "",
      name: "",
      class: "",
      assignment: "",
      dueDate: ""
    });
  };


  Form = props => (
    <FormControl onSubmit={this.handleFormSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper style={{ width: 400, padding: 10 }}>
            <TextField
              className="form"
              id="standard-name"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              label="Email"
              margin="normal"
            />
            <br />
            <TextField
              className="form"
              id="standard-name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              label="Name"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              name="class"
              value={this.state.class}
              label="Class"
              onChange={this.handleInputChange}
              rowsMax="4"
              margin="normal"
            />

            <br />
            <TextField
              id="standard-name"
              name="assignment"
              value={this.state.assignment}
              onChange={this.handleInputChange}
              label="Assignment"
              multiline
              rowsMax="4"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
              label="Due Date"
              rowsMax="4"
              margin="normal"
            />
            <br />
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
      <br />
    </FormControl>
  );

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
    <div    
        style={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: "10px"
      }}
    >
      <div>
        {this.Form(this.props)} 
      </div>

      <div>
        {this.state.loaded ? this.state.hws[0].map( hw => 
            <Card name= {hw.name} email={hw.email} class={hw.class} assignment={hw.assignment} dueDate={hw.dueDate}/>
        ) 
        : ""}
      </div>
      <div>
      <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout!
      </button>
      </div> 
    </div>
    )}
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(School);