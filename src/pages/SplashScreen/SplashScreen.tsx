import { IonButton, IonContent, IonPage } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import './splashScreen.css';
import ImageWithText from "../../components/ImageWithText";
import splashImage from '/src/assets/images/splashScreen.png';
const SplashScreen: React.FC = () => {
  return (
    <IonContent className="text-center">
      <IonPage style={{ color: "black" }}>
        
        <div className="splashScreen" style={{ display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
        <div className="title" >
        <h1 className="text-center" style={{ fontSize:"50px", color:"#FF0101" }}>Smart Medicine Box</h1>
        </div>
          <ImageWithText 
            imageSrc={ splashImage}
            text=""
            style={{
              width: "366px",
              height: "376px",
              display: "inlineBlock"
            }}
          />

          <IonButton routerLink="/homescreen">Homepage</IonButton>
          <IonButton routerLink="/selectUser">Select User</IonButton>
          <IonButton routerLink="/mobileVerification">Verification</IonButton>
          <IonButton routerLink="/login">Login</IonButton>

        </div>
      </IonPage>
    </IonContent>
  );
};

export default SplashScreen;
