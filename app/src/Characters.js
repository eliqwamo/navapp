import React from 'react'
import {View,Text, StyleSheet} from 'react-native';

const Characters = () => {
    return (
        <View style={styles.container}>
            <Text>Characters</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, backgroundColor:'#ebebeb',
        alignItems:'center', justifyContent:'center'
    }
})

export default Characters;