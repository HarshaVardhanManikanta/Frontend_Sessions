import 'bootstrap/dist/css/bootstrap.min.css';


import SignIn from "../components/sign-in-form/SignIn"
import LandingContent from '../components/landing-page-content/LandingContent';
import SignUp from '../components/sign-up-form/SignUp';
import Counter from '../components/counter';
import ReactList from '../components/ReactList';
import './App.css'


function App() {
 return (
    <div className='container-fluid d-flex flex-row align-items-center justify-content-center vh-100 '>
    <LandingContent/>
    <SignIn/>
    {/* <SignUp/> */}
    </div>
  )
}

export default App
