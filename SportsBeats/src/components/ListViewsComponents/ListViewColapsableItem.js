import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput, Button, Image, LayoutAnimation } from "react-native";
import { Card, CardSection, Input, CustomButton } from "../lib";

class ListViewItem extends Component {

    constructor(props) {
        super(props);

        var split = props.item.score.split('-');

        this.state = {
            colapsed: true,
            local: split[0],
            visit: split[1]
        }

        this.drawContent = this.drawContent.bind(this);
        this.didTapElement = this.didTapElement.bind(this);
        this.didTapBet = this.didTapBet.bind(this);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    didTapBet() {

        if (this.state.local.length > 0 && this.state.visit.length > 0) {

            var url = 'https://shop-3b443.firebaseio.com/next/' + this.props.index + '.json'

            var headers = {
                'Content-Type': 'application/json'
            };

            var body = JSON.stringify({
                apostado: true,
                local: this.props.item.local,
                score: this.state.local + '-' + this.state.visit,
                visit: this.props.item.visit
            });

            fetch(url, {
                method: 'PUT',
                headers: headers,
                body: body
            }).then(response => response.json())
                .then(responseJson => {

                    console.log(responseJson);

                    if (responseJson.error) {

                        alert('error');

                    } else {

                        this.props.onUpdate();

                    }

                })
                .catch(error => {

                    console.error(error);

                })
        } else {

            Alert.alert('Error!', 'No puedes dejar vacíos los campos del marcador');

        }
    }

    drawContent() {

        if (!this.state.colapsed) {

            return (
                <CardSection >
                    <View style={{ flex: 1, flexDirection: 'column' }} >
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <TextInput
                                style={style.inputsStyle}
                                placeholder='Local'
                                value={this.state.local}
                                onChangeText={text => this.setState({ local: text })}
                                keyboardType='numeric'
                                editable={!this.props.item.apostado}
                            />

                            <TextInput
                                style={style.inputsStyle}
                                placeholder='Visitante'
                                value={this.state.visit}
                                onChangeText={text => this.setState({ visit: text })}
                                keyboardType='numeric'
                                editable={!this.props.item.apostado}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                            {
                                !this.props.item.apostado &&
                                <CustomButton title='Apostar' onPress={this.didTapBet} />
                            }
                            {
                                this.props.item.apostado &&
                                <Image source={require('../../assets/done.png')} />
                            }
                        </View>
                    </View>
                </CardSection>
            );

        }
    }

    didTapElement() {

        this.setState({
            colapsed: !this.state.colapsed
        })
        this.forceUpdate()

    }

    render() {
        return (
            <TouchableOpacity onPress={this.didTapElement}>
                <Card>
                    <CardSection>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={style.labelLeftStyle} >{this.props.item.local}</Text>
                            <Text style={style.labelCenterStyle}>VS</Text>
                            <Text style={style.labelRightStyle}>{this.props.item.visit}</Text>
                        </View>
                    </CardSection>

                    {this.drawContent()}

                </Card>
            </TouchableOpacity>
        );
    }

}

const style = StyleSheet.create({
    labelLeftStyle: {
        flex: 1,
    },
    labelCenterStyle: {
        flex: 1,
        textAlign: 'center'
    },
    labelRightStyle: {
        flex: 1,
        textAlign: 'right'
    },
    inputsStyle: {
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})

export default ListViewItem;