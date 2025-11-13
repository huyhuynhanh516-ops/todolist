
// @ts-ignore
import "./css/Content.css";
import FormInput from "./FormInput";
import ListTodo from "./ListTodo";

// @ts-ignore
function Content({inputJob, onChange, onClick, datas, handleDelete, isDone, handleCheck}) {
    return (
        <div id="content">
            <FormInput inputJob={inputJob} onChange={onChange} onClick={onClick} />
            <ListTodo datas={datas} handleDelete={handleDelete} isDone={isDone} handleCheck={handleCheck} />
        </div>
    )
}

export default Content;