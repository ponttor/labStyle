import React from 'react';
import i18next from 'i18next';

export default function LessonInfoMobile({ title, description, number }) {
  return (
    <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4 " style={{ width: '15rem' }}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row my-2">
            <div className="col-1 text-center"><h5>{number}</h5></div>
            <div className="col">
              <a className="text-decoration-none link-dark mr-2" href="http://localhost:5000/lesson1">
                {title}
              </a>
              <div className="small text-muted mt-3">{description}</div>
            </div>
            <div className="w-100 d-lg-none" />
            <div className="col-1 d-lg-none" />
            <div className="col col-lg-auto d-flex flex-lg-column flex-wrap flex-lg-nowrap align-items-lg-center justify-content-lg-center mt-2 mt-lg-0">

              <div className="small me-2 me-lg-0">
                <span className="sr-only" />
                <a className="text-decoration-none link-success" href="http://localhost:5000/lesson1">{i18next.t('theory')}</a>
              </div>
              <div className="small me-2 me-lg-0">
                <a className="text-decoration-none link-success" href="http://localhost:5000/lesson1">{i18next.t('video')}</a>
              </div>
              <div className="small me-2 me-lg-0">
                <a className="text-decoration-none link-success" href="http://localhost:5000/lesson1">{i18next.t('tasks')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
