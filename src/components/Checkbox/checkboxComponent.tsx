import { IonCheckbox } from "@ionic/react";

interface CheckboxProps{
    label:string;
    style:any;
}
const CheckboxComponent: React.FC<CheckboxProps> = ({label, style }) => {
    return(
        <IonCheckbox labelPlacement="end" style={style}>{ label }</IonCheckbox>
    );
}

export default CheckboxComponent;