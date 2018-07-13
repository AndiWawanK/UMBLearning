import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Text, Left, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

import { Drawer } from 'native-base';
import Sidebar from './Sidebar';

export default class Menu extends Component{
    
    jadwalKuliah = () =>  {
		this.props.navigation.navigate('JadwalKuliah');
	}
    elearning = () =>  {
		this.props.navigation.navigate('Elearning');
	}
    jadwalUjian = () =>  {
		this.props.navigation.navigate('JadwalUjian');
	}
    tagihan = () =>  {
		this.props.navigation.navigate('Tagihan');
    }
    logout = () => {
        this.props.navigation.navigate('Login');
    }
    closeDrawer(){
        this._drawer._root.close()
      };
      openDrawer = () => {
        this._drawer._root.open()
      };
    render(){
          
        return(
        <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<Sidebar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
            <Container>
              <StyleProvider style={getTheme(commonColor)}>
                <Header style={{backgroundColor: '#0A7AC8'}}>
                  <Left>
                    <Button iconLeft transparent onPress={() => this.openDrawer()}>
                        <Icon name='menu' style={{color: '#fff'}} />
                    </Button>
                  </Left>
                  <Body>
                    <Title style={{color: '#fff'}}>UMBY Learning</Title>
                  </Body>
                  <Right>
                    <Button transparent onPress={this.logout}>
                        <Icon name='ios-log-out' style={{color: '#fff'}} />
                    </Button>
                  </Right>
                </Header>
              </StyleProvider> 
             
              <View style={styles.container}>
                <View style={styles.menu}>

                    <View style={styles.menuItem}>
                        <View style={{flex: 1, backgroundColor: '#edb423'}}>
                            <Body>
                                <Button transparent style={styles.itemLink} onPress={this.jadwalKuliah}>
                                    <Icon name="md-timer" style={{fontSize: 100, color: '#fff'}} />                              
                                </Button>     
                                <Button transparent onPress={this.jadwalKuliah}>
                                    <Title style={{color: '#fff', fontWeight: '600'}}>Jadwal Kuliah</Title>
                                </Button>                          
                            </Body>
                        </View>
                    </View>

                    <View style={styles.menuItem}>
                        <View style={{flex: 1, backgroundColor: '#41b5ca'}}>
                            <Body>
                                <Button transparent style={styles.itemLink} onPress={this.elearning}>
                                    <Icon name="md-notifications-outline" style={{fontSize: 100, color: '#fff'}} />                              
                                </Button>     
                                <Button transparent onPress={this.elearning}>
                                    <Title style={{color: '#fff', fontWeight: '600'}}>E-Learning</Title>
                                </Button>                          
                            </Body>
                        </View>
                    </View>

                    <View style={styles.menuItem}>
                        <View style={{flex: 1, backgroundColor: '#0e79b1'}}>
                            <Body>
                                <Button transparent style={styles.itemLink} onPress={this.jadwalUjian}>
                                    <Icon name="timer" style={{fontSize: 100, color: '#fff'}} />                              
                                </Button>     
                                <Button transparent onPress={this.jadwalUjian}>
                                    <Title style={{color: '#fff', fontWeight: '600'}}>Jadwal Ujian</Title>
                                </Button>                          
                            </Body>
                        </View>
                    </View>

                    <View style={styles.menuItem}>
                        <View style={{flex: 1, backgroundColor: '#fb644c'}}>
                            <Body>
                                <Button transparent style={styles.itemLink} onPress={this.tagihan}>
                                    <Icon name="cash" style={{fontSize: 100, color: '#fff'}} />                              
                                </Button>     
                                <Button transparent onPress={this.tagihan}>
                                    <Title style={{color: '#fff', fontWeight: '600'}}>Lihat Tagihan</Title>
                                </Button>                          
                            </Body>
                        </View>
                    </View>

                </View>
              </View>

            </Container>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        height: '70%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    menuItem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    // menuItemInner: {
    //     flex: 1,
    //     backgroundColor: '#292929',
    // }
    itemLink: {
        // width: '100%',
        height: '60%',
    } 
});