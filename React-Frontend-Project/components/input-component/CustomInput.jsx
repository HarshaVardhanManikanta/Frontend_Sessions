import './styles.css';

function CustomInput(props){
    return(
        <>
        <input type="text" placeholder={props.placeholder} className='input_styles'/><br />
        </>
    )
}

export default CustomInput