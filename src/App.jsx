import { useState } from "react";
import "./App.css";
import illustration from "./woman-making-pottery.jpg";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const getValidate = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        !!value.match(/^[a-zA-Z\s]*$/) || value === ""
          ? setIsName(false)
          : setIsName(true);
        break;
      case "email":
        setEmail(value);
        !!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
        value === ""
          ? setIsEmail(false)
          : setIsEmail(true);
        break;
      case "phone":
        setPhone(value);
        !!value.match(/^\d{10}$/) || value === ""
          ? setIsPhone(false)
          : setIsPhone(true);
        break;
      default:
        setCountry(value);
        !!value.match(/^[a-zA-Z\s]*$/)
          ? setIsCountry(false)
          : setIsCountry(true);
        break;
    }
  };

  const getcbValidate = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isName || isEmail || isPhone || isCountry) {
      alert("Please check the fields");
    } else {
      if (name && email && phone && country) {
        alert(
          `${
            isAgreed
              ? "Registration Complete"
              : "You need to agree to the terms and service before continuing !"
          }`
        );
      } else {
        alert("Please fill the form");
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-wrapper">
          <h1>Let's get started 👋</h1>
          <p>
            Join our E-learning platform today and unlock over 500+ courses and
            digital assets ready to download.
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className={`input-holder ${isName ? "tooltip" : ""}`}
              data-tooltip="Name not valid !"
            >
              <label htmlFor="">Name</label>

              <input
                onChange={getValidate}
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
              />
            </div>
            <div className="two-field">
              <div
                className={`input-holder field-margin ${
                  isEmail ? "tooltip" : ""
                }`}
                data-tooltip="Email not valid !"
              >
                <label>Email</label>
                <input
                  onChange={getValidate}
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                />
              </div>
              <div
                className={`input-holder ${isPhone ? "tooltip" : ""}`}
                data-tooltip="Phone is not valid"
              >
                <label>Phone</label>
                <input
                  onChange={getValidate}
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            <div
              className={`input-holder ${isCountry ? "tooltip" : ""}`}
              data-tooltip="Country is not valid"
            >
              <label>Country</label>
              <input
                onChange={getValidate}
                type="text"
                name="country"
                value={country}
                placeholder="Enter your country"
              />
            </div>
            <div className="tos-holder">
              <input
                onChange={getcbValidate}
                type="checkbox"
                name="cb"
                value={isAgreed}
              />
              <label className="cbl">
                I agree to the{" "}
                <a target="blank" href="">
                  Terms and Service
                </a>{" "}
                that my data will be taken and sold
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="illustration">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
