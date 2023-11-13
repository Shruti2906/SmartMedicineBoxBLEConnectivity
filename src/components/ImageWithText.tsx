import React from 'react';
import { IonImg, IonText } from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageWithText: React.FC<{ 
  imageSrc: string; 
  text: string;
  style:any;
}> = ({ imageSrc, text, style }) => {
  return (
    <div className="image-container" style={{ textAlign: 'center' }}>
      <IonImg src={ imageSrc } style={ style }/>
      <IonText className='m-5'>{text}</IonText>
  </div>
  );
};

export default ImageWithText;
