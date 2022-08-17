import React , {useState} from "react";
import {View , Text , StyleSheet, TextInput} from 'react-native';


const Input = ({label , iconName , error , password , onFocus = () => {} , ...props}) => {
    
    const [isFocused , setisFocused] = useState(false);
    const [hidePassword , setHidePassword] = useState(password);


    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, {borderColor: error ? 'red' : isFocused ? '#7978B5' : '#F3F4FB' }, ]}>
                <TextInput 
                secureTextEntry={hidePassword}
                autoCorrect={false}
                onFocus={()=>{
                    onFocus();
                    setisFocused(true);
                }}
                 
                onBlur={()=>{
                    setisFocused(false);
                }}

               style={{color:'#7978B5'  , flex: 1}}
                {...props}
                />
             
          
            </View>
           { error &&  <Text style={{color: 'red' , fontSize: 12 , marginTop: 7}}>
                {error}
            </Text> }
        </View>
    );

}

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: 'black'
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#F3F4FB',
        flexDirection: 'row',
        marginHorizontal: 1,
        borderWidth: 0.5,
        alignItems: 'center'
    }
})
export default Input;