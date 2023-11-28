import axios from "axios";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <BsPencilSquare className="icon" onClick={updateToDo} />
        <FaTrashAlt className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
