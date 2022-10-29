import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./UserExpenseItem.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../../shared/components/UIElements/Button/Button";
import Modal from "../../../shared/components/UIElements/Modal/Modal";
import { AuthContext } from "../../../shared/context/auth-context";

const UserExpenseItem = (props) => {
  const authContext = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const creatorId = useParams().userId;

  const openModalDetailsHandler = () => {
    setShowDetails(true);
  };

  const closeModalDetailsHandler = () => {
    setShowDetails(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETED");
  };

  return (
    <>
      <Modal
        show={showDetails}
        onCancel={closeModalDetailsHandler}
        header={props.name}
        contentClass="expense-item__modal-content"
        footerClass="expense-item__modal-actions"
        footer={<Button onClick={closeModalDetailsHandler}>CLOSE</Button>}
      >
        <div className={classes.detailsModalContainer}>
          <h3>{props.description}</h3>
          <div>
            <img src={props.image} alt={props.name} />
          </div>
          <h4>
            <b>Category:</b> {props.category}
          </h4>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="expense-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete '{props.name}'? It can't be undone.
        </p>
      </Modal>
      <li className={classes.item_container}>
        <ul className={classes.details}>
          <li>
            <b>Item Name:</b> {props.name}
          </li>
          <li>
            <b>Price:</b> ₪{props.price}
          </li>
          <li>
            <b>Purchase Date:</b> some date
          </li>
        </ul>
        <div className={classes.side_info}>
          <h4 onClick={openModalDetailsHandler}>
            SHOW
            <br /> DETAILS
          </h4>
          {authContext.isLoggedIn && (
            <Button to={`/expenses/${creatorId}/${props.id}`}>
              <AiOutlineEdit />
            </Button>
          )}
          {authContext.isLoggedIn && (
            <Button danger onClick={showDeleteWarningHandler}>
              <RiDeleteBin6Line />
            </Button>
          )}
        </div>
      </li>
    </>
  );
};

export default UserExpenseItem;
