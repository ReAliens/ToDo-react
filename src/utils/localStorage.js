export const getData = () => {
  const storedData = JSON.parse(localStorage.getItem('todoList')) || [];
  return storedData;
};

export const sendData = (data) => {
  localStorage.setItem('todoList', JSON.stringify(data));
};
