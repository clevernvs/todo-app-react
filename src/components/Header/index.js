import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  paper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#DA4453',
    color: '#ffffff',
  },
}));

export default function Index() {

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper} square>
        <Grid justify="center" alignItems="center" >
          <Typography variant="h4" gutterBottom>Task Manager</Typography>
        </Grid>
      </Paper>
    </div>
  )

};