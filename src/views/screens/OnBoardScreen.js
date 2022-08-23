import React from 'react';
import {StyleSheet , Text , View , SafeAreaView} from 'react-native';
import Button from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
    return (
      <>
      <View style={styles.container}>
      <Button
        title="ORG 1"
        onPress={() =>
          navigation.navigate('RegistrationScreen', { name: 'RegistrationScreen' })
        }
      />
      <Button
        title="ORG 2"
        onPress={() =>
          navigation.navigate('RegistrationScreen', { name: 'RegistrationScreen' })
        }
      />
    
       </View>
       <View style={{  justifyContent:'space-evenly', flexDirection:'row', position: "absolute", bottom: 0}}>
       
       <Button title="SCAN QR" />
       <Button title="SEARCH " />
       
       </View>
       </> 
    );
  };

  const styles = StyleSheet.create({
      container: {
        backgroundColor:'white',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft: 20,
        paddingRight:20
      }
  })

export default OnBoardScreen;