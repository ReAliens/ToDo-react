import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TaskInput = (props) => {
  const [task, setTask] = useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: task,
      done: false,
    });
    setTask('');
  };

  return (
    <form className="w-full px-4" onSubmit={handleSubmit}>
      <div className="flex h-[80px] ">
        <input
          id="todo"
          name="todo"
          placeholder="Add to Your list ..."
          maxLength="30"
          value={task}
          className="w-full border-0 outline-0"
          onChange={(e) => handleInput(e)}
        />
        <button id="submit" type="submit" className="w-fit h-auto">
          <FontAwesomeIcon icon={faPlusCircle} className="text-3xl" />
        </button>
      </div>
    </form>
  );
};
export default TaskInput;
