import './styles.css'

function CustomButton({title,type,buttonColor}){
    return <button type={type} className={`btn ${buttonColor} px-5 py-2`}>{title}</button>
}

export default CustomButton