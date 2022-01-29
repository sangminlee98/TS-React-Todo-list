import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
type Props = {
  onInsert: (text: string) => void;
}
const TodoInsert = ({onInsert}: Props) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  },[]);
  const onSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  },[onInsert, value]);
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