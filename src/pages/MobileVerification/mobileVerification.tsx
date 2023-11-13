import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import "./mobileVerification.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { eye, eyeOff } from "ionicons/icons";


const MobileVerification: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <IonPage style={{ color: "black" }}>
      <div className="container">
        <IonText>
          <h1 className="text-center" style={{ color: "#FF0101" }}>
            Login
          </h1>
        </IonText>

        <IonText>
          <h6 className="text-center" style={{ color: "gray" }}>
            Enter Your Registered mobile number to login
          </h6>
        </IonText>

        <div className="input-group mb-3">
          <IonInput
            type="text"
            label="Mobile Number"
            labelPlacement="floating"
            fill="outline"
            className="form-control pl-2"
            placeholder="Enter mobile number"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <IonButton type="button" id="button-addon2" color="light">
            get OTP
          </IonButton>
        </div>

        <div className="input-group mb-5">
          <IonInput
            type={showPassword ? "text" : "password"}
            label="Enter OTP"
            labelPlacement="floating"
            fill="outline"
            className="form-control"
            placeholder="Enter mobile number"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></IonInput>
          <IonIcon
            id="visibilityIcon"
            icon={showPassword ? eye : eyeOff}
            color="light"
            size="large"
            onClick={togglePasswordVisibility}
          ></IonIcon>
          <IonButton type="button" id="button-addon2" color="light" routerLink="/login">
            Verify
          </IonButton>
        </div>
          
      </div>
    </IonPage>
  );
};

export default MobileVerification;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

