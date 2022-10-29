import React from "react";
import classes from "./NewExpense.module.css";
import Input from "../../../shared/components/UIElements/Input/Input";
import Button from "../../../shared/components/UIElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
import { useForm } from "../../../shared/hooks/form-hook";

const NewExpense = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitExpenseHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className={classes.expense_form} onSubmit={submitExpenseHandler}>
      <Input
        id="title"
        type="text"
        element="input"
        label="Expense Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid expense name."
        onInput={inputHandler}
      />
      <Input
        id="price"
        element="input"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid price."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (Min. 5 characters)."
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        ADD EXPENSE
      </Button>
    </form>
  );
};

export default NewExpense;
