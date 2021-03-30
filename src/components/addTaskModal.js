import { useState } from "react";

function AddTask({ closeModal, addItem }) {
  const [completedStatus, setCompleted] = useState(null);
  const [taskName, setTaskName] = useState("");
  
  const handleCompletedRadio = (e) => {
    let targetValue = e.currentTarget.value;
    if (targetValue === "true") {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  const handleTaskNameUpdate = (e) => {
    let targetValue = e.currentTarget.value;
    setTaskName(targetValue);
  };

  const handleSaveTask = () => {
    if (completedStatus === null || taskName === "") {
      alert("Please fill in the details to add the task");
    } else {
      addItem({ completedStatus, taskName });
    }
    closeModal()
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          paddingTop: 50,
        }}
      >
        <label>
          <b>Task Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter task name"
          name={"taskName"}
          onChange={handleTaskNameUpdate}
        />
        <label>
          <b>Is Task Completed?</b>
        </label>
        <input
          type="radio"
          id="true"
          name="taskCompleted"
          value="true"
          onChange={handleCompletedRadio}
        />
        <label for="true">True</label>
        <input
          type="radio"
          id="false"
          name="taskCompleted"
          value="false"
          onChange={handleCompletedRadio}
        />
        <label for="false">False</label>
      </div>
      <button onClick={() => handleSaveTask()}>Save Task</button>
      <button onClick={() => closeModal()}>Close Modal</button>
    </>
  );
}

export default AddTask;
