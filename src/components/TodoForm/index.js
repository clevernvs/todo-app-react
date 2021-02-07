import React from 'react'

// Material UI - Components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

// Material UI - Icons
import AddIcon from '@material-ui/icons/Add';

export default function TodoForm({ inputText, setInputText, todos, setTodos, setStatus }) {

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 10000 }
    ]);
    setInputText('');
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };


  return (
    <form>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid item xs={11} sm={4}>
          <TextField
            id="add-task"
            type="search"
            variant="outlined"
            placeholder="Adicione uma tarefa..."
            fullWidth
            margin="normal"
            value={inputText}
            onChange={handleInputText}
          />
        </Grid>

        <Grid item xs={1} sm={2}>
          <IconButton aria-label="clear task" color="primary" size="small" >
            <AddIcon onClick={handleSubmit} />
          </IconButton>

        </Grid>
        <Grid item xs={11} sm={4}>
          <FormControl variant="outlined">
            <Select
              id="selectStatus"              
              value={age}
              onChange={handleStatus}              
            >
              <MenuItem value="">
                <em>Todos</em>
              </MenuItem>
              <MenuItem value={'completed'}>Completo</MenuItem>
              <MenuItem value={'uncompleted'}>Não completo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>

    </form>

  )
}

