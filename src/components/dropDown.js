import { useState } from "react";
import { Modal } from "react-bootstrap";

const dropdownList = [
  { title: "Option 1", description: "Option 1 is selected" },
  { title: "Option 2", description: "You selected Option 2" },
  { title: "Option 3", description: "Option 3 has been selected" },
];
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function DropDownSection() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showDropDownModal, setDropDownModalStatus] = useState(false);

  let optionName = "";
  switch (selectedOption) {
    case 0:
      optionName = "Option 1";
      break;
    case 1:
      optionName = "Option 2";
      break;
    case 2:
      optionName = "Option 3";
      break;
    default:
      break;
  }

  const handleOptionChange = (index) => {
    setSelectedOption(index);
    setDropDownModalStatus(false);
  };

  return (
    <>
      <button
        style={{ margin: 50 }}
        onClick={() => setDropDownModalStatus(true)}
      >
        {showDropDownModal ? "Select Option" : optionName} v
      </button>
      <Modal show={showDropDownModal}>
        {dropdownList.map((item, index) => {
          const { title } = item;
          return (
            <div
              style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <button onClick={() => handleOptionChange(index)}>{title}</button>
            </div>
          );
        })}
      </Modal>
      {!showDropDownModal && (
        <>
          <label>{description}</label>
          {dropdownList.map((item, index) => {
            const { description } = item;
            return selectedOption === index ? (
              <div
                style={{
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <h4>{description}</h4>
              </div>
            ) : null;
          })}
        </>
      )}
    </>
  );
}

export default DropDownSection;
