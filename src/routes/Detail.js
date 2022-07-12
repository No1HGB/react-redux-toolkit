import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";

function Detail({ toDos, onBtnClick }) {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const navigate = useNavigate();

  const handleDel = () => {
    onBtnClick(id);
    navigate("/");
  };
  return (
    <h2>
      <div>{toDo?.text}</div>
      <div>Created at: {toDo?.id}</div>
      <button onClick={handleDel}>DEL</button>
    </h2>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: (id) => dispatch(remove(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
