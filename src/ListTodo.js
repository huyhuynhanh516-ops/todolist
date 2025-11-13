
// @ts-ignore
import "./css/ListTodo.css";
import { Trash } from 'lucide-react';

// @ts-ignore
function ListTodo({datas, handleDelete, isDone, handleCheck}) {
    return (
        <div id="listTodo">
            <ul>
                {
                    // @ts-ignore
                    datas.map((item, index) => {
                        return <li key={index}> 
                            <input
                                checked={isDone.includes(index)}
                                id={item + index} 
                                className="isDone" 
                                type="checkbox"
                                onChange={() => handleCheck(index)}
                            /> 
                            <label className="title" htmlFor={item + index}>{item}</label> 
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