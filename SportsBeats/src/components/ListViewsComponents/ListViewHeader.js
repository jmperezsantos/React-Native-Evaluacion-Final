import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

class ListViewHeader extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, backgroundColor:'#d0ddf2' }}>
                <Text>{this.props.league}</Text>
                <Image source={this.props.image} />
            </View>
        );
    }
}

export default ListViewHeader;