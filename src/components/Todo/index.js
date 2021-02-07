import React, { Fragment, useState } from 'react';

// Material UI - Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Material UI - Icons
import CheckIcon from '@material-ui/icons/Check';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 'auto',
  },
  buttonCheck: {
    color: '#16a085'
  },
  buttonRemove: {
    color: '#f39c12'
  }
}));

export default function Todo({ setTodos, todo, todos, text }) {

  const classes = useStyles();

  const [todos, setTodos] = useState([]);

  const handleRemove = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }));
  }

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid item container direction="row" justify="center" alignItems="center" spacing={2}>
          
          <Grid item xs={11} sm={12}>
            <Typography variant="subtitle1" gutterBottom>
              {text}
            </Typography>
          </Grid>

          <Grid item container direction="row" justify="center" alignItems="center" >
            <Grid item >
              <IconButton
                aria-label="check"
                className={classes.buttonCheck}
                onClick={handleComplete}
              >
                <CheckIcon size="medium" />
              </IconButton>
            </Grid>
            <Grid item >
              <IconButton
                aria-label="remove"
                className={classes.buttonRemove}
                onClick={handleRemove}
              >
                <HighlightOffIcon size="medium" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  )
};
