import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CartScreen from '../screens/ProjetoScreen';
import { categories } from '../data/categories';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
            <Text style={styles.title}>Perfil Dev</Text>
        </View>
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (item.name === 'Projetos') {
                props.navigation.navigate('Projetos');
              } else if (item.name === 'Habilidades') {
                props.navigation.navigate('Perfil Dev', { screen: 'Habilidades' });
              } else if (item.name === 'Home') {
                props.navigation.navigate('Perfil Dev', { screen: 'Início' });
              } else {
                props.navigation.navigate('Perfil Dev');
              }
              props.navigation.closeDrawer();
            }}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
    </View>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#420c61', elevation: 0, shadowOpacity: 0 },
        headerTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#623574',
        drawerActiveTintColor: '#FFFFFF'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Perfil Dev" component={TabNavigator} />
      <Drawer.Screen name="Projetos" component={CartScreen} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#420c61',
        paddingTop: 50,
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        marginHorizontal: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    },
    itemText: {
        fontSize: 16,
        color: '#333333'
    }
})

export default DrawerNavigator;