import axios from "axios";
import * as yup from "yup";
import i18next from "i18next";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import React, { useContext } from "react";
import AuthContext from "../AuthContext";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, "Please enter your real name")
    .required("Full name is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post("/api/v1/login", values);
      localStorage.setItem("token", response.data.token);
      login(values.name);
    } catch (err) {
      console.log("wtf");
      console.log(err.response.statusText);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <>
      {isAuthenticated && history.push("/")}
      <div className="container-fluid h-100">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="d-flex align-items-center justify-content-center col-12 col-md-6 p-4">
                  <img
                    src="https://res.cloudinary.com/ponttor/image/upload/v1642019347/Death_to_stock_photography_Wake_Up_6_1_tod9yh.jpg"
                    className="card-img-top flex-grow-1 rounded-circle p-5"
                    alt="..."
                  />
                </div>
                <form
                  className="col-12 col-md-6 mt-3 mt-mb-0"
                  onSubmit={formik.handleSubmit}
                >
                  <h1 className="text-center mb-4">
                    {i18next.t("loginTitle")}
                  </h1>
                  <div className="form-floating mb-3 form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      name="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      placeholder={i18next.t("loginName")}
                    />
                    <label className="d-block" htmlFor="username">
                      {i18next.t("loginName")}
                    </label>
                  </div>
                  <div className="text-danger">{formik.errors.name}</div>

                  <div className="form-floating mb-4 form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder={i18next.t("loginPassword")}
                    />
                    <label className="d-block" htmlFor="password">
                      {i18next.t("loginPassword")}
                    </label>
                  </div>
                  <div className="text-danger fs-6">
                    {formik.errors.password}
                  </div>

                  <button
                    type="submit"
                    className="w-100 mb-3 btn btn-outline-primary"
                  >
                    {i18next.t("loginTitle")}
                  </button>
                </form>
              </div>
              <div className="card-footer p-4">
                <small>
                  <div className="text-center">
                    <span>{i18next.t("loginNoaccount")}</span>
                    <a href="http://labstyle.online/">
                      {i18next.t("loginRegistration")}
                    </a>
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
