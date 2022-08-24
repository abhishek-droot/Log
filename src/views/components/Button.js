import React from 'react';
import { TouchableOpacity , Text } from 'react-native';
const Button = ({title, onPress = () => {}}) => {
    return (
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={onPress} 
          style={{height: 55, width: '100%', backgroundColor: 'black',justifyContent:'center' , alignItems: 'center',marginVertical: 20}}>
            <Text 
            style={{color: 'white', fontWeight:'bold',fontSize: 18, textAlign: 'center'}}>
               {title}
            </Text>
          </TouchableOpacity>
    )
}

export default Button;