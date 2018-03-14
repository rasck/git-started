import React from 'react';

import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
   const { buttonStyle, textStyle } = styles;
   
    return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
    </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, // Expand to fill as much content as it can
        alignSelf: 'stretch', // Position it self using flexbox rules
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        color: '#007aff',
        alignSelf: 'center', // Position it self using flexbox rules
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '600',
    }
};

export { Button }; // a short hand of { Button: Button } key value pair

