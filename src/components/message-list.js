import React from 'react'
import Button from '@material-ui/core/Button'
import Api from '../api'
import Grid from './Grid';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styled from '@emotion/styled';
import './App.css'

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.deleteMessage = this.deleteMessage.bind(this);
    this.state = {
      messages: [],
      open: false
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        message,
        ...messages.slice(),
      ],
    }, () => {
      if (message.priority === 1) {
        this.setState({
          open: true
        })
      } else {
        this.setState({
          open: false
        })
      }
    })
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  deleteMessage(id) {
    const { messages } = this.state;
    this.setState({
      messages: messages.filter(m => (m.id !== id)),
      open: false
    });
  }

  handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false
    });
  }


  render() {
    const isApiStarted = this.api.isStarted()

    const { messages, open } = this.state;

    const Container = styled.div`
      margin-top: 100px;
    `;

    const Menu = styled.div`
      text-align: center;
      margin-bottom: 5px;
    `;

    return (
      <Container>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          key="top center"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert onClose={this.handleClose} severity="error">
            Error
          </MuiAlert>
        </Snackbar>
        <Menu>
          <Button 
            variant="contained"
            onClick={this.handleClick}
            color="primary"
          >
            {isApiStarted ? 'Stop Messages' : 'Start Messages'}
          </Button>
          <Button
            variant="contained"
            onClick={() => this.setState({ messages: [], open: false })}
            color="primary"
          >
            Clear
          </Button>
        </Menu>
          <Grid
            messages={messages}
            deleteMessage={this.deleteMessage} />
      </Container>
    )
  }
}

export default MessageList
