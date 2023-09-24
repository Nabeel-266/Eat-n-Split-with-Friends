import "./addFriend.css";
import { useState } from "react";

const AddFriendArea = ({
  toggleBtnStatus,
  setToggleBtnStatus,
  friendsList,
  setFriendsList,
}) => {
  const [frndName, setFrndName] = useState("");
  const [frndImgURL, setFrndImgURL] = useState("");
  const [userId, setUserId] = useState(4);

  const addFriendInFriendList = () => {
    if (!!frndName && !!frndImgURL) {
      const newFriend = {
        id: userId,
        name: frndName,
        credit: 0,
        imageUrl: frndImgURL,
      };

      setFriendsList([...friendsList, newFriend]);
      setUserId((prvId) => prvId + 1);
      setToggleBtnStatus(false);
      setFrndName("");
      setFrndImgURL("");
      document.getElementById("friendName").value = "";
      document.getElementById("friendImageURL").value = "";
    } else {
      alert("Please! Fill in the Friend Name and Image URL both fields");
    }
  };

  return (
    <section
      className="AddFriendArea"
      style={toggleBtnStatus ? { display: "block" } : { display: "none" }}>
      <div className="friendInfo">
        <span className="addFriendName">
          <label htmlFor="friendName">👬 Friend Name</label>
          <input
            type="text"
            name="friendName"
            id="friendName"
            onChange={(e) => setFrndName(e.target.value)}
            autoComplete="off"
          />
        </span>

        <span className="addFriendImage">
          <label htmlFor="friendImageURL">📷 Image URL</label>
          <input
            type="url"
            name="friendImageURL"
            id="friendImageURL"
            onChange={(e) => setFrndImgURL(e.target.value)}
            autoComplete="off"
          />
        </span>

        <button className="addFriendBtn" onClick={addFriendInFriendList}>
          Add
        </button>
      </div>
    </section>
  );
};

export default AddFriendArea;
