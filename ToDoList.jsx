import React,{useState} from "react";
import ToDoListComp from './ToDoListComp';
const ToDoList = () =>
{
    const [items,addItem] = useState();
    const [itemTillNow, setItem] = useState([]);
    const update = (event)=>
    {
           addItem(event.target.value);
    }  
    const handle =() =>
    {
            setItem((preValue)=>
            {
                return[...preValue,items];
            });
        addItem("");
    }
    const deleteItem = (id) =>
    {
        setItem((oldItems)=>
        {
            return oldItems.filter((arrEl,index)=>
            {
                return index!==id;
            });
        });
    }

    return(
        <>
            <div className = "main_div">
                <div className = "center_div">
                    <h1>To Do List</h1>
                    <input 
                        type = "text"
                        name = "add"
                        placeholder = "add an item"
                        onChange = {update}
                        value = {items}
                    />
                    <button className = "plus" onClick = {handle}>+</button>
                    <ol>
                        {/* <li>{itemTillNow}</li> */}
                        {itemTillNow.map((curValu,index)=>
                            {
                                return <ToDoListComp 
                                    text = {curValu} 
                                    key = {index}
                                    id = {index}
                                    onSelect = {deleteItem}
                                />  
                            }
                        )}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default ToDoList;