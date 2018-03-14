// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = (props) => {
    // Destruction technique. We also just use style.textStyle instead.
     const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
  viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center', // vertical direction
      alignItems: 'center', // horizontal direction
      height: 60, // pixel value
      paddingTop: 15,
      // It seams like shadows are not supported on android
      // https://github.com/facebook/react-native/issues/2768
      shadowColor: '#000', // shadow color as black
      shadowOffset: { width: 0, height: 2 }, // dimensions of the shadow
      shadowOpacity: 0.2,
      // On android use instead the elevation property:
      elevation: 3,
      position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the component visible from other parts of the app
export { Header };
