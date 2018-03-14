import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// size || 'large' <-- if no size is provided it is default large! NICE!
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} /> 
        </View>
    );
};

const styles = {
    spinnerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
};

export { Spinner };

