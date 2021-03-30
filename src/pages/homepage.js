import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { navigateToPage } from "../routes/navigation";
import { HomeNavBar, UserDetails, TaskSection, DropDownSection } from "../components/index";
import { fetchData } from "../api/fetch";

const initialState = {
  username: "",
  password: "",
};

function HomePage() {
  const [currentTab, setCurrentTab] = useState(0);
  // currenttab is used to handle which page to display
  const [userData, setUserData] = useState(initialState);
  // userdata -> username, password from local storage
  const [toDoList, setTodoList] = useState(null);
  // list data from the api call
  const [listLength, setListLength] = useState(0);
  // length saved to append index for newer elements added
  // NOTE: most state based management is done from homepage.js and passed onto the children pages

  const history = useHistory();

  const checkLoginStatus = async () => {
    const user = await localStorage.getItem("username");
    const password = await localStorage.getItem("password");
    // we save user details for tab 3/ userdetails component
    let firstTime = await localStorage.getItem("loggedInFirstTime");
    firstTime = firstTime === "true" ? true : false;
    const hasUserLoggedIn = user ? true : false;

    // when user has logged in for the first time without selecting remember me
    if (firstTime && !hasUserLoggedIn) {
      const firstTimeUserData = await JSON.parse(
        localStorage.getItem("firstTimeUserData")
      );
      setUserData(firstTimeUserData);
    } else {
      setUserData({ username: user, password });
    }

    // if data not present in local storage we logout the user
    if (!hasUserLoggedIn && !firstTime) {
      handleLogout();
    }

    // set status as first time login to null for future logins
    setTimeout(() => {
      localStorage.setItem("loggedInFirstTime", null);
    }, 1000);
  };

  // method for API call
  const getTodoList = async () => {
    const responseFromAPI = await fetchData();
    // we have defined method fetchData in fetch.js
    if (responseFromAPI && responseFromAPI.result) {
      // we check if the api call was successfull or not
      // if successfull we save in state which is later passed to child component (task section)
      setTodoList(responseFromAPI.result);
      setListLength(responseFromAPI.result.length + 1);
    }
  };

  const deleteFromList = (deletedIndex) => {
    let updatedList = toDoList.filter((item, index) => deletedIndex !== index);
    // filtering out the deleted element and updating list
    setTodoList(updatedList);
  };

  const addToList = (addedItem) => {
    const { completedStatus, taskName } = addedItem;
    const newTask = {
      userId: 1,
      id: listLength,
      title: taskName,
      completed: completedStatus,
    };
    // creating object similar to original array from API and adding to the list in state
    toDoList.push(newTask);
    setListLength(listLength + 1);
    setTodoList(toDoList);
  };

  // component did mount to check login status and api call
  useEffect(() => {
    checkLoginStatus();
    getTodoList();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigateToPage(history, "login");
  };

  // switch case to handle which page to display depending upon selection on navbar
  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return <DropDownSection/>;
      case 1:
        return (
          <TaskSection
            taskList={toDoList}
            deleteItem={(index) => deleteFromList(index)}
            addItem={(data) => addToList(data)}
          />
        );
      case 2:
        return (
          <UserDetails
            username={userData.username}
            userPassword={userData.password}
            logout={() => handleLogout()}
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HomeNavBar
          currentTab={currentTab}
          setCurrentTab={(index) => setCurrentTab(index)}
        />
        {renderTab()}
      </div>
    </>
  );
}

export default HomePage;
