import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, IconButton, Grid } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: theme.spacing(2),
    backgroundColor: "#F56236",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: theme.spacing(2),
    backgroundColor: "#FCE788",
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: theme.spacing(2),
    backgroundColor: "#88FCA3",
  },
}));

export default function MenssageType({ list, type, eraseMessage }) {
  const classes = useStyles();

  const messageList = list.map((item) => {
    const delMessage = () => eraseMessage(item.id);
    return (
      <Paper key={item.id} className={classes[type]}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={10}>
            <Typography align="left" variant="body1">
              {item.message}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={delMessage}>
              <Clear />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  });

  return <div>{messageList}</div>;
}
