import CustomInput from "../input-component/CustomInput"
import CustomButton from "../custom-button/CustomButton"

function FormComponent(){
    return(
        <html style={
          {
              height:'100vh',
              width:'100%',
              backgroundColor:'rgba(164, 164, 164,0.8)',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              margin:'0px',
              padding:'0px'
          }
        }>
          <form style={
          {
            backgroundColor:'white',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'10px',
            height:'250px',
            borderRadius:'10px'
          }
        }>
          <h2 style={{color:'blue',fontWeight:'600',fontSize:'35px'}}>Sign In</h2>
          <CustomInput placeholder = 'Enter your username'/>
          <CustomInput placeholder = 'Enter your password'/>
          <CustomButton/>
        </form>
        </html>
    )
}

export default FormComponent