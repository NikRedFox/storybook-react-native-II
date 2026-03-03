import React from 'react';
import { View } from 'react-native';
import MenuHamburger from './index';

export default {
  title: 'Components/MenuHamburger',
  component: MenuHamburger,
};

export const Padrao = () => (
  <View style={{ padding: 20 }}>
    <MenuHamburger />
  </View>
);