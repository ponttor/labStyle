import React from 'react';
import Element from './Element.jsx';

const Trieda = () => (
  <>
    <div className="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
      {/* <Head text="Темы" /> */}
      <div className="d-flex flex-wrap justify-content-around">
        <Element title="Урок-знакомство" description="Перед тем, как будем нырять за сокровищами, придумывать идеи и рисовать персонажей, хочу рассказать вам немного про стиль и его составляющие" number={1} />
        <Element title="Название урока" description="Описание урока" number={2} />
        <Element title="Название урока" description="Описание урока" number={3} />
        <Element title="Название урока" description="Описание урока" number={4} />
      </div>
    </div>

  </>
);

export default Trieda;
