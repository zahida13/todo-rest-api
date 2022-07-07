export const addTodo = (data) => {
  return {
    type: "ADD-TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE-TODO",
    id: id,
  };
};
export const removeTodo = () => {
  return {
    type: "REMOVE-TODO",
  };
};
