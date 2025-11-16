
// @ts-ignore
import "./css/ListTodo.css";
import { Trash } from 'lucide-react';

// @ts-ignore
function ListTodo({datas, handleDelete, handleCheck}) {
    return (
        <div id="listTodo">
            <ul>
                {
                    // @ts-ignore
                    datas?.map((item, index) => {
                        return <li key={index}> 
                            <input
                                checked={item.isDone}
                                id={item.name + index} 
                                className="isDone" 
                                type="checkbox"
                                onChange={() => handleCheck(index)}
                            /> 
                            <label 
                                className="title"
                                style={{ textDecoration: item.isDone ? "line-through" : "none" }}
                                htmlFor={item.name + index}>
                                {item.name}
                            </label> 
                            <Trash
                                className="btnDelete"
                                size={18} color="red" 
                                onClick={() => handleDelete(index)} 
                            /> 
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListTodo;