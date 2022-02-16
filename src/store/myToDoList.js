export const getMyToDoList = () => {
  let myToDoList = window.localStorage.getItem('myToDoList');
  if (myToDoList == null || myToDoList === '') {
    myToDoList = [];
  } else {
    myToDoList = JSON.parse(myToDoList);
  }
  return myToDoList;
};

export const setMyToDoList = (myToDoList) => {
  window.localStorage.setItem('myToDoList', JSON.stringify(myToDoList));
};
