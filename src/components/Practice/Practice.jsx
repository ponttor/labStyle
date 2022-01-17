import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Practice({ title, content, nextLink }) {
  const history = useHistory();
  return (
    <div>
      <div className="row">
        <div className="col-10">
          <div className="mt-4" />
          <div className="d-flex justify-content-center">
            <div className="col-9 card mx-5">
              <div className="card-body p-5">
                {/* <div className="px-5"> */}
                <h1 className="card-title pt-2 mb-4">{title}</h1>
                <p className="card-text">{content}</p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col">
          <button onClick={() => history.push(nextLink)} type="button" className="btn btn-primary w-100 btn-lg">Далее</button>
        </div>
        {/* </div> */}

      </div>

    </div>
  );
}
