import { useState } from "react";
import "./App.css";
import {
  useAddTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "./rtk-query/apiSlice";

function App() {
  const {
    isLoading,
    isError,
    data: taskList,
    error,
    refetch,
  } = useGetTasksQuery();
  const [addNewTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [task, setTask] = useState("");
  // console.log(ans);
  const handleAddTask = () => {
    addNewTask({ value: task, completed: false });
    setTask("");
    // refetch();
  };

  const handleDelete = () => {};

  const handleUpdate = (item) => {
    console.log({ item });
    updateTask({ id: item.id, completed: !item.completed });
  };

  return (
    <div className="App">
      <h5>Task List</h5>
      <div>
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          type="text"
          placeholder="add task"
        />
        <button onClick={handleAddTask}>add</button>
      </div>
      {taskList?.map((item, i) => {
        return (
          <div>
            <p key={i}>
              {item.value}
              {"    "}
              <span onClick={() => handleUpdate(item)} style={{ color: "red" }}>
                update
              </span>
              <span
                onClick={() => handleDelete(item)}
                style={{ color: "green" }}
              >
                delete
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
