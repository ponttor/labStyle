import React from 'react';
import LoginForm from './LoginForm.jsx';

export default function PKLogin() {
  return (
    <div className="row d-flex justify-content-center align-items-center min-vw-100 min-vh-100 overflow-y">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="row">
            <div className="col">
              <div className="row d-flex justify-content-center align-items-center min-vw-80 min-vh-100">
                <LoginForm />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://res.cloudinary.com/ponttor/image/upload/v1642019347/Death_to_stock_photography_Wake_Up_6_1_tod9yh.jpg"
                className="img-fluid min-vh-100"
                alt="LoginPicture"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
