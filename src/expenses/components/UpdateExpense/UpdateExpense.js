import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../../shared/components/UIElements/Input/Input";
import Button from "../../../shared/components/UIElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
import classes from "./UpdateExpense.module.css";
import { useForm } from "../../../shared/hooks/form-hook";

const DUMMY_USER_EXPENSES = [
  {
    id: "e1",
    image: "",
    name: "Book",
    description: "a book from Stimatzki",
    price: "80",
    category: "other",
    creatorId: "u1",
  },
  {
    id: "e2",
    image: "",
    name: "Pizza",
    description: "a pizza from pizzaHut",
    price: "50",
    category: "food",
    creatorId: "u1",
  },
];

const UpdateExpense = () => {
  const expenseID = useParams().expenseId;

  /// const expenseData = useLoaderData();

  const identifiedExpense = DUMMY_USER_EXPENSES.find(
    (expense) => expense.id === expenseID
  );

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: identifiedExpense.name,
        isValid: true,
      },
      price: {
        value: identifiedExpense.price,
        isValid: true,
      },
      description: {
        value: identifiedExpense.description,
        isValid: true,
      },
    },
    true
  );

  useEffect(() => {
    setFormData(
      {
        name: {
          value: identifiedExpense.name,
          isValid: true,
        },
        price: {
          value: identifiedExpense.price,
          isValid: true,
        },
        description: {
          value: identifiedExpense.description,
          isValid: true,
        },
      },
      true
    );
  }, [setFormData, identifiedExpense]);

  if (!identifiedExpense) {
    return <div className={classes.center}>Can't find this expense!</div>;
  }

  const updatedExpenseSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    formState.inputs.name.value && (
      <form
        className={classes.expense_form}
        onSubmit={updatedExpenseSubmitHandler}
      >
        <Input
          id="title"
          element="input"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.name.value}
          initialValid={formState.inputs.name.isValid}
        />
        <Input
          id="price"
          element="input"
          label="Price"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid price."
          onInput={inputHandler}
          initialValue={formState.inputs.price.value}
          initialValid={formState.inputs.price.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid description (Min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE EXPENSE
        </Button>
      </form>
    )
  );
};

export default UpdateExpense;

export function loader({ params }) {
  return params.expenseId;
}
