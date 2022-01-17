import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Video({ src, downloadLink, nextLink }) {
  const history = useHistory();
  console.log(nextLink);
  const height = { height: '15px' };
  return (
    <>

      <div className="col-12 d-block d-md-none h-80" style={height}>
        <div className="overflow-hidden">
          <div className="row d-flex justify-content-center min-vh-50">
            <div className="col-11">
              <div className="mt-4" />
              <div className="d-flex justify-content-center">
                <div className="col-12 card">
                  <div className="card-body">

                    <div className="d-flex flex-column justify-content-center align-items-center min-vw-80 min-vh-100">
                      <div className="card w-100">
                        <img src={src} className="card-img-top" alt="Lesson 1" />
                      </div>
                      <div className="mt-5 d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary align-center text-white">Скачать урок 1</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <button type="button" onClick={() => history.push(nextLink)} className="btn btn-primary w-100 btn-lg">Далее</button>
            </div>
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

                  <div className="d-flex flex-column justify-content-center align-items-center min-vw-80 min-vh-100">
                    <div className="card w-80">
                      <img src={src} className="card-img-top" alt="Lesson 1" />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary align-center text-white">Скачать урок 1</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <button type="button" onClick={() => history.push(nextLink)} className="btn btn-primary w-100 btn-lg">Далее</button>
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

                  <div className="d-flex flex-column justify-content-center align-items-center min-vw-80 min-vh-100">
                    <div className="card w-80">
                      <img src={src} className="card-img-top" alt="Lesson 1" />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary align-center text-white">Скачать урок 1</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <button type="button" onClick={() => history.push(nextLink)} className="btn btn-primary w-100 btn-lg">Далее</button>
          </div>
        </div>
      </div>

    </>
  );
}
