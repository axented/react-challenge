import React from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core/'

export default function Message({ message, priority, index, removeMessage }) {
  let color = ''
  if (priority === 1)
    color = "#F56236"
  else if (priority === 2)
    color = "#FCE788"
  else if (priority === 3)
    color = "#88FCA3"

  const rmMessage = () => removeMessage(index, priority)

  return (
    <Card style={{backgroundColor: color}}>
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={rmMessage}
        > Clear </Button>
      </CardActions>
    </Card>
  )
}