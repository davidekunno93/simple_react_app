import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const toLoginPage = () => {
        navigate('/login')
    }


    return (
        <>
            <h1 className='center-text'>Register</h1>


            <div className='reg-div flx-c pad8 bg-gains g-border' style={{borderRadius: '8px', width: '600px', height: '400px', margin: 'auto'}}>
                <label for="un" className="form-label m0">&nbsp;Username</label>
                <Form.Control className='form-input' type="text" placeholder="Create a Username" />
                <label for="em" className="form-label m0">&nbsp;Email</label>
                <Form.Control className='form-input' type="text" placeholder="Enter your Email" />
                <label for="pw" className="form-label m0">&nbsp;Password</label>
                <Form.Control className='form-input' type="text" placeholder="Create a Password" />
                <Form.Control className='form-input mt-1' type="text" placeholder="Confirm Password" />
                <div className='pad28'>
                    <button className='dark-btn center'>Register</button>
                    <p className='center-text mb-0 uline'>Already have an account?</p>
                    <button className='white-btn center' onClick={toLoginPage}>Go To Login</button>
                </div>
            </div>
        </>
    )
}

export default Register

