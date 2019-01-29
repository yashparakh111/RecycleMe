import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, Icon} from 'react-native';
import { Camera, Permissions } from 'expo';

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

	/*snap = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
		}
	};*/

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<Camera style={{ flex: 1 }} type={this.state.type} ratio={"19:9"}>          
						//<TouchableOpacity style={styles.capture_button}>
						//<Icon name={"./assets/camera_capture_button.png"}  size={30} color="#01a699" />
						//</TouchableOpacity>
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
