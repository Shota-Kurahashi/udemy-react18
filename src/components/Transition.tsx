import { useState } from "react";
import { Avatar } from "./Avatar";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

const generateDummyData = (): Task[] => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    title: `Task ${i}`,
    assignee: i % 3 === 0 ? member.a : i % 3 === 1 ? member.b : member.c,
  }));
};

const tasks = generateDummyData();

const filterTasks = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((task) => task.assignee === assignee);
};

export const Transition = () => {
  const [isShowList, setIsShowList] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    setTaskList(filterTasks(assignee));
  };

  return (
    <div>
      <p>Transition</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Avatar
          children={member.a}
          onClick={onClickAssignee}
          isSelected={selectedAssignee === member.a}
        />
        <Avatar
          children={member.b}
          isSelected={selectedAssignee === member.b}
          onClick={onClickAssignee}
        />
        <Avatar
          children={member.c}
          isSelected={selectedAssignee === member.c}
          onClick={onClickAssignee}
        />
      </div>
      <br />
      <button onClick={() => onClickAssignee("")}>リセット</button>
      <br />
      <button onClick={() => setIsShowList((prev) => !prev)}>
        表示/非表示
      </button>
      <br />
      {isShowList && <TaskList taskList={taskList} />}
    </div>
  );
};
