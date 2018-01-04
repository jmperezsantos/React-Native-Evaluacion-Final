import React from 'react';
import { TabNavigator } from "react-navigation";
import DashboardComponent from "./components/DashboardComponent";
import FootballComponent from "./components/FootballComponent";
import BasketballComponent from "./components/BasketballComponent";
import BetsComponent from "./components/BetsComponent";
import { StyleSheet, Image, Platform } from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    },
});

const MainTabNavigator = TabNavigator({
    Home: {
        screen: DashboardComponent,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: <Image source={require('./assets/home.png')} style={[styles.icon]} />
        }
    },
    Football: {
        screen: FootballComponent,
        navigationOptions: {
            title: 'Fútbol',
            tabBarIcon: <Image source={require('./assets/football.png')} style={[styles.icon]} />
        }
    },
    Basketball: {
        screen: BasketballComponent,
        navigationOptions: {
            title: 'Básquetbol',
            tabBarIcon: <Image source={require('./assets/basket.png')} style={[styles.icon]} />
        }
    },
    Bets: {
        screen: BetsComponent,
        navigationOptions: {
            title: 'Apuestas',
            tabBarIcon: <Image source={require('./assets/bills.png')} style={[styles.icon]} />
        }
    }
},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: '#fffff',
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: 'white'
            }
        }
    });

export default MainTabNavigator;