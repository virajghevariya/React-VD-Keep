import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [addItem, setAddItem] = useState([]);
  // const [removeItem, setRemoveItem] = useState([]);

  const btnClick = (state) => {
    if (state.title === "" && state.content === "") {
      alert("sorry! Please enter the title & content ");
    } else {
      setAddItem((oldData) => {
        return [...oldData, state];
      });
    }
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currValue, index) => {
        // console.log(index, id);
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passText={btnClick} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      {/* <Footer /> */}
    </>
  );
}

export default App;
