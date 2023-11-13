import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IonButton } from '@ionic/react';
interface ButtonPropos{
    title:string;
    style:any;
};

const ButtonComponent: React.FC<ButtonPropos> = ({ title, style }) => {
    return (
        <a className='btn' style={ style }>{ title }</a>
    );
}


export default ButtonComponent;
