import React from 'react';

export default function Bibliothek() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-75">
        <div className="w-50">
          <div className="text-center">
            <h1>Библиотека</h1>
          </div>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>some text</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">some text</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">some text</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
