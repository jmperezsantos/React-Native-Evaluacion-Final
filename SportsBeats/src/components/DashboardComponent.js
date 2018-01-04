import React, { Component } from 'react'
import { View, Button, Alert } from 'react-native';
import { CustomImageButton } from './lib'
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class DashboardComponent extends Component {

    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state;

        let headerRight = (
            <Button
                title="Salir"
                onPress={params.closeSession ? params.closeSession : () => null} />
        );

        return { headerRight };

    }

    constructor(props) {
        super(props);

        this.goTologin = this.goTologin.bind(this);
        this.closeSession = this.closeSession.bind(this);
        this.goToFootball = this.goToFootball.bind(this);
        this.goToBasket = this.goToBasket.bind(this);
        this.goToBets = this.goToBets.bind(this);
        this.goToProfile = this.goToProfile.bind(this);

    }

    closeSession() {

        firebase.auth().signOut()
            .then(this.goTologin)
            .catch();
    }

    goTologin() {

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login' })
            ]
        });

        this.props.navigation.dispatch(resetAction);

    }

    componentDidMount() {

        this.props.navigation.setParams({ closeSession: this.closeSession });

    }

    goToFootball() {
        this.props.navigation.navigate('Football')
    }

    goToBasket() {
        this.props.navigation.navigate('Basketball')
    }

    goToBets() {
        this.props.navigation.navigate('Bets')
    }

    goToProfile() {
        
        Alert.alert('Mensaje', 'No se definió el componente a mostrar con este botón');
        
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <CustomImageButton image={require('../assets/football.png')} title='Futbol' onPress={this.goToFootball} />
                    <CustomImageButton image={require('../assets/basket.png')} title='Básquetbol' onPress={this.goToBasket} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CustomImageButton image={require('../assets/bills.png')} title='Apuestas' onPress={this.goToBets} />
                    <CustomImageButton image={require('../assets/profile.png')} title='Perfil' onPress={this.goToProfile} />
                </View>
            </View>

        );
    }
}

export default DashboardComponent;