import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Container, Header, Content, List, ListItem, Card, Text, Left, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';



export default class JadwalKuliah extends Component{
    home = () =>  {
		  this.props.navigation.navigate('Menu');
    }
    logout = () => {
      this.props.navigation.navigate('Login');
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
                      <Title style={{color: '#fff'}}>Jadwal Kuliah</Title>
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
                    
                <Content style={{backgroundColor: '#fff',padding: 5}}>
                  <Card>

                    <ListItem itemDivider>
                      <Text style={{fontWeight: 'bold'}}>Jadwal Perkuliahan Hari Ini</Text>
                    </ListItem>                    
                    <ListItem>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding:3}}>UMB008 Bahasa Indonesia</Text>
                          <Text style={{fontStyle: 'italic',padding:3}}>09:50 s.d,	11:30</Text>
                          <Text style={{fontSize: 12,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Ruang</Text>. D-306-308	</Text>
                        </Body>
                      </View>
                    </ListItem>
                    <ListItem>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding:3}}>TIF035 Object Oriented Programming</Text>
                          <Text style={{fontStyle: 'italic',padding:3}}>13:30 s.d,	16:00</Text>
                          <Text style={{fontSize: 12,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Ruang</Text>. D-304-305	</Text>
                        </Body>
                      </View>
                    </ListItem>

                    <ListItem itemDivider>
                      <Text style={{fontWeight: 'bold'}}>Jadwal Perkuliahan Besok</Text>
                    </ListItem>  
                    <ListItem>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding:3}}>TIF038 Statistik dan Probabilitas</Text>
                          <Text style={{fontStyle: 'italic',padding:3}}>08:00 s.d,	09:40</Text>
                          <Text style={{fontSize: 12,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Ruang</Text>. D-302-303	</Text>
                        </Body>
                      </View>
                    </ListItem>
                    <ListItem>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding:3}}>TIF038 Aljabar Linier dan Matriks</Text>
                          <Text style={{fontStyle: 'italic',padding:3}}>08:00 s.d,	09:40</Text>
                          <Text style={{fontSize: 12,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Ruang</Text>. D-302-303	</Text>
                        </Body>
                      </View>
                    </ListItem>
                    <ListItem>
                      <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding:3}}>TIF038 Basis Data</Text>
                          <Text style={{fontStyle: 'italic',padding:3}}>08:00 s.d,	09:40</Text>
                          <Text style={{fontSize: 12,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Ruang</Text>. D-302-303	</Text>
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