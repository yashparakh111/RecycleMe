import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Camera from './Camera';

const AppNavigator = createStackNavigator({
	Home: { screen: Home },
	Camera: { screen: Camera},
});

export default createAppContainer(AppNavigator);
