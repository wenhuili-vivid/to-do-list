const toDoListData = 'myToDoList';

export const getMyToDoList = () => {
  let myToDoList = window.localStorage.getItem(toDoListData);
  if (myToDoList == null || myToDoList === '') {
    myToDoList = [];
  } else {
    myToDoList = JSON.parse(myToDoList);
  }
  return myToDoList;
};

export const setMyToDoList = (myToDoList) => {
  window.localStorage.setItem(toDoListData, JSON.stringify(myToDoList));
};
