
// @ts-ignore
import "./css/Footer.css";

// @ts-ignore
function Footer({isDone}) { 
    return (
        <div id="Footer">
            <hr />
            {
                isDone.length > 0 ? isDone.length + ' task remaining' : 'no task'
            }
        </div>
    )
}

export default Footer;