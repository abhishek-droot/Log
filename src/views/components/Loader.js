import React from 'react';
import {View, StyleSheet, useWindowDimensions, ActivityIndicator, Text} from 'react-native';




const Loader = ({visible = false}) => {
    const { height, width} = useWindowDimensions();
    return (
   
     visible && <View styles={[styles.container, {height , width}]}>
        <View style={styles.loader}>
            <ActivityIndicator size="large" color='#5D5FEE'/> 
            <Text style={{marginRight: 10 , fontSize: 16, color:'black'}}>Loading ...</Text>
         </View> 
     </View>
    )

    }

const styles = StyleSheet.create({
    container: {
          position: 'absolute',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.5)' ,
          justifyContent: 'center',
          
          
    },
    loader: {
       height: 70,
       backgroundColor: 'white',
       marginHorizontal:50,
       borderRadius:5,
       flexDirection: 'row',
       alignItems:'center',
       paddingHorizontal: 20,
       position: 'absolute'
    }
})

export default Loader;