import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {useState} from 'react'
import {render} from 'react-dom'
let list=[1];
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
  const items=itemsarray.map((item,index)=>(<li class="list-group-item d-flex justify-content-between align-items-center" >
  <span class="title">{item}</span>
  <span>
      <a href="#" onClick={props.onClick.edit} data-edit ><i class="bi bi-pencil-square blue" index={index} ></i></a>
      <a href="#" onClick={props.onClick.delete}  data-delete><i class="bi bi-x-circle red" index={index}></i></a>
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
  console.log(value,1,2,3)
  itemsarray.push(value);
 setItemsarray(itemsarray);
//  render(<App />,document.getElementById('root'))


}
  return (
    <div className="App">
    <div className="add-task">
              <input type="text" class="todo-input" id="input" placeholder="        Add task..." onChange={handleChange}/>
              <button class="todo-button" type="submit" onClick={add}>+</button>
       </div>
       <section class="todo-container">
        <ul class="todo-list">
        <Itemslist list={itemsarray} onClick={clickAction}/>
        </ul>
    </section>
  
</div>
  
  );
}
export default App
