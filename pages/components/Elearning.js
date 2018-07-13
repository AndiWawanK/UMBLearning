import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Container, Header, Content, Text, Left, List, ListItem, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

export default class Elearning extends Component{
    home = () =>  {
		  this.props.navigation.navigate('Menu');
    }
    MatkulElearning = () => {
      this.props.navigation.navigate('MatkulElearning');
    }
    logout = () => {
      this.props.navigation.navigate('Login')
    }


    render(){
        return(
            <Container>
                <StyleProvider style={getTheme(commonColor)}>
                  <Header style={{backgroundColor: '#0A7AC8'}}>
                    <Left>
                      <Button iconLeft transparent onPress={this.home}>
                        <Icon name='ios-arrow-back' style={{color: '#fff'}} />
                      </Button>
                    </Left>
                    <Body>
                      <Title style={{color: '#fff'}}>E-Learning</Title>
                    </Body>
                    <Right>
                      <Button transparent onPress={this.home}>
                        <Icon name='ios-home-outline' style={{color: '#fff'}} />             
                      </Button>
                      <Button transparent onPress={this.logout}>
                        <Icon name='ios-log-out' style={{color: '#fff'}} />
                      </Button>
                    </Right>
                  </Header>
                </StyleProvider>
                {/* <View style={styles.container}>
                    <Text>E-Learning Screen</Text>
                </View> */}

                <Content style={{backgroundColor: '#fff', padding: 5}}>

                  <View style={{backgroundColor: '#fff', padding: 10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{width: '35%', height: 20}} ><Text style={{color: '#706f6f'}}>Fakultas</Text></View>
                      <View style={{width: '5%', height: 20}} ><Text style={{color: '#706f6f'}}>:</Text></View>
                      <View style={{width: '60%', height: 20}} ><Text style={{color: '#706f6f'}}>Teknologi Informasi</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{width: '35%', height: 20}} ><Text style={{color: '#706f6f'}}>Program Studi</Text></View>
                      <View style={{width: '5%', height: 20}} ><Text style={{color: '#706f6f'}}>:</Text></View>
                      <View style={{width: '60%', height: 20}} ><Text style={{color: '#706f6f'}}>Teknik Informatika</Text></View>
                    </View>
                  </View>

                    <List>
                      <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>MATAKULIAH</Text>
                      </ListItem> 
                      
                      <ListItem onPress={this.MatkulElearning}>
                        <Left>
                          <Text style={{fontSize: 12}}>ALJABAR LINIER DAN MATRIKS</Text>
                        </Left>
                        <Right>
                          <Icon name='arrow-forward' />
                        </Right>
                      </ListItem>
                      <ListItem>
                        <Left>
                          <Text style={{fontSize: 12}}>LOGIKA FUZZY</Text>
                        </Left>
                        <Right>
                          <Icon name='arrow-forward' />
                        </Right>
                      </ListItem>
                      <ListItem last>
                        <Left>
                          <Text style={{fontSize: 12}}>DATA WAREHOUSE</Text>
                        </Left>
                        <Right>
                          <Icon name='arrow-forward' />
                        </Right>
                      </ListItem>

                    </List>


                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});