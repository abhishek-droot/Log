import React from 'react';
import { TouchableOpacity , Text } from 'react-native';
const Button = ({title, onPress = () => {}}) => {
    return (
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={onPress} 
          style={{height: 55, width: '100%', backgroundColor: '#5D5FEE',justifyContent:'center' , alignItems: 'center',marginVertical: 20}}>
            <Text 
            onPress={() => navigation.navigate('LoginScreen')}
            style={{color: 'white', fontWeight:'bold',fontSize: 18,}}>
               {title}
            </Text>
          </TouchableOpacity>
    )
}

export default Button;