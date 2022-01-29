import React from 'react';
import './TodoListItem.scss';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import { Todos } from '../App';
type Props = {
  todo: Todos,
  onRemove: (id: number) => void,
  onToggle: (id: number) => void,
}
const TodoListItem = ({todo, onRemove, onToggle}: Props) => {
  const {id, text, checked} = todo;
  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  );
};

export default TodoListItem;