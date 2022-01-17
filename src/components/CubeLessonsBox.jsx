import React from 'react';
import Cube from './Cube.jsx';

const CubeLessonsBox = () => {
  const width = { width: '35rem' };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
        <div className="w-50">
          <div className="d-flex flex-column p-5">
            <div className="d-flex flex-nowrap">
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-1_sljnkh.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451162/icon-6_jl3rxd.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451162/icon-2_epqaoh.png" />
            </div>
            <div className="d-flex flex-nowrap">
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451162/icon-3_v7j4kc.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
            </div>
            <div className="d-flex flex-nowrap">
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
            </div>
            <div className="d-flex flex-nowrap">
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CubeLessonsBox;
