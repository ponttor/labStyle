import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext';
import Video from './Video.jsx';

export default function Lesson1() {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const src = 'https://res.cloudinary.com/ponttor/image/upload/v1642350198/photo_2022-01-16_17.22.34_wahvjw.jpg';
  const nextLink = '/lesson1';
  return (
    <>
      {!isAuthenticated && history.push('/login')}
      <Video src={src} nextLink={'/practice1'} />
    </>
  );
}
