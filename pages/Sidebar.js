import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { Container } from 'native-base';
export default class Sidebar extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <View style={styles.sidebar}>

                    <View style={styles.profileImg}>
                        <Image source={require('../assets/img/profile.png')} style={{width: 100, height: 100}}/>
                        {/* <Text style={{textAlign: 'center',fontSize: 20, color: '#fff', padding: 10}}>Orang Gila</Text> */}
                    </View>
                    <View style={{padding: 10}}>
                    <View style={styles.aboutMhs}>
                        <View style={{width: '20%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>NIM</Text>
                        </View>
                        <View style={{width: '5%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>:</Text>
                        </View>
                        <View style={{width: '75%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>17111066</Text>
                        </View>
                    </View>
                    <View style={styles.aboutMhs}>
                        <View style={{width: '20%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>Nama</Text>
                        </View>
                        <View style={{width: '5%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>:</Text>
                        </View>
                        <View style={{width: '75%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>A.Firwansyah</Text>
                        </View>
                    </View>
                    <View style={styles.aboutMhs}>
                        <View style={{width: '20%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>Prodi</Text>
                        </View>
                        <View style={{width: '5%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>:</Text>
                        </View>
                        <View style={{width: '75%'}}>
                            <Text style={{fontSize: 13, padding: 5}}>Teknik Informatika</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // flexDirection: 'column',
    },
    sidebar: {
        width: '88%',
        height: '100%',
        backgroundColor: '#fff'
    },
    profileImg: {
        width: '100%',
        // height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 30
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#0a7ac8'
    },
    aboutMhs: {
        // width: '100%',
        flexDirection: 'row',
    }
});