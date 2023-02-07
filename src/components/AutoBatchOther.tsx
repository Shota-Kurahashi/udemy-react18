import React from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const AutoBatchOther = () => {
  console.log("AutoBatchOther()");
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [isFinishAPi, setIsFinishAPi] = React.useState(false);
  const onClickHandler = async () => {
    const res: Todo[] = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((data) => data.json());

    setTodos(res);
    setIsFinishAPi(true);
  };
  return (
    <div>
      <p>AutoBatchOther</p>
      <button onClick={onClickHandler}>API実行</button>
      <p>{isFinishAPi ? "true" : "false"}</p>
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};
