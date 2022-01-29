import React from 'react';
import Cube from './Cube.jsx';

export default function Treasures() {
  return (
    <>
      <div className="bg-white h-75 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <div className="text-center">
            <h1>Сундук сокровищ</h1>
          </div>
          <div className="mt-5 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between flex-nowrap">
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-7_qotdwb.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451163/icon-1_sljnkh.png" />
              <Cube url="https://res.cloudinary.com/ponttor/image/upload/v1642451162/icon-6_jl3rxd.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
