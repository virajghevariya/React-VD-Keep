import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const [showData, setShowData] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div
        className="main_note"
        onDoubleClick={() => {
          setShowData(false);
        }}
      >
        <form>
          <input
            type="text"
            value={state.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
            autoComplete="off"
            onClick={() => {
              setShowData(true);
            }}
          />
          {showData ? (
            <textarea
              rows=""
              cols=""
              value={state.content}
              name="content"
              placeholder="Write a Note..."
              onChange={handleChange}
            ></textarea>
          ) : null}
          <Button
            className="addBtn"
            onClick={() => {
              props.passText(state);
              setState({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
