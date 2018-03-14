import React from 'react';
import { View } from 'react-native';
// props.children renders all components we have written and passed as props.
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
           {props.children} 
        </View>
    );
};
// {props.children} 
//style={styles.containerStyle}

const styles = {
    containerStyle: {
        borderWidth: 1,
        // rounded corner
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0, // Has something to do with the card item/section
        
        shadowColor: '#000',
        shadowOffset: { with: 0, height: 2 },
        shadowOpacity: 0.1, // Lighten up the color with opacity
        shadowRadius: 2, //like the border radius, should be the same as borderRadius
        elevation: 1, // android shadow fix
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
