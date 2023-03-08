import { useState } from "react";
import axios from "axios";
import { FaWpbeginner } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errMssg, seterrMssg] = useState();
    const onUpdateField = e => {
        const { name, value } = e.target;
        const nextFormState = { ...form, [name]: value };
        setForm(nextFormState);

    };
    const validate = (val) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const pass = /^[A-Z][1-9]{2,5}$/;
        //email validations
        if (!val.email) {
            errors.email = "email is required"
        } else if (!regex.test(form.email)) {
            errors.email = "this email not vaild! "
        }
        //password 
        if (!val.password) {
            errors.password = "password is required"
        } else if (val.password < 2) {
            errors.password = "Password length must be atleast 2 characters"
        } else if (val.password > 5) {
            errors.password = "Password length must not exceed 5 characters"
        } else if (!pass.test(form.password)) {
            errors.password = "Password length must not exceed 5 characters"
        }
        return errors;
    }
    const navigate = useNavigate();
    const onSubmitForm = e => {
        e.preventDefault();
        setFormErrors(validate(form));
        setIsSubmit(true);
        axios.post('http://localhost:3000/api/v1/auth/login', form).then((res) => {
            console.log('sucess', res);
            const data = res.data
            const token = data.token;
            localStorage.setItem('user-token', token);
            if (res.data.message === 'Login Success') {
                navigate('/home');
            } 
        }).catch((err) => {

            if (err.response?.data.message === "Email and Password misMatch") {
                const myError = err.response.data.message;
                seterrMssg(myError)
            }
            if (err.response?.data.message === "You are Already Login.") {
                const myError = err.response.data.message;
                seterrMssg(myError)
            }
        });
    };
    return (
        <div className="mycontainer">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={onSubmitForm} className="sign-in-form myform">
                        <h2 className="title">Log in</h2>
                        <div className="input-field">
                            <i > <AiOutlineUser /></i>
                            <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" name="email" value={form.email} onChange={onUpdateField} />
                        </div>
                        <div className='err'>
                            {formErrors.email}
                        </div>
                        <div className=" text-danger">
                            {errMssg && <p>{errMssg}</p>}
                        </div>
                        <div className="input-field">
                            <i > <FaWpbeginner /> </i>
                            <input type="password" classNameName="form-control" id="exampleInputPassword1" name="password"
                                placeholder="Password" value={form.password} onChange={onUpdateField} />
                        </div>
                        <div className='err'>
                            {formErrors.password}
                        </div>
                        <div className="form-check  " >
                            <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" value="true" onChange={(e) => setForm((prev) => ({ ...prev, rememberMe: e.target.value }))} />
                            <label className="form-check-label" htmlFor="exampleCheck1">rememberMe</label>
                        </div>

                        <Link to="/forgetPassword"><a >forget password </a> </Link>
                        <input type="submit" value="Login" className="mybtn solid" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Link to="/role">
                            <button className="mybtn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    <img src="/images/undraw.svg" className="myimage" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;