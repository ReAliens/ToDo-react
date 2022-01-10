export const getData = () => {
  const storedData = JSON.parse(localStorage.getItem('todoList')) || [];
  return storedData;
};

export const sendData = (data) => {
  return localStorage.setItem('todoList', JSON.stringify(data));
};
