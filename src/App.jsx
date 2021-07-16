/* eslint-disable linebreak-style */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// let btnFunction='new'; plan to use it later

function Itemslist(props) {
  const { className, list: itemsArray } = props;
  const clickAction = {
    edit(e) {
      e.preventDefault();
      // e.target.attributes.index.value ; plan to use it later
    },
    delete(e) {
      e.preventDefault();
      // e.target.attributes.index.value ; plan to use it later
    },
  };

  const items = useMemo(
    () => itemsArray.map((item, index) => {
      const id = index; // just cheating ESLint
      return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={id}
        >
          <span className="title">{item}</span>
          <span>
            <button type="button" onClick={clickAction.edit} data-edit>
              <i className="bi bi-pencil-square blue" index={index} />
            </button>
            <button type="button" onClick={clickAction.delete} data-delete>
              <i className="bi bi-x-circle red" index={index} />
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
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function App() {
  const [itemsarray, setItemsarray] = useState([]);
  const [inputvalue, setInputvalue] = useState('');

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleSubmit = () => {
    setItemsarray([...itemsarray, inputvalue]);
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
          list={itemsarray}
        />
      </section>
    </div>
  );
}
export default App;
