import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {useState} from 'react'
import {render} from 'react-dom'
let list=[];
const input=document.getElementById('input');

let btnFunction='new';
let clickAction={
  'edit':function(e){
    e.preventDefault();
    console.log(e.target.attributes.index.value)
  },
'delete':function(e){
  e.preventDefault();
  console.log(e.target.attributes.index.value)

}
}

function Itemslist (props){
  let itemsarray=props.list
  if(itemsarray.length>0){
  const items=itemsarray.map((item,index)=>(<li className="list-group-item d-flex justify-content-between align-items-center" >
  <span className="title">{item}</span>
  <span>
      <a href="#" onClick={props.onClick.edit} data-edit ><i className="bi bi-pencil-square blue" index={index} ></i></a>
      <a href="#" onClick={props.onClick.delete}  data-delete><i className="bi bi-x-circle red" index={index}></i></a>
  </span>
</li>))
return items
  }
  return ""
}




function App() {
  console.log("render")
  var [itemsarray,setItemsarray]=useState(list);
  let value;
  const handleChange=(e)=>{
    e.preventDefault();
value=e.target.value;
console.log(value,1);
  }
const add=(e)=>{
let array=[...itemsarray];
  array.push(value);
 setItemsarray(array);
}
  return (
    <div className="App">
    <div className="add-task">
              <input type="text" className="todo-input" id="input" placeholder="        Add task..." onChange={handleChange}/>
              <button className="todo-button" type="submit" onClick={add}>+</button>
       </div>
       <section className="todo-container">
        <ul className="todo-list">
        <Itemslist list={itemsarray} onClick={clickAction}/>
        </ul>
    </section>
  
</div>
  
  );
}
export default App
