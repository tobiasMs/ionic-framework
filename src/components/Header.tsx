import './css/Header.css'

import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

interface HeaderProps {
  title: string; // judul yang akan ditampilkan
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;