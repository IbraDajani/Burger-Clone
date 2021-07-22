import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';

const BurgerGrid = ({burger}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Interna', {
          burger: burger,
        });
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={styles.image}>
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={{
              uri: burger.url,
            }}
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
            {burger.title}
          </Text>
          <Text
            numberOfLines={2}
            style={{fontWeight: 'bold', fontSize: 14, color: '#bebebe'}}>
            {burger.description}
          </Text>
          <View style={styles.priceIcon}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>
              ${burger.price.toFixed(2)}
            </Text>
            <TouchableOpacity style={styles.plusView}>
              <Icon name="plus" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BurgerGrid;
