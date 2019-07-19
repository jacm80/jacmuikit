import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types'

const styles = {
    container: {
        backgroundColor: 'transparent',
    },
}

const JInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                {...props} 
                style={{ 
                    border: 1, 
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 5
                }} 
                placeholderTextColor="gray"
                placeholderStyle={{ justifyContent: 'center', alignItems: 'center' }}
            />
        </View>
    )
};

JInput.propTypes = {
    props: PropTypes.object
}

export default JInput;

