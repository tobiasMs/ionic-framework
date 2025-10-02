import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import StatsCard from '../components/stsCard';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <StatsCard color="bg-c-yellow" value="$30200" label="All Earnings" time="2:15 am" />
            </div>
            <div className="col-xl-3 col-md-6">
              <StatsCard color="bg-c-green" value="290+" label="Page Views" time="2:15 am" />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
