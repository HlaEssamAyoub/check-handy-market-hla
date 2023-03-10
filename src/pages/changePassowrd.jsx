import { useState } from "react";
import axios from "axios";
import { FaWpbeginner } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const [form, setForm] = useState({
        email: "",
        newPassword: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [errMssg, seterrMssg] = useState();
    const onUpdateField = e => {
        const { name, value } = e.target;
        const nextFormState = { ...form, [name]: value };
        setForm(nextFormState);
    };
    const validate = (val) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!val.email) {
            errors.email = "email is required"
        } else if (!regex.test(form.email)) {
            errors.email = "this email not vaild! "
        }
        return errors;
    }
    const navigate = useNavigate();
    const onSubmitForm = e => {
        e.preventDefault();
        setFormErrors(validate(form));
        axios.post('http://localhost:3000/api/v1/auth/forgetPassword', form).then((res) => {
            console.log('sucess', res);
            if (res.data.message === 'Done update Your Password , Login now') {
                navigate('/login');
            }
        }).catch((err) => {
            const myError = err.response.data.message;
            seterrMssg(myError)
        });
    };

    return (
        <div className="mycontainer">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={onSubmitForm} className="sign-in-form myform">
                        <h2 className="title">Forget password</h2>
                        <div className="input-field">
                            <i > <AiOutlineUser /></i>
                            <input type="email" classNameName="form-control" id="exampleInputEmail1"
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
                            <input type="password" classNameName="form-control" id="exampleInputPassword1" name="newPassword"
                                placeholder="newPassword" value={form.newPassword} onChange={onUpdateField} />
                        </div>
                        <div className='err'>
                            {formErrors.newPassword}
                        </div>

                        <input type="submit" value="next" className="mybtn solid" />
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

export default ChangePassword;