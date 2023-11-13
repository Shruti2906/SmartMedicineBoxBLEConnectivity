// BluetoothService.tsx
import { BleClient, BleDevice, ScanResult, numberToUUID } from '@capacitor-community/bluetooth-le';
const HEART_RATE_SERVICE = numberToUUID(0x180d);

class BluetoothService {
  async startScanning(handleDiscovery: (device: ScanResult) => void) {
    try {
      await BleClient.initialize();
      console.log('bleClient initialized');
      await BleClient.requestLEScan({ services: [HEART_RATE_SERVICE],}, (result) => {
        console.log('startscanning: ',result);
        handleDiscovery(result);
      }); 

    } catch (error) {
      console.error('Error scanning for devices:', error);
      throw error;
    }
  }

  async stopScanning() {
    try {
      await BleClient.stopLEScan();
    } catch (error) {
      console.error('Error stopping scan:', error);
      throw error;
    }
  }

  async connectToDevice(deviceId: string) {
    try {
      await BleClient.connect(deviceId);
    } catch (error) {
      console.error('Error connecting to device:', error);
      throw error;
    }
  }

  async disconnectDevice(deviceId: string) {
    try {
      await BleClient.disconnect(deviceId );
    } catch (error) {
      console.error('Error disconnecting from device:', error);
      throw error;
    }
  }
}

export default new BluetoothService();














// // BluetoothService.tsx
// import { BluetoothLe, BleDevice, RequestBleDeviceOptions } from '@capacitor-community/bluetooth-le';

// class BluetoothService {
//     //enable, disable Bluetooth functions should be added to this class
    
//   async startScanning(handleDiscovery: (device: BleDevice) => void) {
//     try {
//       // Start scanning for BLE devices
//       // await BluetoothLe.requestLEScan({/* options */ }, handleDiscovery);
//       // await BluetoothLe.requestLEScan({ /* options */ }, handleDiscovery);
//       await BluetoothLe.requestLEScan({} as RequestBleDeviceOptions, handleDiscovery);

//     } catch (error) {
//       console.error('Error scanning for devices:', error);
//       throw error;
//     }
//   }

//   async stopScanning() {
//     try {
//       // Stop scanning for BLE devices
//       await BluetoothLe.stopLEScan();
//     } catch (error) {
//       console.error('Error stopping scan:', error);
//       throw error;
//     }
//   }

//   async connectToDevice(deviceId: string) {
//     try {
//       // Connect to the selected device
//       await BluetoothLe.connect({ deviceId });
//     } catch (error) {
//       console.error('Error connecting to device:', error);
//       throw error;
//     }
//   }

//   async disconnectDevice(deviceId: string) {
//     try {
//       // Disconnect from the device
//       await BluetoothLe.disconnect({ deviceId });
//     } catch (error) {
//       console.error('Error disconnecting from device:', error);
//       throw error;
//     }
//   }
// }

// export default new BluetoothService();
