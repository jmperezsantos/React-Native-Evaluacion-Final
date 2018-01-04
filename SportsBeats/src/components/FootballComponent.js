import React, { Component } from "react";
import { Text, View, SectionList, StyleSheet, Alert } from "react-native";
import ListViewHeader from './ListViewsComponents/ListViewHeader';
import ListViewItem from './ListViewsComponents/ListViewItem';

class FootballComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: []
        }

    }

    componentDidMount() {

        fetch('https://shop-3b443.firebaseio.com/football.json',
            {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {

                var sections = [];
                responseJson.forEach(element => {

                    sections.push(
                        { title: element.pais, data: element.partidos }
                    );

                });

                this.setState({
                    sections: sections
                })

            })
            .catch(error => {
                Alert.alert('Error', "Ocurrió un error al consumir el servicio remoto: " + error);
            });

    }

    render() {
        return (
            <View>
                <SectionList
                    sections={this.state.sections}
                    renderSectionHeader={
                        ({ section }) => {

                            if (section.title === 'Inglaterra') {
                                return <ListViewHeader league={section.title} image={require('../assets/gb.png')} />
                            } else if (section.title === 'España') {
                                return <ListViewHeader league={section.title} image={require('../assets/spain.png')} />
                            } else if (section.title === 'Estados Unidos') {
                                return <ListViewHeader league={section.title} image={require('../assets/eua.png')} />
                            }

                        }
                    }
                    renderItem={
                        ({ item }) => <ListViewItem local={item.local} score={item.score} visit={item.visit} />
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

export default FootballComponent;