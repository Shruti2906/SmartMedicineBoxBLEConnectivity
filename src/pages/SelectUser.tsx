import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ImageWithText from "../components/ImageWithText";
import user from "/src/assets/images/user.png";
import hospital from "/src/assets/images/Hospital.png";
import superAdmin from "/src/assets/images/superAdmin.png";
 
const SelectUser: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={{ marginTop: "66px" }}>
          <IonText
            style={{
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "33px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "red",
              display: "block",
              marginBottom:"25px"
            }}
          >
            Smart Medicine Box
          </IonText>
        </div>

        <div className="image-container text-center">
          <IonRouterLink routerLink="/mobileVerification">
            <ImageWithText
              imageSrc={ user }
              text="Single User"
              style={{
                height: "122px",top: "355px",left: "116px", marginBottom:"10px"
              }}
            />
          </IonRouterLink>
          <ImageWithText
            imageSrc={ hospital }
            text="Hospital"
            style={{
              height: "122px",top: "355px",left: "116px" , marginBottom:"10px"
            }}
          />
          <ImageWithText
            imageSrc={ superAdmin }
            text="Super Admin"
            style={{
              height: "122px",top: "355px",left: "116px" , marginBottom:"10px"
            }}
          />
          {/* <IonButton className="" routerLink="/mobileVerification" >Login</IonButton> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectUser;
