import {
    StackNavigator
  } from 'react-navigation';
  
  import Menu from './Menu';
  import JadwalKuliah from './components/JadwalKuliah';

  export const Router = StackNavigator({
    HeaderTop: {
        screen: HeaderTop
    },
    Menu: { 
        screen: Menu 
    },
    JadwalKuliah: {
        screen: JadwalKuliah
    }
    },{
        headerMode: 'none'
    
  });
  