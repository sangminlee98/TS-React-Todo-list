import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
type OnInsert = (text: string) => void;
const TodoInsert = (props: {onInsert: OnInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  },[]);
  const onSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
    props.onInsert(value);
    setValue('');
    e.preventDefault();
  },[props, value]);
  return (
    <form className='TodoInsert'>
      <input 
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}  
      />
      <button 
        type='submit'
        onClick={onSubmit}
      >
        <MdAdd/>
      </button>
    </form>
  );
};

export default TodoInsert;