import React from "react";
import { List } from "immutable";
import PropTypes from "prop-types";
import TaskItem from "../task-item/task-item";

function TaskList({ removeTask, tasks, updateTask }) {
  let taskItems = tasks.map((task, index) => {
    return (
      <TaskItem
        key={index}
        id={index}
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    );
  });

  return <div className="task-list">{taskItems}</div>;
}

export default TaskList;
