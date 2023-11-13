// BluetoothScanningPage.tsx
import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/react';
import BluetoothService from '../../services/BluetoothService';
import { BleDevice, ScanResult } from '@capacitor-community/bluetooth-le';
import { useHistory } from 'react-router-dom';

const BluetoothScan: React.FC = () => {
  const history = useHistory();
  const [devices, setDevices] = useState<ScanResult[]>([]);
  const [showConnectAlert, setShowConnectAlert] = useState(false);

  useEffect(() => {
    const handleDeviceDiscovery = (result: ScanResult) => {
      console.log(result);
      setDevices((prevDevices) => [...prevDevices, result]);
    };

    BluetoothService.startScanning(handleDeviceDiscovery);

    return () => {
      BluetoothService.stopScanning();
    };
  }, []);

  const handleConnectToDevice = async (device: ScanResult) => {
    try {
      await BluetoothService.connectToDevice("device.id");
      setShowConnectAlert(true);
    } catch (error) {
      console.error('Error connecting to device:', error);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <h2>scanList</h2>
          {devices.map((device) => (
            <IonItem key={"device.id"}>
              <IonLabel>{device.localName || 'Unnamed'}</IonLabel>
              <IonButton onClick={() => handleConnectToDevice(device)}>Connect</IonButton>
            </IonItem>
          ))}
        </IonList>

        <IonAlert
          isOpen={showConnectAlert}
          onDidDismiss={() => {
            setShowConnectAlert(false);
            history.push('/homescreen');
          }}
          header="Device Connected"
          message="The device has been successfully connected."
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default BluetoothScan;




















// // BluetoothScanningPage.tsx
// import React, { useEffect, useState } from 'react';
// import { IonPage, IonContent, IonList, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/react';
// import BluetoothService from '../../services/BluetoothService';
// import { BleDevice } from '@capacitor-community/bluetooth-le';
// import { useHistory } from 'react-router-dom';

// const BluetoothScan: React.FC = () => {
//   const history = useHistory();
//   const [devices, setDevices] = useState<BleDevice[]>([]);
//   const [showConnectAlert, setShowConnectAlert] = useState(false);

//   useEffect(() => {
//     const handleDeviceDiscovery = (result: BleDevice) => {
//       // Update the list of devices
//       setDevices((prevDevices) => [...prevDevices, result]);
//     };

//     // Start scanning for devices when the component mounts
//     BluetoothService.startScanning(handleDeviceDiscovery);

//     // Cleanup function to stop scanning when the component unmounts
//     return () => {
//       BluetoothService.stopScanning();
//     };
//   }, []); // Run the effect only once when the component mounts..when render function called

//   const handleConnectToDevice = async (device: BleDevice) => {
//     try {
//       // Connect to the selected device
//       // await BluetoothService.connectToDevice(device.id);
//       await BluetoothService.connectToDevice("device.id");

//       // Show a success alert
//       setShowConnectAlert(true);
//     } catch (error) {
//       console.error('Error connecting to device:', error);
//     }
//   };

//   return (
//     <IonPage>
//       <IonContent>
//         <IonList>
//           {devices.map((device) => (
//             <IonItem >
//               {/* <IonItem key={device.id}> */}
//               <IonLabel>{device.name || 'Unnamed'}</IonLabel>
//               <IonButton onClick={() => handleConnectToDevice(device)}>Connect</IonButton>
//             </IonItem>
//           ))}
//         </IonList>

//         {/* Alert to show when a device is connected */}
//         <IonAlert
//           isOpen={showConnectAlert}
//           onDidDismiss={() => {
//             setShowConnectAlert(false);
//             // Navigate to the home page or perform any other action after connecting
//             history.push('/home');
//           }}
//           header="Device Connected"
//           message="The device has been successfully connected."
//           buttons={['OK']}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default BluetoothScan;
