import React from "react";
import UserExpenseItem from "../UserExpenseItem/UserExpenseItem";
import classes from "./UserExpenseList.module.css";
import Button from "../../../shared/components/UIElements/Button/Button";

const UserExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={classes.container}>
        <div className={classes.item_container}>
          <h2>No Expenses found for this month. Create one?</h2>
          <Button to="/places/new">ADD EXPENSE</Button>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <ul>
        {props.items.map((userExpenseItem) => (
          <UserExpenseItem
            key={userExpenseItem.id}
            id={userExpenseItem.id}
            image={userExpenseItem.image}
            name={userExpenseItem.name}
            description={userExpenseItem.description}
            price={userExpenseItem.price}
            category={userExpenseItem.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserExpenseList;
