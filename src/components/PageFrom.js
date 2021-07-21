import React ,{ useState } from 'react';

function PageFrom() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [verifyPassword,setVerifyPassword] = useState("");
  const [gender,setGender] = useState("");

  const [firstNameErr,setFirstNameErr] = useState("");
  const [lastNameErr,setLastNameErr] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [passwordErr,setPasswordErr] = useState("");
  const [verifyPasswordErr,setVerifyPasswordErr] = useState("");
  const [genderErr,setGenderErr] = useState("");

  const onSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
    let resultEle = document.getElementById("result");
    if (isValid) {
      resultEle.classList.remove("d-none");
    } else {
      resultEle.classList.add("d-none");
    }
  }

  const formValidation = ()=> {
    let isValid = true;
    const firstNameErr = {};
    const lastNameErr = {};
    const emailErr = {};
    const passwordErr = {};
    const verifyPasswordErr = {};
    const genderErr = {};

    let firstNameEle = document.getElementById("firstName");
    let lastNameEle = document.getElementById("lastName");
    let emailEle = document.getElementById("email");
    let passwordEle = document.getElementById("password");
    let verifyPasswordEle = document.getElementById("verifyPassword");
    let genderEle = document.getElementById("gender");

    firstNameEle.classList.remove("border-red");
    lastNameEle.classList.remove("border-red");
    emailEle.classList.remove("border-red");
    passwordEle.classList.remove("border-red");
    verifyPasswordEle.classList.remove("border-red");
    genderEle.classList.remove("border-red");

    if (firstName.trim().length <= 0) {
      firstNameErr.required = 'First name is required';
      firstNameEle.classList.add("border-red");
      isValid = false;
    }

    if (lastName.trim().length <= 0) {
      lastNameErr.required = 'Last name is required';
      lastNameEle.classList.add("border-red");
      isValid = false;
    }

    if (!email.includes("@")) {
      emailErr.required = 'E-mail is required';
      emailEle.classList.add("border-red");
      isValid = false;
    }

    if (password.trim().length < 8) {
      if (password.trim().length == 0) {
        passwordErr.required = 'Password is required';
      } else {
        passwordErr.required = 'Password must be greater than or equal to 8 characters.';
      }
      passwordEle.classList.add("border-red");
      isValid = false;
    }

    if (verifyPassword != password || verifyPassword.trim().length < 8) {
      if (verifyPassword.trim().length <= 0) {
        verifyPasswordErr.required = 'Verify password is required';
      } else {
        verifyPasswordErr.required = 'Verify password not match';
      }
      verifyPasswordEle.classList.add("border-red");
      isValid = false;
    }

    if (!gender) {
      genderErr.required = 'Gender is required';
      genderEle.classList.add("border-red");
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    setVerifyPasswordErr(verifyPasswordErr);
    setGenderErr(genderErr);
    return isValid;
  }

  return (
    <div>
      {/* form */}
      <div className="container-custom">
        <form className="form-custom" onSubmit={onSubmit}>
          <h5 className="text-center mb-4">From and validation</h5>
            <div className="col">
              <div className="form-row">
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="firstName" className="mb-0">
                    First Name
                  </label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="please fill first name" autoFocus
                      value={firstName} 
                      onChange={(e)=>{setFirstName(e.target.value)}}
                    />
                    {Object.keys(firstNameErr).map((key)=>{
                      return <small className="text-danger">{firstNameErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="lastName" className="mb-0">Last Name</label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="please fill last name"
                      value={lastName} 
                      onChange={(e)=>{setLastName(e.target.value)}}
                    />
                    {Object.keys(lastNameErr).map((key)=>{
                      return <small className="text-danger">{lastNameErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="email" className="mb-0">E-mail</label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <input type="email" className="form-control" id="email" name="email" placeholder="please fill E-mail"
                      value={email} 
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    {Object.keys(emailErr).map((key)=>{
                      return <small className="text-danger">{emailErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="password" className="mb-0">Password</label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <input type="password" className="form-control" id="password" name="password" placeholder="please fill password"
                      value={password} 
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    {Object.keys(passwordErr).map((key)=>{
                      return <small className="text-danger">{passwordErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="verifyPassword">Verify Password</label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <input type="password" className="form-control" id="verifyPassword" name="verifyPassword" placeholder="please fill verify password"
                      value={verifyPassword}
                      onChange={(e)=>{setVerifyPassword(e.target.value)}}
                    />
                    {Object.keys(verifyPasswordErr).map((key)=>{
                      return <small className="text-danger">{verifyPasswordErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end align-items-center mb-1 mb-lg-3">
                  <label htmlFor="gender" className="mb-0">Gender</label>
                </div>
                <div className="col-lg-9 mb-3">
                  <div className="form-group mb-0">
                    <select className="form-control" id="gender" name="gender"
                      value={gender}
                      onChange={(e)=>{setGender(e.target.value)}}
                    >
                      <option value="">Please select a gander</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {Object.keys(genderErr).map((key)=>{
                      return <small className="text-danger">{genderErr[key]}</small>
                    })}
                  </div>
                </div>
                <div className="col-lg-3 mb-3"></div>
                <div className="col-lg-9 mb-3">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
                <div className="col-lg-3 mb-3"></div>
                <div className="col-lg-9 mb-3">
                  <div className="result d-none" id="result">
                    <h5 className="text-center mb-0">Result</h5>
                    <hr className="mt-1"/>
                    <div>
                      <p>First Name : {firstName}</p>
                      <p>Last Name : {lastName}</p>
                      <p>E-mail : {email}</p>
                      <p>Password : {password}</p>
                      <p>Verify password : {password}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default PageFrom;