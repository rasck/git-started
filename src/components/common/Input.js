import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, autoCorrect, placeholder, secureTextEntry }) => {
 const { inputStyle, containerStyle, labelStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={autoCorrect} 
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
// The label and the textinput are siblings
// We use flex (box?) to allocate propertions of 
// available space. The input will have 2/3 of the render style

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 // 
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1, // Fill up the available space there is
        flexDirection: 'row', // default we have vertical direction
        // now the label will be just right of the input instead
        // of over it.
        alignItems: 'center'
    }
};

export { Input };
