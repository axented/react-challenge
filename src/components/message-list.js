import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Api from "../api";
import Table from "./Table";
import { Snackbar } from "@material-ui/core";

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
      snackStatus: false,
      snackMessage: "",
    };
    this.handleClose = this.handleClose.bind(this);
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message);
    },
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState(
      {
        messages: [...messages.slice(), message],
      },
      () => {
        if (message.priority === 1) {
          this.setState({ snackStatus: true, snackMessage: message.message });
        }
      }
    );
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  };

  handleClose = (e) => {
    this.setState({ snackStatus: false });
  };

  clearMessages = () => {
    this.setState({ messages: [], snackStatus: false, snackMessage: "" });
  };

  eraseMessage = (id) => {
    const m = this.state.messages.filter((item) => item.id !== id);
    this.setState({ messages: m });
  };

  render() {
    const isApiStarted = this.api.isStarted();
    const { messages } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.snackStatus}
          autoHideDuration={2000}
          onClose={this.handleClose}
          message={this.state.snackMessage}
        ></Snackbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item container xs={12}>
            <Typography align="left" variant="h2">
              Coding Challenge
            </Typography>
          </Grid>
          <Grid item xs={4} />
          <Grid item container xs={4} spacing={2}>
            <Grid item xs={6}>
              <Button
                color="primary"
                fullwidth="true"
                variant="contained"
                onClick={this.handleClick}
              >
                {isApiStarted ? "Stop Messages" : "Start Messages"}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                color="secondary"
                onClick={this.clearMessages}
                variant="contained"
              >
                Clear
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={4} />
        </Grid>
        <Table items={messages} eraseMessage={this.eraseMessage} />
      </div>
    );
  }
}

export default MessageList;
