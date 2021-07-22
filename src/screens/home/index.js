import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import BurgerGrid from './components/burger-grid/index';
import MenuItem from './components/menu-item/index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import styles from '../home/styles';

const HomeScreen = () => {
  const [menu, setMenu] = useState(1);

  const DATA = [
    {
      title: 'Beef Burger',
      description: 'Onion with cheese',
      price: 18,
      buyDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://images-ext-2.discordapp.net/external/D2Yqlcv2Z-w47r0Ozh6z6QkLelp1-DqiSFhtWS9nj-c/https/upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png?width=1013&height=675',
    },
    {
      title: 'Chicken Burger',
      description: 'Chicken with cheese',
      price: 12,
      buyDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://bk-cms-dev.s3.amazonaws.com/_800x600_crop_center-center_none/Chicken_Duplo_meta_375x142-50k.png?mtime=20201219133729&focal=none&tmtime=20210429145018',
    },
    {
      title: 'Classic Burger',
      description: 'Beef with salad',
      price: 24,
      buyDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://mymiamigrill.com/wp-content/uploads/2020/08/classic-burger.png',
    },
    {
      title: 'Grilled Burger',
      description: 'Grilled chicken',
      price: 14,
      buyDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'https://i.pinimg.com/originals/e6/37/c0/e637c03e9108f36c005b0053d8e69431.png',
    },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Burger',
    },
    {
      id: 2,
      name: 'Pasta',
    },
    {
      id: 3,
      name: 'Salads',
    },
  ];

  const renderItem = ({item}) => <BurgerGrid burger={item} />;

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 50,
        }}>
        <TouchableOpacity>
          <Icon name="bars" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          Every Bite a
        </Text>
        <Text style={{color: '#dedede', fontSize: 20, marginBottom: 30}}>
          Better Burguer!
        </Text>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {menuItems.map(e => (
            <MenuItem
              key={e.id}
              item={e}
              menu={menu === e.id && true}
              handleButton={() => {
                setMenu(e.id);
              }}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(_, index) => `${index}`}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
