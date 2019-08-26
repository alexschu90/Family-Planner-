import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";

export default function CardComponent(props) {
  return (
    <Card
      style={{
        width: "250px",
        height: "150px",
        margin: "10px" 
      }}
      >
      <CardContent>
        <Typography
          gutterBottom
        >
          {props.name} 
          <br />
          {props.email}
          <br />
          {props.class}
          <br />
          {props.assignment}
          <br />
          {props.dueDate}
        </Typography>
        {/* <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
