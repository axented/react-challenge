import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Api from '../api'
import CardComponent from './card-component';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
      open: false,
      openTwo: false,
      id: '',
      idTwo : '1',
      messageSnack: '',
      messageSnackTwo: ''
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
    const { messages, open } = this.state
    if(open){
      if(message.priority === 1){
        this.setState({
          open: true,
          idTwo : this.state.id,
          id: message.id,
          messageSnackTwo: this.state.messageSnack,
          messageSnack: message.message,
          openTwo: true
        })
        setTimeout(() => {
          this.setState({
            openTwo: false
          })
        }, 2000);
      }
    }else{
      this.setState({
        open: message.priority === 1 ? true : false,
        messageSnack: message.message,
        id: message.id,
      })
    }

    this.setState({
      messages: [
        message,
        ...messages.slice()
      ]
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

  handleClear = () => {
    this.setState({
      ...this.state,
      messages: []
    })
  }

  handleClearById = (id) => {
    this.setState({
      ...this.state,
      messages: this.state.messages.filter((obj)=>obj.id!==id)
    })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      ...this.state,
      open: false
    })
  };
  
  handleCloseTwo = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      ...this.state,
      openTwo: false
    })
  };

  render() {
    const isApiStarted = this.api.isStarted()
    return (
      <div>
        <div style={{textAlignLast: 'center', marginTop: '17px', marginBottom: '16px'}}>
          <Button
            variant="contained"
            onClick={this.handleClick}
            
          >
            {isApiStarted ? 'Stop Messages' : 'Start Messages'}
          </Button>
          <Button
            variant="contained"
            onClick={this.handleClear}
            style={{marginLeft: '26px'}}
          >
            Clear
          </Button>
        </div>

        <Snackbar 
            anchorOrigin={{ vertical:'top',horizontal: 'center' }}
            key={this.state.id}
            open={this.state.open} 
            onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="error">
             {this.state.messageSnack}
          </Alert>
        </Snackbar>

        <Snackbar 
            anchorOrigin={{ vertical:'top',horizontal: 'center' }}
            key={this.state.idTwo}
            open={this.state.openTwo} 
            onClose={this.handleCloseTwo}
            style={{marginTop: '50px'}}>
          <Alert onClose={this.handleClose} severity="error">
             {this.state.messageSnackTwo}
          </Alert>
        </Snackbar>

        <div class="container">
            <div class= "row">
              <div class="col">
                <Typography>Error Type 1</Typography>
                <Typography>Count : {this.state.messages.filter((obj)=>obj.priority===1).length} </Typography>
                {this.state.messages.map((obj)=>{
                      if(obj.priority === 1){
                        return (
                          <CardComponent message={obj.message} id={obj.id} color="#F56236" clearFunction={this.handleClearById}></CardComponent>
                        )
                      }
                  })}
              </div>
              <div class="col">
                <Typography>Warning Type 2</Typography>
                <Typography>Count : {this.state.messages.filter((obj)=>obj.priority===2).length} </Typography>
                {this.state.messages.map((obj)=>{
                      if(obj.priority === 2){
                        return (
                          <CardComponent message={obj.message} id={obj.id} color="#FCE788" clearFunction={this.handleClearById}></CardComponent>
                        )
                      }
                  })}
              </div>
              <div class="col">
                <Typography>Info Type 3</Typography>
                <Typography>Count : {this.state.messages.filter((obj)=>obj.priority===3).length} </Typography>
                {this.state.messages.map((obj)=>{
                      if(obj.priority === 3){
                        return (
                          <CardComponent message={obj.message} id={obj.id} color="#88FCA3" clearFunction={this.handleClearById}></CardComponent>
                        )
                      }
                  })}
              </div>
            </div>
        </div>

      </div>
    )
  }
}

export default MessageList
