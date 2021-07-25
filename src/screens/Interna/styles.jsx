import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#232227',
  },
  buyView: {
    position: 'relative',
  },
  orderBtn: {
    flexDirection: 'row',
    backgroundColor: '#f0b321',
    height: 50,
    width: 150,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    shadowColor: '#f0b321',
    shadowOffset: {width: 80, height: 60},
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
  },
  quantityBox: {
    height: 35,
    width: 90,
    backgroundColor: '#000',
    borderRadius: 10,
    position: 'absolute',
    left: '76%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityBoxChildren: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  shoppingIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default styles;
