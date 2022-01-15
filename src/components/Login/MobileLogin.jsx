import React from 'react';
import LoginForm from './LoginForm.jsx';

export default function MobileLogin() {
  return (
    <div className="row d-flex justify-content-center align-items-center min-vw-100 min-vh-100 overflow-y">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row d-flex justify-content-center align-items-center min-vw-80">
                  <img
                    src="https://res.cloudinary.com/ponttor/image/upload/v1642193534/me_jpg_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_zxipcb.webp"
                    className="img-fluid "
                    alt="LoginPicture"
                  />
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center align-items-center min-vw-80">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="row">
    //   <div>
    //     <img
    //       src="https://res.cloudinary.com/ponttor/image/upload/v1642193534/me_jpg_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_zxipcb.webp"
    //       className="img-fluid"
    //       alt="loginImage"
    //     />
    //   </div>
    //   <div>
    //     <LoginForm />
    //   </div>
    // </div>
  );
}
