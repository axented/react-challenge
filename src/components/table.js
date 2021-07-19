import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core/'
import Message from './message'

export default function Table({errorList, warningList, infoList, removeMessage}) {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={10} sm={4} md={3}>
        <Typography variant="h4">Error Type 1</Typography>
        <Typography>Count {errorList.length}</Typography>
        {errorList.map((msg, index) => (
          <Box py={1}>
            <Message
              message={msg.message}
              priority={1}
              index={index}
              removeMessage={removeMessage}
            ></Message>
          </Box>
        ))}
      </Grid>
      <Grid item xs={10} sm={4} md={3}>
        <Typography variant="h4">Warning Type 2</Typography>
        <Typography>Count {warningList.length}</Typography>
        {warningList.map((msg, index) => (
          <Box py={1}>
            <Message
              message={msg.message}
              priority={2}
              index={index}
              removeMessage={removeMessage}
            ></Message>
          </Box>
        ))}
      </Grid>
      <Grid item xs={10} sm={4} md={3}>
        <Typography variant="h4">Info Type 3</Typography>
        <Typography>Count {infoList.length}</Typography>
        {infoList.map((msg, index) => (
          <Box py={1}>
            <Message
              message={msg.message}
              priority={3}
              index={index}
              removeMessage={removeMessage}
            ></Message>
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}
