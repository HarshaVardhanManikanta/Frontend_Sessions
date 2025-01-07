import CustomInput from "../input-component/CustomInput"
import CustomButton from "../custom-button/CustomButton"
import CustomHeading from "../custom-heading/CustomHeading"
import {useState} from 'react'

function SignUp(){
    const [userName,setUserName] = useState('') //this state is for username
    const [password,setPassword] = useState('') //this state is for password
    const [confirmPassword,setConfirmPassword] = useState('') //this state is for confirm password

    //event handler for username updation
    function handleUserNameChange(event){
        const value = event.target.value
        console.log(value)
        setUserName(value)
    }

    //event handler for password updation
    function handlePasswordChange(event){
        const value = event.target.value
        setPassword(value)
    }

     //event handler for password updation
     function handleConfirmPasswordChange(event){
        const value = event.target.value
        setConfirmPassword(value)
    }
    return(
          <form className="container-fluid px-3 d-flex flex-column align-items-center">
          <CustomHeading heading='Create an Account'/>
          <CustomInput placeholder = 'Enter your username' type='text' onChangeHandler={handleUserNameChange} value={userName}/>
          <CustomInput placeholder = 'Enter your password' type='password'  onChangeHandler={handlePasswordChange} value={password}/>
          <CustomInput placeholder = 'Confirm your password' type='password'  onChangeHandler={handleConfirmPasswordChange} value={confirmPassword}/>
          <CustomButton title="Register" type='submit' buttonColor='btn-outline-primary'/>
        </form>
    )
}

export default SignUp