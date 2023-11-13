import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRouterLink,
    IonText,
  } from "@ionic/react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/Button/ButtonComponent";
import CheckboxComponent from "../../components/Checkbox/checkboxComponent";
  
  const Login: React.FC = () => {  
    return (
      <IonPage style={{ color: "black" }}>
        <div className="px-5">
          <IonText>
            <h1 className="text-center" style={{ color: "#FF0101" }}>
              Welcome back!
            </h1>
          </IonText>
  
          <IonText>
            <h6 className="text-center subtitle" style={{ color: "gray" }}>
              Login to your account
            </h6>
          </IonText>
  
            <div className="input-field">
                <IonLabel className="label">Enter your username</IonLabel>
                <IonInput
                type="text"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2 mb-3"
                aria-label="username"
                />
                
                <IonLabel className="label">Enter your password</IonLabel>
                <IonInput
                type="password"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2"
                aria-label="password"
                />

                <div className="checkbox-forgot">
                    <CheckboxComponent label="Remember me" style={{  }}></CheckboxComponent>
                    <IonText >Forgot password?</IonText>
                </div>

                <div className="text-center">
                <IonRouterLink routerLink="/homescreen">
                <ButtonComponent title="Log In" style={{ backgroundColor: "#FF0101", 
                                                            color:"white",
                                                            padding:"10px 50px",
                                                            margin:"20px",
                                                            fontSize:"25px",
                                                            borderRadius:"14px"
                                                            }}/>
                </IonRouterLink>
                </div>
                <IonText>
                    <h6 className="text-center">Don't have an account? 
                    <IonRouterLink routerLink="/signup">
                      <a><span style={{ color:"#FF0101", fontWeight:"bold"}}> Sign Up</span></a>
                    </IonRouterLink>
                    </h6>
                </IonText>
            </div>

            
        </div>
      </IonPage>
    );
  };
  
  export default Login;
  