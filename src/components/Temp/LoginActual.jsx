// import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import AuthContext from '../AuthContext';
// import LoginForm from './LoginForm.jsx';
// import MobileLogin from './MobileLogin.jsx';

// const Login = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const history = useHistory();

//   return (
//     <>
//       {isAuthenticated && history.push('/')}
//       {/* <div className="d-flex align-items-center justify-content-center"> */}
//       {/* <div className="container-fluid"> */}
//       <div className="row">

//         <div className="col-12 d-block d-md-none">
//           <MobileLogin />
//         </div>

//         <div className="col-12 d-none d-md-block d-lg-none p-0">
//           <div>
//             <img
//               src="https://res.cloudinary.com/ponttor/image/upload/v1642193534/me_jpg_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_zxipcb.webp"
//               className="img-fluid"
//               alt="..."
//             />
//           </div>
//           <div>
//             <LoginForm />
//           </div>
//         </div>

//         <div className="col-12 d-none d-lg-block p-0">
//           <div className="row">
//             <div className="col-6">
//               <LoginForm />
//             </div>

//             <div className="col">
//               <img
//                 src="https://res.cloudinary.com/ponttor/image/upload/v1642019347/Death_to_stock_photography_Wake_Up_6_1_tod9yh.jpg"
//                 className="img-fluid"
//                 alt="..."
//               />
//             </div>
//           </div>
//         </div>

//         {/* <div className="col-12 col-sm-6">
//           <img
//             src="https://res.cloudinary.com/ponttor/image/upload/v1642019347/Death_to_stock_photography_Wake_Up_6_1_tod9yh.jpg"
//             className="img-fluid"
//             alt="..."
//           />
//         </div>
//         <div className="col-6 d-flex justify-content-center align-items-center"> */}
//         {/* </div> */}
//         {/* </div> */}
//       </div>
//       {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// };

// export default Login;
