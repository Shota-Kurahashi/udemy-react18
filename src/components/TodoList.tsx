import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const data = await axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);

  return data;
};

export const TodoList = () => {
  const { data } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  return (
    <div
      style={{
        height: "300px",
        border: "2px solid #ccc",
        backgroundColor: "mistyrose",
        padding: "16px",
        overflowY: "scroll",
      }}
    >
      <h2>TodoList</h2>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
