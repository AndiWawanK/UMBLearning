import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Container, Header, Text, Left, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
export default class Tagihan extends Component{
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
                <View style={styles.container}>
                    <Text>Tagihan Screen</Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});