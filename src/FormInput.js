
// @ts-ignore
import "./css/FormInput.css";
import { SquarePlus } from 'lucide-react';

// @ts-ignore
function FormInput({inputJob, onChange, onClick}) {
    return (
        <div id="FormInput">
            <input 
                value={inputJob} 
                className="input"
                placeholder="Add new task" 
                onChange={onChange}
                onKeyUp={e => (e.key === "Enter" || e.keyCode === 13) ? onClick(inputJob) : {}}
            />
            <button 
                className="btnAdd" 
                onClick={onClick}
            >
                <span><SquarePlus/></span>
            </button>
        </div>
    )
}

export default FormInput;