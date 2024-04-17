import {onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const navigate = useNavigate()
    const { singInUser,googleLog,gitHubLog,anonymousLog } = useContext(AuthContext)
    const [showPassword, setShowPassord] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [sucessMsg, setSucessMsg] = useState(' ')
    const [user, setUser] = useState('')
    const emailRef = useRef()
  


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // reset error msg and sucess msg to empty
        setErrorMsg(' ')
        setSucessMsg(' ')

        singInUser(email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
                    setSucessMsg("Login successful")
                    e.target.reset()
                    navigate("/")
                    toast.success('Successfully Login')
                    // ...
                })
                .catch((error) => {
                    setErrorMsg(error.message)
                });
    }

    const handleForgotPassword = e => {
        const email = emailRef.current.value
        if (!email) {
            setErrorMsg('Pls give your email', emailRef.current.value)
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setErrorMsg("please write a  valid email")
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("check email")
            })
            .catch((error) => {
                setErrorMsg(error.message)
            });

    }

    //   ---------------
    const handleGoogle = () => {
        googleLog()
          .then((result) => {
            const loggedInUser = result.user;
            setUser(loggedInUser)
            navigate("/")
            toast.success('Successfully Login')
            // ...
          }).catch((error) => {
            console.log('error', error.message)
          });
      }
    // --------------Git hub sing in---------
    const handleGithub = () => {
        gitHubLog()
          .then((result) => {
            const loggedInUser = result.user;
            setUser(loggedInUser)
            navigate("/")
            toast.success('Successfully Login')
          })
          .catch((error) => {
            console.log(error)
          });
      }
    // -------------Annoymous---
    const handleAnonymously = () => {
        anonymousLog()
            .then(() => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                    //   const uid = user.uid;
                       setUser(user)
                       setSucessMsg("Login sucessfully")
                       navigate("/")
                       toast.success('Successfully Login')
                    } 
                    else {
                    }
                  });
            })
            .catch((error) => {
                setErrorMsg (error.message);
                // ...
            });
    }
    console.log(user)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div>
                        <div className=" gap-1">
                            <button className="btn w-full" onClick={handleGoogle}>Continue with Google</button>
                            <div className="flex justify-start my-2"><p className="text-xl font-bold">OR</p></div>
                            <button className="btn w-full" onClick={handleGithub}>Continue with GitHub</button>
                            <div className="flex justify-start my-2"><p className="text-xl font-bold">OR</p></div>
                            <button className="btn w-full" onClick={handleAnonymously}>Anonymous Login</button>
                        </div>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                ref={emailRef}
                                type="email"
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <span onClick={() => setShowPassord(!showPassword)} className="absolute top-14 right-2">
                                {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                            <label className="label">
                                <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                    <div className="m-4 text-xl font-semibold">
                        {
                            errorMsg && <p>{errorMsg}</p>
                        }
                        {
                            sucessMsg && <p>{sucessMsg}</p>
                        }
                    </div>
                    <div>
                        <p className="m-4">New to this Webside? please  <Link to="/singup">Register</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;