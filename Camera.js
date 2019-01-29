import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, Icon, Image} from 'react-native';
import { Camera, Permissions, FileSystem} from 'expo';

//<Camera ref={ref => { this.camera = ref; }} />

export default class CameraScreen extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	getRatios = async () => {
		const ratios = await this.camera.getSupportedRatios();
		return ratios;
	};

	takePicture = () => {
		if (this.camera) {
			this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
		}
	};

	onPictureSaved = async photo => {
		await FileSystem.moveAsync({
			from: photo.uri,
			to: '${FileSystem.documentDirectory}photos/${Date.now()}.jpg',
		});
		this.setState({ newPhotos: true });
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
				<Camera style={{ flex: 1 }} type={this.state.type} ratio={'19:9'}>
				<View style={{
					flex: 1,
						backgroundColor: 'transparent',
						flexDirection: 'column',
						justifyContent: 'flex-end',
				}}>
				<TouchableOpacity
				style={{
					flex: 0.1,
						alignItems: 'center',
				}}
				onPress={this.takePicture}>
				<Image
				style={{backgroundColor: 'transparent', width:90, height:90}}
				source={require('./assets/camera_capture_button.png')}
				/>
				</TouchableOpacity>
				</View>
				</Camera>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	capture_button: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	}
});
