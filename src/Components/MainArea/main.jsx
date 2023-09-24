import "./main.css";
import { useState } from "react";
import FriendListArea from "../FriendListArea/friendList";
import AddFriendArea from "../AddFriendArea/addFriend";
import BillSplitArea from "../BillSplitArea/billSplit";

const MainArea = () => {
  const [toggleBtnStatus, setToggleBtnStatus] = useState(false);
  const [selectSplitFrndState, setSelectSplitFrndState] = useState(false);
  const [selectSplitFriend, setSelectSplitFriend] = useState({});
  const [friendsList, setFriendsList] = useState([
    {
      id: 1,
      name: "Zakir",
      credit: 50,
      imageUrl:
        "https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE=",
    },
    {
      id: 2,
      name: "Hamza",
      credit: -100,
      imageUrl:
        "https://img.freepik.com/free-photo/indoor-portrait-pleased-handsome-ordinary-european-man-with-moustache-beard-smiling-broadly-feeling-confident-happy-while-making-arrangement-wedding-gray-wall_176420-22384.jpg",
    },
    {
      id: 3,
      name: "Abdullah",
      credit: 0,
      imageUrl:
        "https://media.istockphoto.com/id/1090883158/photo/portrait-of-smiling-handsome-man-in-blue-polo-shirt-standing-with-crossed-arms-isolated-on.jpg?s=612x612&w=0&k=20&c=UyWX-ABf5WBWjJzmS8qcn_ooqNAwBBQUL5mlEZ0UyIo=",
    },
  ]);

  return (
    <div className="MainArea">
      <div className="leftArea">
        <FriendListArea
          friendsList={friendsList}
          setSelectSplitFrndState={setSelectSplitFrndState}
          selectSplitFriend={selectSplitFriend}
          setSelectSplitFriend={setSelectSplitFriend}
        />
        <AddFriendArea
          toggleBtnStatus={toggleBtnStatus}
          setToggleBtnStatus={setToggleBtnStatus}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
        />
        <div className="toggleButton">
          <button
            className="toggleBtn"
            onClick={() => {
              setToggleBtnStatus((prvStatus) => !prvStatus);
            }}>
            {toggleBtnStatus ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
      <div className="rightArea">
        <BillSplitArea
          selectSplitFriend={selectSplitFriend}
          selectSplitFrndState={selectSplitFrndState}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          setSelectSplitFrndState={setSelectSplitFrndState}
          setSelectSplitFriend={setSelectSplitFriend}
        />
      </div>
    </div>
  );
};

export default MainArea;
