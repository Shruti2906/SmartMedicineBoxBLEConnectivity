// import { BleServiceProvider } from './services/BleService1';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SelectUser from './pages/SelectUser';
import MobileVerification from './pages/MobileVerification/mobileVerification';
import Register from './pages/Register';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Homepage from './pages/Homepage/homepage';
import AllowBluetoothPermission from './pages/AllowBluetoothPermission/AllowBluetoothPermission';
import BluetoothScan from './pages/BluetoothScan/BluetoothScan';
// import NewComp from './pages/newcomp/newcomp';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
     
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <AllowBluetoothPermission />
        </Route>
        <Route exact path="/selectUser">
          <SelectUser />
        </Route>
        <Route exact path="/mobileVerification">
          <MobileVerification />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/splash">
          <SplashScreen/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/signup">
          <Signup/>
        </Route>
    
        <Route exact path="/homescreen">
          <Homepage/>
        </Route>

        <Route exact path="/AllowBluetoothPermission">
        <AllowBluetoothPermission/>
        </Route>

        <Route exact path="/BluetoothScan">
          <BluetoothScan/>
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
);

export default App;
