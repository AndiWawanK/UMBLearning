import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Content, Button, Text, Item, Input, Icon } from 'native-base';

export default class Login extends Component{
    login = () =>  {
		this.props.navigation.navigate('Menu');
	}
    render(){
        return(
            <Content style={{backgroundColor: '#98d2c1'}}>
            <View style={styles.container}>
         
                <View style={styles.logo} >
                    <View style={styles.profileImage}>
                        <Image source={require('../assets/img/logo.png')}  style={{width: 200, height: 100}}/>
                    </View>
                </View>

                <View style={styles.login} >
                    <View style={styles.loginInner} >
                        <View style={styles.loginItem} >
                            <Item style={{ borderColor:"#eee" }}>
                                <Icon active name='md-person' style={{color: '#eee'}}/>
                                <Input placeholder='Username' style={{color: '#fff'}}/>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.loginInner} >
                        <View style={styles.loginItem} >
                            <Item style={{ borderColor:"#eee" }}>
                                <Icon active name='md-lock' style={{color: '#eee'}}/>
                                <Input placeholder='Password' secureTextEntry={true} style={{color: '#fff'}}/>
                            </Item>
                        </View>
                    </View>
                    <View style={styles.loginInner} >
                        <View style={styles.loginItem} >
                            <Button full info style={{borderRadius: 50,marginTop: 10}} onPress={this.login}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>
                </View>

            </View>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#98d2c1',
        // height: '100%'
    },
    logo: {
        height: '100%',
        // height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    login: {
        height: '100%',
        // height: '40%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 5,
        marginTop: -50
    },
    loginInner: {
        width: '80%',
        // height: '25%',
        padding: 5,
        
    },
    loginItem: {
        flex: 1,
    }
});