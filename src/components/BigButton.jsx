import React from 'react';

export default function BitButton({ value }) {
  return (
    <>
      <div className="my-5 d-flex justify-content-center align-items-center h-50 bg-white">
        <div className="w-50">
          <div className="text-center">
            <button type="button" className="btn btn-primary btn-lg">{value}</button>
          </div>
        </div>
      </div>
    </>
  );
}
