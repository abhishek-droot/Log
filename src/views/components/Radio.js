
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
	state = {
		value: null,
	};
	render() {
		const { PROP } = this.props;
		const { value } = this.state; 
		return (
			<View style={{flex:1 , flexDirection:'row', justifyContent:'flex-start'}}>
				{PROP.map(res => {
					return (
					
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
									this.setState({
										value: res.key,
									});
								}}><Text style={styles.radioText}>{res.text}</Text></TouchableOpacity>
							
						</View>
					
					);
				})}
                {/* <Text style={{color:'black'}}> Selected: {this.state.value} </Text> */}
			</View>
			
		);
	}
}
const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'flex-start',
	},
    radioText: {
        marginLeft: 20,
        fontSize: 14,
        color: '#000',
        fontWeight: '700',
		marginRight: 50
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 25,
		backgroundColor: '#000',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});