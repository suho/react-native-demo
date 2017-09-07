const app = {
  name: "ReactNativeDemo"
};

const platform = { ios: "iOS", android: "Android", web: "Web" };

const button = {
  title: {
    loadServices: "Press To Load Services",
    clearData: "Press To Clear Data"
  }
};

export default {
  ...app,
  platform,
  button
};
