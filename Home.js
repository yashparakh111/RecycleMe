import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class Home extends React.Component {
	// render the home screen with a logo and a button to switch to camera
	render() {
		return(
			<View style = {styles.container}>
				<View style = {styles.image}>
					<Image style={{height: 150, width: 150}} source={require('./assets/logo.png')} />
				</View>

				<TouchableOpacity style={styles.camera_open}
									onPress={() => this.props.navigation.navigate('Camera')}>
					<Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
						{' '}Press to Recycle{' '}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},

	camera_open: {
		flex: 0.05,
		backgroundColor: 'white',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},

	image: {
		flex: 0.95,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
});
