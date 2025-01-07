import './styles.css';
import { FaEye,FaAt } from "react-icons/fa";
function CustomInput(props){
    return(
        <div className='d-flex align-items-center align-content-center justify-content-center mb-4 py-2 px-2 border border-1 border-secondary rounded-1'>
        <input type={props.type} className='px-4 border-0 outline-0 border-light' placeholder={props.placeholder} aria-label={props.placeholder} aria-describedby="basic-addon1" value={props.value}
         onChange={(event)=>props.onChangeHandler(event)}
         style={{outline:'none',border:'none'}}
        />
        {
            props.type==='text'? <FaAt/> : null
        }
        {
           props.type==='password'? <FaEye/> :null
        }
        </div>
    )
}

export default CustomInput