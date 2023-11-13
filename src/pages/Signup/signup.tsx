import { IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonSelect, IonSelectOption, IonText } from '@ionic/react';
import './signup.css';
import ButtonComponent from '../../components/Button/ButtonComponent';
import CheckboxComponent from '../../components/Checkbox/checkboxComponent';


const Signup: React.FC = () => {
    return (
        <IonPage>
            <div className="px-5 signup-container">
                <IonText>
                    <h1 className="text-center mb-2 mt-5" style={{ color: "#FF0101" }}>
                    Welcome
                    </h1>
                </IonText>
        
                <IonText>
                    <h6 className="text-center mb-5" style={{ color: "gray" }}>
                    Signup for Smart Medicine Box
                    </h6>
                </IonText>

                <div className="input-field">
                {/* <IonLabel className="label">Enter your name</IonLabel> */}
                <IonInput
                type="text"
                label="Name"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2 mb-3"
                placeholder="Enter your name"
                aria-label="name"/>

                {/* <IonLabel className="label">Enter your username</IonLabel> */}
                <IonInput
                    type="text"
                    label="Username"
                    labelPlacement="floating"
                    fill="outline"
                    className="form-control pl-2 mb-3"
                    placeholder="Enter username"
                    aria-label="username"
                    />
                
                {/* <IonLabel className="label">Enter your password</IonLabel> */}
                <IonInput
                type="password"
                label="Password"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2 mb-3"
                placeholder="Enter password"
                aria-label="password"
                />

                {/* <IonLabel className="label">Confirm password</IonLabel> */}
                <IonInput
                type="password"
                label="Confirm Password"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2 mb-3"
                placeholder="Confirm password"
                aria-label="password"
                />


            <IonSelect className='mb-3' label="Select City" fill="outline" labelPlacement='floating' placeholder="Select City">
                <IonSelectOption value="apple">Pune</IonSelectOption>
                <IonSelectOption value="banana">Nashik</IonSelectOption>
                <IonSelectOption value="orange">Nagpur</IonSelectOption>
            </IonSelect>


            <IonSelect className='mb-3' label="Select State" fill="outline" labelPlacement='floating' placeholder="Select State">
                <IonSelectOption value="apple">Maharashtra</IonSelectOption>
                <IonSelectOption value="banana">Chhatisgadh</IonSelectOption>
            </IonSelect>


                <div className="terms-conditions text-center">
                    <CheckboxComponent label="" style={{  }}></CheckboxComponent>
                    <IonText className='p-2'>By clicking on ‘sign up’, you’re agreeing to the <span style={{ color:"#FF0101", fontWeight:"bold"}}> Smart Medicine Box </span> app Terms of Service and Privacy Policy</IonText>
                </div>

                <div className="text-center">
                <ButtonComponent title="Sign Up" style={{ backgroundColor: "#FF0101", 
                                                            color:"white",
                                                            padding:"10px 30px",
                                                            margin:"20px",
                                                            fontSize:"20px",
                                                            borderRadius:"14px"
                                                            }}/>
                </div>
                <IonText>
                    <h6 className="text-center">Already have an account? 
                    <IonRouterLink routerLink="/login">
                      <a><span style={{ color:"#FF0101", fontWeight:"bold"}}>Log in</span></a>
                    </IonRouterLink>
                    </h6>
                </IonText>
            </div>

            </div>
        </IonPage>
    );
}

export default Signup;