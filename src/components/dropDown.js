import { useState } from "react";
import { Modal } from "react-bootstrap";
import {Button, DropdownButton, Dropdown }  from "react-bootstrap";

const dropdownList = [
  { title: "Option 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: "Option 2", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'," },
  { title: "Option 3", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" },
];
const description ="Infomation";

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
      <DropdownButton title="Select option"
        style={{ margin: 50 }}
        /*onClick={() => setDropDownModalStatus(true)}*/
      >
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
              <Dropdown.Item onClick={() => handleOptionChange(index)}>{title}</Dropdown.Item>
            </div>
          );
        })}

        
      </DropdownButton>
      
      { (
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
                <h5>{description}</h5>
              </div>
            ) : null;
          })}
        </>
      )}
    </>
  );
}

export default DropDownSection;
