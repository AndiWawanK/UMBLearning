import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { Container } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import Login from './pages/Login';
import Menu from './pages/Menu';
import JadwalKuliah from './pages/components/JadwalKuliah';
import Elearning from './pages/components/Elearning';
import JadwalUjian from './pages/components/JadwalUjian';
import Tagihan from './pages/components/Tagihan';
import MatkulElearning from './pages/components/core/MatkulElearning';


const Router = StackNavigator({
  Login: {
    screen: Login
  },
  Menu: { 
      screen: Menu 
  },
  JadwalKuliah: {
      screen: JadwalKuliah
  },
  JadwalUjian: {
    screen: JadwalUjian
  },
  Elearning: {
    screen: Elearning
  },
  Tagihan: {
    screen: Tagihan
  },
  MatkulElearning: {
    screen : MatkulElearning
  }
  },{
      headerMode: 'none'
});

export default class App extends Component {

  render() {
    return (
      <Container>       
          <Router/>
      </Container>
    );
  }
}

