/* eslint-disable */
import React,{useState,useEffect} from 'react'
import { Button ,InputButton,Icon} from "../Compnents";
import { useDispatch } from 'react-redux';
import {signIn} from "../api/index"
import {loginUser} from "../redux/actions/auth"
import {toastr} from 'react-redux-toastr'
export const Login = (props) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [form, setForm] = useState({email:"",password:""});
  console.log({form})
  const iconcss = {
    background:
      "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
    WebkitBackgroundClip: " text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
  };
  const radiuscss = {
    padding: "15px 225px 15px 225px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: "50px",
    fontWeight: "600",

    color: "#fff",
    fontSize: "15px",
  };
  const inputcss = {
    padding: "15px 20px 15px 30px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: "50px",
    fontWeight: "600",
    color: "#4285F4",
    fontSize: "15px",
  };
  const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value} );
  }

  const login = async() =>{
    await signIn(form).then((res)=>{
      console.log({res})
      
      if(res.status === 200){
        toastr.success(`Welcome ${res.data.name}`) 
        dispatch(loginUser(res))
      }elseif(res.status === 500)
      {
        toastr.error(`${err.message}`)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    login()
  },[])
  return (
    <>
      <div className="login ">
        <div className="row">
          <div className="col" style={{ margin: "20px" }}>
            <div className="heading-Area col">
              <h3 style={{ fontWeight: "700" }} className="text-center">Login</h3>
              
            </div>
            <div
              className="social-Login col"
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="row justify-content-center">
                <div
                  className="col col col-md-8"
                  id="google-Icon"
                  style={{
                    padding: "15px 70px 15px 70px",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    borderRadius: "50px",
                    fontWeight: "600",
                    color: "#4285F4",
                    fontSize: "15px",
                  }}
                >
                  <Icon
                    class="fab fa-google"
                    innertext=" "
                    style={iconcss}
                  ></Icon>
                  <span style={{ paddingLeft: "10px" }}>
                    Sign in with Google
                  </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col">
                  <hr />
                </div>
                <div className="col">
                  <span> or Sign in with Email</span>
                </div>
                <div className="col">
                  <hr />
                </div>
              </div>
            </div>
            <div className="inner-body col" style={{ textAlign: "center" }}>
              <div
                className="col"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  name="email"
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Enter Email"
                  style={inputcss}
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="password"
                  name='password'
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Enter Password"
                  style={inputcss}
                />
              </div>
              <div className="forgetLink">
                <div
                  className="row"
                  style={{
                    textAlign: "end",
                    fontWeight: "600",
                    padding: "10px",
                  }}
                >
                  <div className="col">
                    <a href="">Forget password?</a>
                  </div>
                </div>
              </div>
              <div
                className="col"
                style={{ margin: "5px", textAlign: "center" }}
              >
                <Button
                  class="btn btn-primary"
                  type="submit"
                  innertext="Login"
                  style={radiuscss}
                  onClick={login}
                />
              </div>
            </div>

            <div className="Links">
              <div
                className="row"
                style={{
                  textAlign: "start",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                <div className="col">
                  <sapn>Not registered yet?</sapn>
                  <a href="" style={{ color: "#5138EE" }}>
                    {" "}
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
