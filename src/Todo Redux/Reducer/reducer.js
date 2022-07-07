const initialState = {
  todo: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: id,
            data,
          },
        ],
      };

    case "DELETE-TODO":
      const updatedList = state.todo.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        todo: updatedList,
      };
    default:
      return state;
  }
};
