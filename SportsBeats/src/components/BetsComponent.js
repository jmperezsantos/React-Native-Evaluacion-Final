import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import ListViewHeader from "./ListViewsComponents/ListViewHeader";
import ListViewColapsableItem from "./ListViewsComponents/ListViewColapsableItem";

class BetsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
        this.consumeWebService = this.consumeWebService.bind(this);
    }

    componentDidMount() {

        this.consumeWebService();

    }

    consumeWebService() {

        fetch('https://shop-3b443.firebaseio.com/next.json',
            {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson) => {

                var data = []
                var index = 0;
                responseJson.forEach(element => {

                    data.push(
                        {
                            index: index++,
                            value: element
                        }
                    );

                });

                this.setState({
                    data: data
                })

            })
            .catch(error => {
                Alert.alert('Error', "Ocurrió un error al consumir el servicio remoto: " + error);
            });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={
                        ({ item }) => <ListViewColapsableItem item={item.value} index={item.index} onUpdate={this.consumeWebService} />
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

}

export default BetsComponent;