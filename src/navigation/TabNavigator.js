import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './StackNavigator';
import FavoritesScreen from '../screens/HabilidadeScreen';
import CartScreen from '../screens/ProjetoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Habilidades') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Projetos') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5b17b4',
        tabBarInactiveTintColor: '#999999',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeStackNavigator} />
      <Tab.Screen name="Habilidades" component={FavoritesScreen} />
      <Tab.Screen name="Projetos" component={CartScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;