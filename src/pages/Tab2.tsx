import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import Header from "../components/Header";

import "../assets/assets/css/style.css";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, 
        source: CameraSource.Camera,
      });
      setPhoto(image.dataUrl!); 
    } catch (error) {
      console.error("Camera error:", error);
    }
  };

  return (
    <IonPage>
      <Header title="Tab 2" />
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {photo && (
          <div className="ion-text-center">
            <IonImg src={photo} />
          </div>
        )}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
