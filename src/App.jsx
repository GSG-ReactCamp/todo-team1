/* eslint-disable linebreak-style */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function Itemslist(props) {
  const { className, list: itemsArray, handelDelete } = props;
  const items = useMemo(
    () => itemsArray.map((item) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={item.id}
      >
        <span className="title">{item.task}</span>
        <span>
          <button type="button" onClick={() => handelDelete(item.id)} data-delete>
            <i className="bi bi-x-circle red" index={item.id} />
          </button>
        </span>
      </li>
    )),
    [itemsArray],
  );
  return <ul className={className}>{items}</ul>;
}

Itemslist.propTypes = {
  className: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  handelDelete: PropTypes.func.isRequired,
};

function App() {
  const [itemsArray, setitemsArray] = useState([]);
  const [inputvalue, setInputvalue] = useState('');

  const handelDelete = (id) => {
    const newList = itemsArray.filter((item) => item.id !== id);
    setitemsArray(newList);
  };
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleSubmit = () => {
    setitemsArray([...itemsArray, { id: uuidv4(), task: inputvalue }]);
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
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          +
        </button>
      </div>
      <section className="todo-container">
        <Itemslist
          className="todo-list"
          list={itemsArray}
          handelDelete={handelDelete}
        />
      </section>
    </div>
  );
}
export default App;
