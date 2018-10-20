import React ,{Component} from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, ListView} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>
                    <Text>This is home screen</Text>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:30
    },
    ttext:{
        color:'black',
        fontSize:20,
    },
    textDefaultInput: {
        borderRadius:4,
        color:'black',
        fontWeight:'bold',
        backgroundColor:'#FCE4EC',
        width:200,
        textAlign:'center',
        marginRight:50
    },
});