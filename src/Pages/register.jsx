import { useState } from "react";
import { register } from "../api";
import { Tosat } from "../api/toast";
import { Button } from "../Compnents/Button";
import { Icon } from "../Compnents/Icon";
import { InputButton } from "../Compnents/Input";
import {api} from "../api"
export const Register = (props) => {
  const [data, setData] = useState({
    name: {
      value: "",
    },
    email: {
      value: "",
    },
    password: {
      value: "",
    },
    phone: {
      value: "",
    },
  });

  const handleOnChangeInputField = (event) => {
    setData({
      ...data,
      [event.target.name]: {
        ...data[event.target.name],
        value: event.target.value,
      },
    });
  };

  const radiuscss = {
    padding: "15px 220px 15px 220px",
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

  const registrationHandler = async () => {
    try {
      const final = {
        name: data.name.value,
        password: data.password.value,
        email: data.email.value,
        phone: Number(data.phone.value),
      };
      const res = await api.register(final);
      Tosat.success(res.data.message)
      props.close && props.close()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login ">
        <div className="row">
          <div className="col" style={{ margin: "20px" }}>
            <div className="heading-Area col">
              <h3 style={{ fontWeight: "700" }} className="text-center">
                Registration
              </h3>
            </div>

            <div className="inner-body col" style={{ textAlign: "center" }}>
              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                  style={inputcss}
                  name="name"
                  onChange={handleOnChangeInputField}
                  
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <InputButton
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                  style={inputcss}
                  name="email"
                  onChange={handleOnChangeInputField}
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                  style={inputcss}
                  name="password"
                  onChange={handleOnChangeInputField}
                />
              </div>

              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone Number"
                  style={inputcss}
                  name="phone"
                  onChange={handleOnChangeInputField}
                />
              </div>

              <div
                className="col"
                style={{ margin: "5px", textAlign: "center" }}
              >
                <Button
                  class="btn btn-primary"
                  type="submit"
                  innertext="Sign Up"
                  style={radiuscss}
                  onClick={registrationHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
