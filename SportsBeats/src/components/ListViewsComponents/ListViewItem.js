import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, CardSection } from "../lib";

class ListViewItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={style.labelLeftStyle} >{this.props.local}</Text>
                        <Text style={style.labelCenterStyle}>{this.props.score}</Text>
                        <Text style={style.labelRightStyle}>{this.props.visit}</Text>
                    </View>
                </CardSection>
            </Card>
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
})

export default ListViewItem;