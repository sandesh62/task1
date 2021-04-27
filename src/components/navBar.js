import { Navbar, Button, Nav } from "react-bootstrap";
const navBarList = [
  { index: 0, name: "Home" },
  { index: 1, name: "Tasks" },
  { index: 2, name: "User" },
];
function HomeNavBar({ currentTab, setCurrentTab }) {
  // currentTab (variable), setCurrentTab (method) passed as props from parent (homepage)
  return (
    <>
      <Navbar
        style={{
          width: "100%",
          alignItems: "center",
          background: "gray",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>LOGO</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {navBarList.map((item, index) => (
            <div
              style={{
                width: "30%",
                padding: 30,
                backgroundColor: currentTab === index ? "black" : "gray",
              }}
              onClick={() => setCurrentTab(index)}
            >
              <label
                style={{
                  color: currentTab === index ? "white" : "black",
                }}
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </Navbar>
    </>
  );
}

export default HomeNavBar;
