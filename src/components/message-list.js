import React from "react";
import Button from "@material-ui/core/Button";
import Api from "../api";

import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      infoMessages: [],
      errorMessages: [],
      warningMessages: [],
      open: true,
    };
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
    const { infoMessages, errorMessages, warningMessages } = this.state;
    if (message.priority === 1) {
      this.setState({
        errorMessages: [message, ...errorMessages],
      });
    } else if (message.priority === 2) {
      this.setState({
        warningMessages: [message, ...warningMessages],
      });
    } else {
      this.setState({
        infoMessages: [message, ...infoMessages],
      });
    }
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
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  handleClear = () => {
    this.setState({ errorMessages: [], warningMessages: [], infoMessages: [] });
  };

  render() {
    const isApiStarted = this.api.isStarted();
    return (
      <div>
        {this.state.errorMessages.length !== 0 ? (
          <Snackbar
            open={this.state.open}
            //autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="error">
              {this.state.errorMessages[0].message}
            </Alert>
          </Snackbar>
        ) : (
          ""
        )}
        <div style={{ marginTop: "120px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={this.handleClick}>
              {isApiStarted ? "Stop Messages" : "Start Messages"}
            </Button>
            <Button variant="contained" onClick={this.handleClear}>
              CLEAR
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <div style={{ marginLeft: "15px" }}>
              <h1>Error Type 1</h1>
              <p>{this.state.errorMessages.length}</p>
              {this.state.errorMessages.map((val, key, arr) => (
                <div style={{ display: "flex" }}>
                  <div
                    key={val.id}
                    style={{ backgroundColor: "#F56236", color: "#000" }}
                  >
                    {val.message}
                  </div>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const filteredMessages = arr.filter(
                        (curr) => curr.message !== val.message
                      );

                      this.setState({ errorMessages: [...filteredMessages] });
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h1>Warning Type 2</h1>
              <p>{this.state.warningMessages.length}</p>
              {this.state.warningMessages.map((val, key, arr) => (
                <div style={{ display: "flex" }}>
                  <div
                    key={val.id}
                    style={{ backgroundColor: "#FCE788", color: "#000" }}
                  >
                    {val.message}
                  </div>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const filteredMessages = arr.filter(
                        (curr) => curr.message !== val.message
                      );

                      this.setState({ warningMessages: [...filteredMessages] });
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h1>Info Type 3</h1>
              <p>{this.state.infoMessages.length}</p>
              {this.state.infoMessages.map((val, key, arr) => (
                <div style={{ display: "flex" }}>
                  <div
                    key={val.id}
                    style={{ backgroundColor: "#88FCA3", color: "#000" }}
                  >
                    {val.message}
                  </div>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const filteredMessages = arr.filter(
                        (curr) => curr.message !== val.message
                      );

                      this.setState({ infoMessages: [...filteredMessages] });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageList;
