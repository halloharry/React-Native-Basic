import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    height: '100%',
    width: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 10,
    color: '#5c5e62',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  btnCon: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },

  subLink: {
    textDecorationLine: 'underline',
  },
});

export default styles;
