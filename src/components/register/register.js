import React, { useState } from "react";

function Registration() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [FormErr, setFormErr] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    confirmpassword: null,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(Form);
  };

  const handleFormChange = (e) => {
    if (e.target.name === "name") {
      setForm({
        ...Form,
        name: e.target.value,
      });

      setFormErr({
        ...FormErr,
        name:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Min.length is 3"
            : null,
      });
    }

    if (e.target.name === "email") {
      const email = e.target.value;
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      setForm({
        ...Form,
        email: e.target.value,
      });

      setFormErr({
        ...FormErr,
        email: emailRegex.test(email)
          ? null
          : email.length === 0
          ? "This field is required"
          : "Enter a valid email address example , xxx@example.com",
      });
    }
    if (e.target.name === "password") {
      const password = e.target.value;
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<$>,.?~]).{8,}$/;
      setForm({
        ...Form,
        password: password,
      });

      setFormErr({
        ...FormErr,
        password: passwordRegex.test(password)
          ? null
          : password.length === 0
          ? "This field is required"
          : "Enter a strong password at least 8 characters and contains numbers ,spiecial char, capital , small letters",
      });
    }
    if (e.target.name === "confirmpassword") {
      const confirmpassword = e.target.value;
      setForm({
        ...Form,
        confirmpassword: confirmpassword,
      });

      setFormErr({
        ...FormErr,
        confirmpassword:
          Form.password === confirmpassword
            ? null
            : confirmpassword.length === 0
            ? "This field is required"
            : "Confirm Password does not match your password.",
      });
    }
    if (e.target.name === "username") {
      const username = e.target.value;
      setForm({
        ...Form,
        username: username,
      });

      setFormErr({
        ...FormErr,
        username: username.length === 0 ? "This field is required" : null,
      });
    }
  };

  return (
    <div>
      <h2>Add you data for registration</h2>
      <hr></hr>

      <form className="col-8 mx-auto fs-5" onSubmit={handleSubmitForm}>
        <label
          htmlFor="validationTooltip01"
          className="col-sm-2 col-form-label"
        >
          Name
        </label>
        <div className="col ">
          <input
            type="text"
            className={`form-control ${
              FormErr.name ? "border border-danger" : ""
            }`}
            id="validationTooltip01"
            required
            onChange={handleFormChange}
            name="name"
          />
        </div>
        {FormErr.name && (
          <div id="nameHelp" className="form-text text-danger">
            {FormErr.name}
          </div>
        )}

        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col">
          <input
            type="email"
            className={`form-control ${
              FormErr.email ? "border border-danger" : ""
            }`}
            id="inputEmail3"
            onChange={handleFormChange}
            name="email"
          />
        </div>
        {FormErr.email && (
          <div id="emailHelping" className="form-text text-danger">
            {FormErr.email}
          </div>
        )}
        <div className="col">
          <label
            htmlFor="validationTooltipUsername"
            className="col-sm-auto col-form-label"
          >
            User Name
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              @
            </span>
            <input
              type="text"
              className={`form-control ${
                FormErr.username ? "border border-danger" : ""
              }`}
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              name="username"
              onChange={handleFormChange}
            />
          </div>
          {FormErr.username && (
            <div id="usernamelHelping" className="form-text text-danger">
              {FormErr.username}
            </div>
          )}
        </div>

        <div className="col">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col">
            <input
              type="password"
              className={`form-control ${
                FormErr.password ? "border border-danger" : ""
              }`}
              id="inputPassword3"
              onChange={handleFormChange}
              name="password"
            />
            {FormErr.password && (
              <div id="passHelping" className="form-text text-danger">
                {FormErr.password}
              </div>
            )}
          </div>
        </div>
        <div className="col">
          <label
            htmlFor="inputPassword4"
            className="col-sm-auto col-form-label"
          >
            Confirm Password
          </label>
          <div className="col">
            <input
              type="password"
              className={`form-control ${
                FormErr.confirmpassword ? "border border-danger" : ""
              }`}
              id="inputPassword4"
              onChange={handleFormChange}
              name="confirmpassword"
            />
            {FormErr.confirmpassword && (
              <div id="cpassHelping" className="form-text text-danger">
                {FormErr.confirmpassword}
              </div>
            )}
          </div>
        </div>
        <button
          className="btn btn-outline-success m-2"
          onClick={handleSubmitForm}
        >
          Sign in
        </button>
        <button type="reset" className="btn btn-outline-danger m-2">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Registration;
