import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardSpace: {
      marginTop: "20px",
    },
  }));

export default function CardComponent(props) {
    const {id, message, color , clearFunction} = props;
    const classes = useStyles();

    const handleClear = () => {
        clearFunction(id)
    }

    return (
        <div >
            <Card className={classes.cardSpace} style={{backgroundColor : color}}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {message}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClear}>Clear</Button>
                </CardActions>
            </Card>
        </div>
    )
}
