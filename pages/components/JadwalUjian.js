import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Container, Content, Card, ListItem, Header, Text, Left, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
export default class JadwalUjian extends Component{
    home = () =>  {
		  this.props.navigation.navigate('Menu');
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
                      <Title style={{color: '#fff'}}>UMBY Learning</Title>
                    </Body>
                    <Right>
                      <Button transparent onPress={this.home}>
                        <Icon name='ios-home-outline' style={{color: '#fff'}} />             
                      </Button>
                      <Button transparent>
                        <Icon name='ios-log-out' style={{color: '#fff'}} />
                      </Button>
                    </Right>
                  </Header>
                </StyleProvider>
                {/* <View style={styles.container}>
                    <Text>Jadwal Ujian Screen</Text>
               
                </View> */}
                <Content style={{backgroundColor: '#fff', padding: 5}}>
                    <Card>
                      <ListItem itemDivider>
                          <Text>Jadwal Ujian Semester Genap 2018</Text>
                      </ListItem>
                      <ListItem>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                          <Body style={{padding: 3}}>
                            <Text style={{fontWeight: 'bold',padding:3}}>UMB008 Bahasa Indonesia</Text>
                            <Text style={{fontWeight: 'bold',padding:3}}>Hari : <Text style={{fontWeight: '400'}}>Senin</Text></Text>
                            <Text style={{fontWeight: 'bold',padding:3}}>Waktu : <Text style={{fontWeight: '400',fontStyle: 'italic'}}>09:50 s.d,	11:30</Text></Text>
                            <Text style={{padding:3}}><Text style={{fontWeight:'bold'}}>Ruang : </Text> D-306-308	</Text>
                            {/* <Text style={{fontSize: 12,padding:3}}><Text style={{}} */}
                          </Body>
                        </View>
                      </ListItem>
                      
                    </Card>
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