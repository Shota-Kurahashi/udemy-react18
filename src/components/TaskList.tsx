import React, { FC, useDeferredValue } from "react";
import { Task } from "./Transition";

type Props = {
  taskList: Task[];
};

export const TaskList: FC<Props> = ({ taskList }) => {
  const deferredTaskList = useDeferredValue(taskList);
  return (
    <>
      {deferredTaskList.map((task) => (
        <div
          style={{
            width: "300px",
            margin: "auto",
            backgroundColor: "lavender",
          }}
          key={task.id}
        >
          <p>タイトル:{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </>
  );
};
