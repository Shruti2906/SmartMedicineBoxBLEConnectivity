// BluetoothPermissionPage.tsx
import React from 'react';
import { IonPage, IonContent, IonAlert, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const AllowBluetoothPermission: React.FC = () => {
  const history = useHistory();

  const handleAllowBluetooth = () => {

    // If permission is granted, navigate to the next page
    history.push('/BluetoothScan');
  };

  return (
    <IonPage>
      <IonContent>
        <IonAlert
          isOpen={true} // Set to true to display the alert
          onDidDismiss={() => {}}
          header="Bluetooth Permission"
          message="Allow Bluetooth to find and connect to devices?"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                // Handle cancel button click
              },
            },
            {
              text: 'Allow',
              handler: handleAllowBluetooth,
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default AllowBluetoothPermission;
