import React from 'react';
import { Todos } from '../App';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
type Props = {
  todos: Todos[],
  onRemove: (id: number) => void,
  onToggle: (id: number) => void,
}
const TodoList = ({todos, onRemove, onToggle}: Props) => {
  return (
    <div className='TodoList'>
      {
        todos.map((todo: { id: number, text: string, checked: boolean }) => (
          <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>
        ))
      }
    </div>
  );
};

export default TodoList;