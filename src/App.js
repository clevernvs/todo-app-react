import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


export default function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('todos');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();    
  }, []);
  
  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todos, status]);

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]));      
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]));      
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  }

  return (
    <div>
      <Header />
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Divider />
      <Container>
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </Container>
    </div>
  );
}
