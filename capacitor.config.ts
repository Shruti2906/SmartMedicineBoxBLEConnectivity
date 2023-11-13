import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'smartMedicineBox',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      // launchFadeOutDuration: 3000,
      backgroundColor: "#000",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      // iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      // splashFullScreen: true,
      splashImmersive: false,
      layoutName: "launch_screen",
      // useDialog: true,
    },
  },
};

export default config;
