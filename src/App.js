// eslint-disable-next-line linebreak-style
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { useState, useMemo } from 'react';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// let btnFunction='new'; plan to use it later
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

function Itemslist(props) {
  const itemsarray = { ...props }.list;
  const items = useMemo(
    () => itemsarray.map((item, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={index}
      >
        <span className="title">{item}</span>
        <span>
          <a href="#" onClick={props.onClick.edit} data-edit>
            <i className="bi bi-pencil-square blue" index={index} />
          </a>
          <a href="#" onClick={props.onClick.delete} data-delete>
            <i className="bi bi-x-circle red" index={index} />
          </a>
        </span>
      </li>
    )),
    [itemsarray],
  );
  return <ul {...props}>{items}</ul>;
}

function App() {
  const [itemsarray, setItemsarray] = useState([]);
  const [inputvalue, setInputvalue] = useState('');
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleSubmit = () => {
    itemsarray.push(inputvalue);
    setItemsarray([...itemsarray]);
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
          onClick={clickAction}
        />
      </section>
    </div>
  );
}
export default App;
