import React from "react";
import Todo from "./ui/Todo";
import { store } from "./store";
import { Provider } from "react-redux";
const index = () => {
  return (
    <Provider store={store}>
      <Todo />;
    </Provider>
  );
};

export default index;
