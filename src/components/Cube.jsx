import React from 'react';
// import '../styles/App.css';

export default function Cube({ url }) {
  return (
    <div className="px-2">
      <a href="/lesson1">
        <img
          src={url}
          className="img-fluid border"
          alt="icon"
        />
      </a>

      {/* <figure className="figure">
        <img src="..." className="figure-img img-fluid rounded" alt="..." />
        <figcaption className="figure-caption">Подпись к изображению.</figcaption>
      </figure> */}
      {/* <a className="btn btn-primary" styles={{ width: '200px' }} /> */}
    </div>
  );
}
