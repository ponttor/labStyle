import React from 'react';
import LoginForm from './LoginForm.jsx';

export default function IpadLogin() {
  return (
    <div className="row d-flex justify-content-center align-items-center min-vw-100 min-vh-100 overflow-y">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center align-items-center min-vw-80 min-vh-100">
                  <img
                    src="https://res.cloudinary.com/ponttor/image/upload/v1642019347/Death_to_stock_photography_Wake_Up_6_1_tod9yh.jpg"
                    className="img-fluid "
                    alt="LoginPicture"
                  />
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center align-items-center min-vw-80 min-vh-100">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
