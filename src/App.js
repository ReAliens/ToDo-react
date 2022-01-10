import { useEffect, useState } from 'react';
import Header from './Components/TodoHeader';
import TaskInput from './Components/TodoInput';
import TodoRow from './Components/TodoRow';
import { getData, sendData } from './utils/localStorage';

const App = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  console.log(todoTasks);
  const data = getData();
  useEffect(() => {
    setTodoTasks(data);
  }, []);

  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    const newTasks = [task, ...todoTasks];
    sendData(newTasks);
    setTodoTasks(newTasks);
  };

  const deleteTask = (taskID) => {
    const filterdTasks = todoTasks.filter((task) => task.id !== taskID);
    sendData(filterdTasks);
    setTodoTasks(filterdTasks);
  };

  const changeTaskStatus = (taskID) => {
    const updated = todoTasks.map((todo) => {
      if (todo.id === taskID) {
        todo.done = !todo.done;
      }
      return todo;
    });
    sendData(updated);
    setTodoTasks(updated);
  };

  return (
    <div className="w-screen h-screen bg-slate-200 items-center justify-center flex">
      <div className="flex items-center bg-white flex-col w-3/5 rounded-2xl m-auto shadow-2xl">
        <Header />
        <TaskInput onSubmit={addTask} />
        {data.length
          ? data?.map((todo) => (
              <TodoRow
                key={todo.id}
                task={todo}
                deleteOne={deleteTask}
                changeStatus={changeTaskStatus}
              />
            ))
          : 'no items added yet'}
      </div>
    </div>
  );
};

export default App;
