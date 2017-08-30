import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
  screen: {
    height: screenHeight,
    width: screenWidth
  },
  naviHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  tabbarHeight: 49
};