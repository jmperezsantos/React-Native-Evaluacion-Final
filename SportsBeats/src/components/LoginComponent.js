import React, { Component } from 'react'
import { Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Card, CardSection, Input, CustomButton } from './lib'
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            isLoading: false
        };

        this.performLogin = this.performLogin.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.loginError = this.loginError.bind(this);

    }

    performLogin() {

        if (this.state.username.length > 0 && this.state.password.length > 0) {

            this.setState({
                isLoading: true
            });

            firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
                .then(
                this.loginSuccess
                )
                .catch(
                this.loginError
                );

        } else {
          
            alert('Debes ingresar usuario y contraseña válidos');
            
        }

    }

    loginSuccess() {

        this.setState({
            username: '',
            password: '',
            errorMessage: '',
            isLoading: false
        })

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'MainTabNavigator' })
            ]
        });

        this.props.navigation.dispatch(resetAction);

    }

    loginError() {

        this.setState({
            errorMessage: 'Nombre de usuario o contraseña incorrectos, intente nuevamente.',
            isLoading: false
        })

    }

    showElements() {

        if (this.state.isLoading) {
            return <ActivityIndicator size='large' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
        } else {
            return <CustomButton title='Login' onPress={this.performLogin} />
        }

    }

    render() {
        return (

            <Card style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CardSection>
                    <Input
                        text='Nombre de usuario:'
                        placeholder='username'
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username} />
                </CardSection>
                <CardSection>
                    <Input
                        text='Contraseña:'
                        placeholder='password'
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry />
                </CardSection>
                <Text>{this.state.errorMessage}</Text>
                <CardSection>
                    {this.showElements()}
                </CardSection>

            </Card>

        );
    }
}

export default LoginComponent;