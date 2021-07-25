import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';

const Interna = ({route}) => {
  const {burger} = route.params;
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(burger.price);

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <View style={{height: 400, width: 400}}>
        <Image
          resizeMode="contain"
          style={{flex: 1}}
          source={{
            uri: burger.url,
          }}
        />
      </View>
      <View style={styles.buyView}>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          {burger.title}
        </Text>
        <Text style={{color: '#dedede', fontSize: 20, marginBottom: 30}}>
          {burger.description}
        </Text>
        <View>
          <Text style={{color: 'gray'}}>{burger.buyDetail}</Text>
          <Text style={{color: 'gray', marginBottom: 30}}>Promo code</Text>
        </View>
        <View style={styles.quantityBox}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={styles.quantityBoxChildren}>
            <Text style={{color: '#000', fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Text style={{color: '#fff'}}>{quantity}</Text>
          <TouchableOpacity
            onPress={handleIncrement}
            style={styles.quantityBoxChildren}>
            <Text style={{color: '#000'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'gray', fontSize: 12}}>Total Price</Text>
          <Text style={{color: '#fff', fontSize: 32, textAlign: 'center'}}>
            {(price * quantity).toFixed(2)} $
          </Text>
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={{color: '#FFF', fontWeight: 'bold'}}>Order Now</Text>
          <View style={styles.shoppingIcon}>
            <Icon name="shopping-bag" size={18} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Interna;
