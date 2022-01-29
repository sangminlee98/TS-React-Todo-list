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
  todo: Todos;
}
const TodoListItem = ({todo}: Props) => {
  const {text, checked} = todo;
  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox',{checked})}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  );
};

export default TodoListItem;