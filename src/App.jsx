/* eslint-disable linebreak-style */
import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function Itemslist(props) {
  const {
    className, list: itemsArray, handelDelete, handelEdit, handelDone,
  } = props;
  let completeIconClass;
  let titleStyle;
  const items = useMemo(
    () => itemsArray.map((item, index) => {
      completeIconClass = item.isDone
        ? 'bi-check-circle-fill green'
        : 'bi-check-circle green';
      titleStyle = item.isDone ? 'title done' : 'title';
      return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <span className={titleStyle}>{item.task}</span>
          <span>
            <button type="button" onClick={() => handelDone(index)} data-done>
              <i className={completeIconClass} />
            </button>
            <button type="button" onClick={() => handelEdit(index)} data-edit>
              <i className="bi bi-pencil-square blue" />
            </button>
            <button type="button" onClick={() => handelDelete(item.id)} data-delete>
              <i className="bi bi-x-circle red" index={item.id} />
            </button>
          </span>
        </li>
      );
    }),
    [itemsArray],
  );
  return <ul className={className}>{items}</ul>;
}

Itemslist.propTypes = {
  className: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  handelDelete: PropTypes.func.isRequired,
  handelEdit: PropTypes.func.isRequired,
  handelDone: PropTypes.func.isRequired,

};

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [inputvalue, setInputvalue] = useState('');
  const [btnFunction, setBtnFunction] = useState('newItem');
  const [editindex, setEditindex] = useState(-1);
  const textInput = useRef(null);

  const handelDone = (index) => {
    const newArray = [...itemsArray];
    newArray[index].isDone = !newArray[index].isDone;
    setItemsArray(newArray);
    textInput.current.focus();
  };

  const handelEdit = (index) => {
    setEditindex(index);
    setBtnFunction('edit');
    setInputvalue(itemsArray[index].task);
    textInput.current.focus();
  };

  const handelDelete = (id) => {
    const newList = itemsArray.filter((item) => item.id !== id);
    setItemsArray(newList);
    setBtnFunction('newItem'); // in order if the user press edit then delete without submiting new value
    textInput.current.focus();
  };
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleSubmit = {
    newItem() {
      setItemsArray([...itemsArray, { id: uuidv4(), task: inputvalue, isDone: false }]);
      setInputvalue('');
      textInput.current.focus();
    },
    edit() {
      const newArray = [...itemsArray];
      newArray[editindex].task = inputvalue;
      setItemsArray(newArray);
      setBtnFunction('newItem');
      setInputvalue('');
      textInput.current.focus();
    },

  };
  return (
    <div className="App">
      <div className="add-task">
        <input
          type="text"
          className="todo-input"
          id="input"
          placeholder="Add task..."
          onChange={handleChange}
          value={inputvalue}
          ref={textInput}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit[btnFunction]}>
          +
        </button>
      </div>
      <section className="todo-container">
        <Itemslist
          className="todo-list"
          list={itemsArray}
          handelDelete={handelDelete}
          handelEdit={handelEdit}
          handelDone={handelDone}
        />
      </section>
    </div>
  );
}
export default App;
