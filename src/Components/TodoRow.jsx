import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoRow = ({ task, deleteOne, changeStatus }) => {
  const { id, text } = task;

  return (
    <div className="w-full h-[80px] grid grid-cols-8 items-center px-5">
      <div className="w-full flex">
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={true ? task.done === true : false}
          onChange={() => {
            changeStatus(id);
          }}
          className="cursor-pointer"
        />
      </div>
      <p className="text-lg col-span-6">{text}</p>
      <div className="w-full flex justify-between px-5">
        <FontAwesomeIcon
          name={id}
          icon={faTrash}
          className="text-2xl cursor-pointer"
          onClick={() => deleteOne(id)}
        />
      </div>
    </div>
  );
};
export default TodoRow;
