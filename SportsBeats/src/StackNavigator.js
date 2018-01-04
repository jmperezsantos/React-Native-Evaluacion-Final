import { StackNavigator } from 'react-navigation';
import LoginComponent from './components/LoginComponent';
import MainTabNavigator from './MainTabNavigator'

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginComponent,
        navigationOptions: {
            headerTitle: 'Login'
        }
    },
    MainTabNavigator: {
        screen: MainTabNavigator
    }
});

export default RootNavigator;