import React , {useState} from 'react';
import { Text , View , StyleSheet , TextInput} from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {
    const [data , setData] = useState(0);

    return (
        
        <View style={{backgroundColor:'white', flex:1}}>

           <Text style={{color:'black', fontSize:15}}>Price Range: {data}</Text>
           <Slider
           style={{width:300 , height:50}}
           minimumValue={10}
           maximumValue={100}
           maximumTrackTintColor="#000000"
           minimumTrackTintColor="#000"
           thumbTintColor='black'
           onValueChange={(value)=>setData(value)}
            />
        </View>
    )
}