import React, { useMemo } from "react";
import { Grid, Typography, Box, Divider } from "@material-ui/core";
import MenssageType from "./MenssageType";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    textAlign: "left",
    margin: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
}));

export default function Table({ items, eraseMessage }) {
  const classes = useStyles();
  const mError = useMemo(() => {
    const newList = items.filter((item) => item.priority === 1);
    return newList.reverse();
  }, [items]);

  const mWarning = useMemo(() => {
    const newList = items.filter((item) => item.priority === 2);
    return newList.reverse();
  }, [items]);

  const mInfo = useMemo(() => {
    const newList = items.filter((item) => item.priority === 3);
    return newList.reverse();
  }, [items]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <Box className={classes.header}>
            <Typography variant="h6">Error Type 1</Typography>
            <Divider />
            <Typography className={classes.subtitle} variant="subtitle1">
              Count: {mError.length}
            </Typography>
          </Box>
          <MenssageType
            type={"paper1"}
            list={mError}
            eraseMessage={eraseMessage}
          />
        </Grid>
        <Grid item xs>
          <Box className={classes.header}>
            <Typography variant="h6">Warning Type 2</Typography>
            <Divider />
            <Typography className={classes.subtitle} variant="subtitle1">
              Count: {mWarning.length}
            </Typography>
          </Box>
          <MenssageType
            type={"paper2"}
            list={mWarning}
            eraseMessage={eraseMessage}
          />
        </Grid>
        <Grid item xs>
          <Box className={classes.header}>
            <Typography variant="h6">Info Type 3</Typography>
            <Divider />
            <Typography className={classes.subtitle} variant="subtitle1">
              Count: {mInfo.length}
            </Typography>
          </Box>
          <MenssageType
            type={"paper3"}
            list={mInfo}
            eraseMessage={eraseMessage}
          />
        </Grid>
      </Grid>
    </div>
  );
}
