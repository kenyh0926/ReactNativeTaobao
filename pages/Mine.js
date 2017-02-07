import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Mine extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}
                >
                    oops, 我的淘宝被猫吃了....
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
});
