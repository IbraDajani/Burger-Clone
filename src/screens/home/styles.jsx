import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#232227',
  },

  ball: {
    width: 10,
    height: 10,
    backgroundColor: '#f0b321',
    borderRadius: 5,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  iconsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 50,
  },
});

export default styles;
