import React from 'react';
import './TodoTemplate.scss';

type Children = {
  
}
const TodoTemplate: React.FC<Children> = ({children}) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;