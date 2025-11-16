
// @ts-ignore
import "./css/Content.css";
import FormInput from "./FormInput";
import ListTodo from "./ListTodo";

// @ts-ignore
function Content({inputJob, onChange, onClick, datas, handleDelete, handleCheck}) {
    return (
        <div id="content">
            <FormInput inputJob={inputJob} onChange={onChange} onClick={onClick} />
            <ListTodo datas={datas} handleDelete={handleDelete} handleCheck={handleCheck} />
        </div>
    )
}

export default Content;