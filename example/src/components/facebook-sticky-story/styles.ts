import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: 'black',
  },
  icon: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#2d88ff',
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    lineHeight: 14,
    fontSize: Platform.OS === 'ios' ? 12 : 14,
    fontWeight: '500',
    color: 'black',
  },
});
