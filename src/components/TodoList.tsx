import React from 'react';
import { Todos } from '../App';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
type Props = {
  todos: Todos[]
}
const TodoList = ({todos}: Props) => {
  return (
    <div className='TodoList'>
      {
        todos.map((todo: { id: number, text: string, checked: boolean }) => (
          <TodoListItem todo={todo} key={todo.id}/>
        ))
      }
    </div>
  );
};

export default TodoList;