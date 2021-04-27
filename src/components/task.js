import { useState } from "react";
import AddTask from "./addTaskModal";
import { Modal ,Button } from "react-bootstrap";

function TaskSection({ taskList, deleteItem,addItem }) {
  const [showAddModal, setAddModal] = useState(false);
  const renderList = () => {
    return (
      <>
        {taskList.map((item, index) => {
          const { id, title, completed } = item;
          return (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "150%",
                paddingBottom: 20,
              }}
            >
              <label
                style={{
                  width: "5%",
                }}
              >
                {id}
              </label>
              <label
                style={{
                  width: "90%",
                  textAlign: "left",
                }}
              >
                {title}
              </label>
              <label
                style={{
                  width: "10%",
                  textAlign: "left",
                }}
              >
                {String(completed)}
              </label>
              <Button variant="danger" onClick={() => deleteItem(index)}>Delete</Button>
            </div>
          );
        })}
        <Button variant="primary" onClick={() => setAddModal(true)}>Add Task</Button>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          paddingTop: 50,
        }}
      >
        {taskList ? renderList() : "Error! Please try again later"}
        <Modal show={showAddModal} >
          <AddTask closeModal={() => setAddModal(false)} addItem={addItem}/>
        </Modal>
      </div>
    </>
  );
}

export default TaskSection;
