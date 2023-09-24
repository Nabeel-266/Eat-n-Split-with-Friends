import "./billSplit.css";
import { useState } from "react";

const BillSplitArea = ({
  selectSplitFriend,
  selectSplitFrndState,
  friendsList,
  setFriendsList,
  setSelectSplitFrndState,
  setSelectSplitFriend,
}) => {
  const [billAmount, setBillAmount] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [frndExpense, setFrndExpense] = useState(0);
  const [whoIsPayingTheBill, setWhoIsPayingTheBill] = useState("You");

  function splitingBill() {
    if (billAmount) {
      if (billAmount === yourExpense + frndExpense) {
        const updateFriendList = [...friendsList];
        updateFriendList.map((frnd) => {
          if (frnd.id === selectSplitFriend.id) {
            if (whoIsPayingTheBill === "You") {
              frnd.credit = frnd.credit - frndExpense;
            } else {
              frnd.credit = frnd.credit + yourExpense;
            }
          }
        });
        setFriendsList(updateFriendList);
        setSelectSplitFrndState(false);
        setSelectSplitFriend({});

        setBillAmount(0);
        setYourExpense(0);
        setFrndExpense(0);
        setWhoIsPayingTheBill("You");
        document.getElementById("billValue").value = "";
        document.getElementById("yourExpenseValue").value = "";
        document.getElementById("friendExpenseValue").value = "";
        document.getElementById("billPaymentPerson").value = "You";
      } else {
        alert("Your Bill Amount and Expenses didn't match");
      }
    } else {
      alert("Your Bill Amount is empty");
    }
  }

  return (
    <section
      className="BillSplitArea"
      style={selectSplitFrndState ? { display: "flex" } : { display: "none" }}>
      <header className="billSplitHeader">
        <h2>Split a Bill with {selectSplitFriend.name}</h2>
      </header>
      <div className="billInfo">
        <span className="billAmount">
          <label htmlFor="billValue">💰 Bill Amount</label>
          <input
            type="number"
            name="billValue"
            id="billValue"
            onChange={(e) => {
              setBillAmount(+e.target.value);
            }}
          />
        </span>

        <span className="yourExpense">
          <label htmlFor="yourExpenseValue">🧍‍♂️ Your Expense</label>
          <input
            type="number"
            name="yourExpenseValue"
            id="yourExpenseValue"
            onChange={(e) => {
              setYourExpense(+e.target.value);
            }}
          />
        </span>

        <span className="friendExpense">
          <label htmlFor="friendExpenseValue">
            👬 {selectSplitFriend.name}'s Expense
          </label>
          <input
            type="number"
            name="friendExpenseValue"
            id="friendExpenseValue"
            onChange={(e) => {
              setFrndExpense(+e.target.value);
            }}
          />
        </span>

        <span className="billPayment">
          <label htmlFor="billPaymentPerson">🤑 Who is paying the bill?</label>
          <select
            name="billPaymentPerson"
            id="billPaymentPerson"
            onChange={(e) => {
              setWhoIsPayingTheBill(e.target.value);
            }}>
            <option value="You">You</option>
            <option value={selectSplitFriend.name}>
              {selectSplitFriend.name}
            </option>
          </select>
        </span>

        <button className="billSplitBtn" onClick={splitingBill}>
          Split Bill
        </button>
      </div>
    </section>
  );
};

export default BillSplitArea;
