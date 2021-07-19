import React from 'react'
import { Button, Snackbar, SnackbarContent } from '@material-ui/core/'

export default function SnackbarError({ message, snackbarOpen, closeFunction }) {
  return (
    <Snackbar
      anchorOrigin={{vertical: 'center', horizontal: 'top'}}
      open={snackbarOpen}
      autoHideDuration={2000}
      onClose={closeFunction}
    >
      <SnackbarContent
        message={message}
        style={{ backgroundColor: '#F56236'}}
        action={<Button style={{color: '#FFFFFF'}} onClick={closeFunction}>Close</Button>}
      ></SnackbarContent>
    </Snackbar>
  )
}