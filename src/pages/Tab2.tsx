import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import '../assets/assets/css/style.css';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header title="Tab 2" />
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <div className="container">          
          <h2>Selamat datang 🚀</h2>
          <p>Ini halaman Home dengan Header component.</p>
        </div> */}
        <div className="page-body">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card bg-c-yellow update-card">
                <div className="card-block">
                  <div className="row align-items-end">
                    <div className="col-8">
                      <h4 className="text-white">$30200</h4>
                      <h6 className="text-white m-b-0">All Earnings</h6>
                    </div>
                    <div className="col-4 text-right">
                      <canvas id="update-chart-1" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white m-b-0">
                    <i className="feather icon-clock text-white f-14 m-r-10"></i>
                    update : 2:15 am
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
