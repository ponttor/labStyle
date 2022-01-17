import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Theory({ title, content, nextLink }) {
  const history = useHistory();
  return (
    <>
      <div className="col-12 d-block d-md-none h-100 w-100">
        <div className="row d-flex justify-content-center min-vh-50">
          <div className="col-11">
            <div className="mt-4" />
            <div className="d-flex justify-content-center">
              <div className="col-12 card mx-2">
                <div className="card-body p-4">
                  <h1 className="card-title pt-2 mb-4">{title}</h1>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <button onClick={() => history.push(nextLink)} type="button" className="btn btn-primary w-100 btn-lg">Далее</button>
          </div>
        </div>
      </div>

      <div className="col-12 d-none d-md-block d-lg-none p-0">
        <div className="row">
          <div className="col-10">
            <div className="mt-4" />
            <div className="d-flex justify-content-center">
              <div className="col-9 card mx-5">
                <div className="card-body p-5">
                  <h1 className="card-title pt-2 mb-4">{title}</h1>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <button onClick={() => history.push(nextLink)} type="button" className="btn btn-primary w-100 btn-lg">Далее</button>
          </div>
        </div>
      </div>

      <div className="col-12 d-none d-lg-block p-0">
        <div className="row">
          <div className="col-10">
            <div className="mt-4" />
            <div className="d-flex justify-content-center">
              <div className="col-9 card mx-5">
                <div className="card-body p-5">
                  <h1 className="card-title pt-2 mb-4">{title}</h1>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <button onClick={() => history.push(nextLink)} type="button" className="btn btn-primary w-100 btn-lg">Далее</button>
          </div>
        </div>
      </div>
    </>
  );
}
