import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import SelectUser from './SelectUser';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
     
      <ExploreContainer />
      
      {/* <SelectUser></SelectUser> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
