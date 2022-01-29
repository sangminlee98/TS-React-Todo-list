import React from 'react';
import { Todos } from '../App';
import './TodoList.scss'
import TodoListItem from './TodoListItem';

const TodoList = (props: {todos: Todos[]}) => {
  return (
    <div className='TodoList'>
      {
        props.todos.map((todo: { id: number, text: string, checked: boolean }) => (
          <TodoListItem todo={todo} key={todo.id}/>
        ))
      }
    </div>
  );
};

export default TodoList;