import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Left, List, Text, ListItem, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

export default class MatkulElearnin extends Component{
    home = () => {
        this.props.navigation.navigate('Menu');
    }
    back = () => {
        this.props.navigation.navigate('Elearning');
    }
    render(){
        return(
            <Container>
                <StyleProvider style={getTheme(commonColor)}>
                  <Header style={{backgroundColor: '#0A7AC8'}}>
                    <Left>
                      <Button iconLeft transparent onPress={this.back}>
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
                    <Text> Haloo, Matkul E-Learning Screen </Text>
                </View> */}
                <Content style={{backgroundColor: '#fff'}}>
                <View style={{backgroundColor: '#fff',padding: 10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 13}}>NIM</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>17111066</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Nama Mahasiswa</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>A.Firwansyah</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>NIDN</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>0006127201</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Nama Dosen</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>Indah Susilawati</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Program Studi</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>Teknik Informatika</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Kode MK</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>TIF037</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Matakuliah</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>ALJABAR LINIER DAN MATRIKS</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Bobot SKS</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>3 SKS</Text></View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '35%', height: 20}} ><Text style={{fontSize: 14}}>Kelas</Text></View>
                        <View style={{width: '5%', height: 20}} ><Text style={{fontSize: 14}}>:</Text></View>
                        <View style={{width: '60%', height: 20}} ><Text style={{fontSize: 14}}>12D</Text></View>
                    </View>
                </View>
                
                <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}}></Text>
                </ListItem> 

                <ListItem>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding: 3}}>Matriks dan Operasi Matriks</Text>
                          <Text style={{padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Tanggal :</Text> 2018-03-30</Text>
                          <Text style={{fontSize: 14,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Pertemuan :</Text> 04</Text>
                          <Text style={{fontSize: 14,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>* </Text> Tugas dikumpulkan pada perkuliahan minggu depan</Text>
                          <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: 5}}>
                            <Button full iconLeft style={{height: 40}} onPress={() => alert("Halooo, Anda MengKlik Tombol Presensi")}>
                                <Icon name='md-checkbox-outline' />
                                <Text>Presensi</Text>
                            </Button>
                            <Button full iconLeft success style={{height: 40}} onPress={() => alert("Halooo, Anda MengKlik Tombol View Presensi")}>
                                <Icon name='ios-eye' />
                                <Text>View Presensi</Text>
                            </Button>
                          </View>
                        </Body>
                    </View>
                </ListItem>
                <ListItem>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Body style={{padding: 3}}>
                          <Text style={{fontWeight: 'bold',padding: 3}}>Vektor 2D dan 3D (cont.)</Text>
                          <Text style={{padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Tanggal :</Text> 2018-03-30</Text>
                          <Text style={{fontSize: 14,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>Pertemuan :</Text> 04</Text>
                          <Text style={{fontSize: 14,padding:3}}><Text style={{fontWeight:'bold',fontSize: 12}}>* </Text> Tugas dikumpulkan pada perkuliahan minggu depan</Text>
                          <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: 5}}>
                            <Button full iconLeft style={{height: 40}} onPress={() => alert("Halooo, Anda MengKlik Tombol Presensi")}>
                                <Icon name='md-checkbox-outline' />
                                <Text>Presensi</Text>
                            </Button>
                            <Button full iconLeft success style={{height: 40}} onPress={() => alert("Halooo, Anda MengKlik Tombol View Presensi")}>
                                <Icon name='ios-eye' />
                                <Text>View Presensi</Text>
                            </Button>
                          </View>
                        </Body>
                    </View>
                </ListItem>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});