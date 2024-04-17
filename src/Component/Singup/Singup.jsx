import { onAuthStateChanged} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useForm } from "react-hook-form"
import { useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useContext } from "react";


const Singup = () => {
  // -----------------------------------------
  const [showPassword, setShowPassord] = useState(false)
  const [user, setUser] = useState();
  const [errorMsg, setErrorMsg] = useState('')
  const [sucessMsg, setSucessMsg] = useState(' ')
  const {creatUser,googleLog,gitHubLog,anonymousLog} = useContext(AuthContext)

  // ------------Google sing in----------
  const handleGoogle = () => {
    googleLog()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser)
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
                } 
                else {
                }
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            setErrorMsg (error.message);
            // ...
        });
}


  // ----------------
  console.log(user)



  // -----------Useform---------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    
    const name = data.name
    const email = data.email
    const password = data.password
    if (password.length < 6) {
      setErrorMsg('Pls provide minimum 6 char password')
      return 
  }
  // password validation check
  else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      setErrorMsg('password should be an upper case,special char,numbers and length is 6-16 char ')
      return  toast.error("password should be an upper case,special char,numbers and length is 6-16 charmm ")
  }

    // reset error msg and sucess msg to empty
    setErrorMsg(' ')
    setSucessMsg(' ')

    creatUser(email, password)
    .then((userCredential) => {
          setUser(userCredential.user)
          setSucessMsg("Account created successfully")
        })
        .catch((error) => {
          setErrorMsg(error.message)
          console.log(error)
        });

   
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-semibold">Or Continue with </h1>
            <div>
              <div >
                <button className="btn w-full" onClick={handleGoogle}>Google </button>
                <div className="flex justify-start my-2"><p className="text-xl font-bold">OR</p></div>
                <button className="btn w-full" onClick={handleGithub}>GitHub</button>
                <div className="flex justify-start my-2"><p className="text-xl font-bold">OR</p></div>
                <button className="btn w-full" onClick={handleAnonymously}>Anonymous Login</button>

              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name")} type="name" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password")} type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                <span onClick={() => setShowPassord(!showPassword)} className="absolute top-14 right-2">
                        {
                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                        }
                    </span>
              </div>
              <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our terms and conditions</label>
                </div>
              <div className="form-control mt-6">
                {errors.password && <span>This field is required</span>}
                <button className="btn btn-primary">Submit</button>
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
              <h1 className="m-6">Already have an account? <Link to="/login">sing in </Link> here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Singup;