import "./friendList.css";

const FriendListArea = ({
  friendsList,
  setSelectSplitFrndState,
  selectSplitFriend,
  setSelectSplitFriend,
}) => {
  return (
    <section className="FriendListArea">
      <EachFriendArea
        friendsList={friendsList}
        setSelectSplitFrndState={setSelectSplitFrndState}
        selectSplitFriend={selectSplitFriend}
        setSelectSplitFriend={setSelectSplitFriend}
      />
    </section>
  );
};

const EachFriendArea = ({
  friendsList,
  setSelectSplitFrndState,
  selectSplitFriend,
  setSelectSplitFriend,
}) => {
  return (
    <>
      {friendsList.map((eachFrnd, index) => (
        <div
          key={index}
          className="EachFriendArea"
          style={
            selectSplitFriend?.id === eachFrnd.id
              ? { backgroundColor: "#ffeed7" }
              : { backgroundColor: "#fcfcfc" }
          }>
          <div className="image">
            <img src={eachFrnd.imageUrl} alt="Friend-Image" />
          </div>
          <div className="text">
            <h5>{eachFrnd.name}</h5>
            <p
              style={
                eachFrnd.credit < 0
                  ? { color: "#21a300" }
                  : eachFrnd.credit > 0
                  ? { color: "#d10000" }
                  : { color: "#444" }
              }>
              {eachFrnd.credit < 0
                ? `${eachFrnd.name} owes you ${eachFrnd.credit
                    .toString()
                    .split("")
                    .slice(1)
                    .join("")}Rs `
                : eachFrnd.credit > 0
                ? `You owe ${eachFrnd.name} ${eachFrnd.credit}Rs`
                : `You and ${eachFrnd.name} are even`}
            </p>
          </div>
          <div className="button">
            {eachFrnd.id === selectSplitFriend?.id ? (
              <button
                className="selectBtn"
                onClick={() => {
                  setSelectSplitFrndState(false);
                  setSelectSplitFriend({});
                }}>
                Close
              </button>
            ) : (
              <button
                className="selectBtn"
                onClick={() => {
                  setSelectSplitFrndState(true);
                  setSelectSplitFriend(eachFrnd);
                }}>
                Select
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendListArea;
