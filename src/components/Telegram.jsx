import React from 'react';

export default function Telegram({ value }) {
  return (
    <>
      <div className="my-5 d-flex justify-content-center align-items-center h-50">
        <div className="w-50">
          <div className="text-center">
            <h3>Инструкция как смотреть</h3>
            <button type="button" className="btn btn-primary btn-lg">{value}</button>
          </div>
        </div>
      </div>
    </>
  );
}
