import React from 'react'

// Material UI - Components
// import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// Components exportados
import Todo from '../Todo';

export default function TodoFormList({ todos, setTodos, filteredTodos }) {

  return (
    <GridList>
      {filteredTodos.map((todo) => (
        <GridListTile key={todo.id}>
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
          />
        </GridListTile>
      ))}

      {/* {filteredTodos.map((todo) => (
        <Todo 
          setTodos={setTodos} 
          todos={todos} 
          todo={todo} 
          key={todo.id} 
          text={todo.text} 
        />
      ))} */}

    </GridList>

    // <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
    //   <Grid item container xs={12} sm={6}>
    //     {todos.map(todo => (
    //       <Todo key={todo.id} text={todo.text} />
    //     ))}
    //   </Grid>
    // </Grid >
  )
}

