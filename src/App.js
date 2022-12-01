import "./App.css";
import Header from "./Components/Header/Header";
import InputSearch from "./Components/InputSearch/InputSearch";
import { useState } from "react";
import GroceryList from "./Components/GroceryList/Grocery-list";
import ClearAll from "./Components/ClearAll/ClearAll";
import Message from "./Components/Message/Message";
import { useEffect } from "react";
import UseReff from "./UseReff";
import UseStatee from "./UseStatee";
function App() {
  const [input, setInput] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [editing, setEditing] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      setEdit(false);
      if (input && itemsList.includes(input) === false) {
        let newList = itemsList.filter((listItem) => {
          return listItem !== editing;
        });
        setItemsList([...newList, input]);
        setAlertMsg("added");
        setMessage("item has been edited");
        setInput("");
      } else {
        if (input && itemsList.includes(input) === true) {
          setMessage("already present");
          setAlertMsg("not added");
        } else {
          setMessage("Please enter something");
          setAlertMsg("not added");
        }
      }
    } else {
      if (input.length > 0 && itemsList.includes(input) === false) {
        setItemsList([...itemsList, input.toLowerCase()]);
        setAlertMsg("added");
        setMessage("item has been added");
        setInput("");
      } else {
        if (input && itemsList.includes(input) === true) {
          setMessage("already present");
          setAlertMsg("not added");
        } else {
          setMessage("Please enter something");
          setAlertMsg("not added");
        }
      }
    }
  };

  const handleClearAll = () => {
    setItemsList([]);
    setMessage("List is Empty");
    setAlertMsg("not added");
    setInput("");
  };

  const handleEdit = (item) => {
    setInput(item);
    setEdit(true);
    setEditing(item);
  };

  const handleDelete = (item) => {
    setItemsList(
      itemsList.filter((listItem) => {
        return item !== listItem;
      })
    );
    if (itemsList) {
      setMessage("item has been deleted from list");
      setAlertMsg("not added");
    } else {
      setMessage("List is Empty");
      setAlertMsg("not added");
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setMessage((oldmsg) => {
        let newMessage = oldmsg.replace(oldmsg, "");
        return newMessage;
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <div className="App">
      <div className="grocery-container">
        {message && <Message alertMsg={alertMsg} message={message} />}
        <Header />
        <InputSearch
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <GroceryList
          itemsList={itemsList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <ClearAll itemsList={itemsList} handleClearAll={handleClearAll} />
      </div>
      {/* <UseReff /> */}
      {/* <UseStatee /> */}
    </div>
  );
}

export default App;
