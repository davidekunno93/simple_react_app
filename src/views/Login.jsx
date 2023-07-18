import { Form } from "react-bootstrap"
import Register from "./Register"
import { useNavigate } from "react-router-dom"



const Login = () => {
    const navigate = useNavigate();

    const toRegisterPage = () => {
    navigate('/register')
    }
    
    return (<>
        <h1 className='center-text'>Login</h1>

        <div className='reg-div flx-c pad8 bg-gains g-border' style={{borderRadius: '8px', width: '600px', height: '300px', margin: 'auto'}}>
            <label for="un" className="form-label m0">&nbsp;Username</label>
            <Form.Control className='form-input' type="text" placeholder="Enter Username" />
            <label for="pw" className="form-label m0">&nbsp;Password</label>
            <Form.Control className='form-input' type="text" placeholder="Enter Password" />
            <div className='pad28'>
                <button className='dark-btn center'>Login</button>
                <p className='center-text mb-0 uline'>Create an account?</p>
                <button className='white-btn center' onClick={toRegisterPage}>Go To Register</button>
            </div>
        </div>
    </>)
}
export default Login