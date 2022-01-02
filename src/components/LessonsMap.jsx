import React from "react";
import ImgButton from './ImgButton.jsx';

export default function LessonMap() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Карта Путешествия</h5>
        </div>
        {/* <iframe src="https://giphy.com/embed/2kMQxlmpgVGlxSvT23" width="180" height="108" frameBorder="0" className="align-center" allowFullScreen></iframe>  */}
        {/* <Image cloudName="ponttor" publicId="36444556_ts17zx" width="300" crop="scale" /> */}
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={1} url="/lesson1" />
          <ImgButton number={2} url="/lesson2" />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={3} url="/lesson3" />
          <ImgButton number={4} url="/lesson4" />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={5} url="/lesson5" />
          <ImgButton number={6} url="/lesson6" />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={7} url="/lesson7" />
          <ImgButton number={8} url="/lesson8" />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={9} url="/lesson9" />
          <ImgButton number={10} url="/lesson10" />
        </div>
        <div className="d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={11} url="/lesson11" />
          <ImgButton number={12} url="/lesson12" />
        </div>
        <div className="pb-4 d-flex pt-3 flex-wrap justify-content-around">
          <ImgButton number={13} url="/lesson13" />
          <ImgButton number={14} url="/lesson14" />
        </div>
      </div>
    </div>
  );
}
