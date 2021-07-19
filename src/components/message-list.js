import React from 'react'
import Button from '@material-ui/core/Button'
import { Box, Grid } from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Table from './table'
import SnackbarError from './snackbar'
import Api from '../api'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat']
  }
})

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      errorType1: [],
      warningType2: [],
      infoType3: [],
      openSnackbar: false,
      snackbarMsg: '',
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
    const { errorType1, warningType2, infoType3 } = this.state
    if (message.priority === 1) {
      this.setState({
        errorType1: [
          message,
          ...errorType1.slice(),
        ],
        openSnackbar: true,
        snackbarMsg: message.message,
      })
    } else if (message.priority === 2) {
      this.setState({
        warningType2: [
          message,
          ...warningType2.slice(),
        ]
      })
    } else if (message.priority === 3) {
      this.setState({
        infoType3: [
          message,
          ...infoType3.slice(),
        ]
      })
    }
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

  closeSnackbar = (event) => {
    this.setState({openSnackbar: false})
  }

  clearMessages = () => {
    this.setState({
      errorType1: [],
      warningType2: [],
      infoType3: [],
    })
  }

  removeFromList = (index, type) => {
    if (type === 1) {
      let filteredArray = this.state.errorType1.filter((message, i) => i !== index)
      this.setState({errorType1: filteredArray});
    } else if (type === 2) {
      let filteredArray = this.state.warningType2.filter((message, i) => i !== index)
      this.setState({warningType2: filteredArray});
    } else if (type === 3) {
      let filteredArray = this.state.infoType3.filter((message, i) => i !== index)
      this.setState({infoType3: filteredArray});
    }
  }

  render() {
    const isApiStarted = this.api.isStarted()
    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
      <ThemeProvider theme={theme}>
        <div>
          <SnackbarError
            message={this.state.snackbarMsg}
            snackbarOpen={this.state.openSnackbar}
            closeFunction={this.closeSnackbar}
          >
          </SnackbarError>
          <div>
            <Grid container justify="center">
              <Box px={1} py={5}>
                <Button
                  variant="contained"
                  onClick={this.handleClick}
                >
                  {isApiStarted ? 'Stop Messages' : 'Start Messages'}
                </Button>
              </Box>
              <Box px={1} py={5}>
                <Button
                  variant="contained"
                  onClick={this.clearMessages}
                >
                  Clear
                </Button>
              </Box>
            </Grid>
          </div>
          <div>
            <Table
              errorList={this.state.errorType1}
              warningList={this.state.warningType2}
              infoList={this.state.infoType3}
              removeMessage={this.removeFromList}
            ></Table>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default MessageList
