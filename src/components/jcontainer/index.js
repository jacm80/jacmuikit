import React from 'react';
import {  View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types'

const styles = {
    main: {
        flex: 1,
    }
}

const JContainer = ({ children }) => {
    return (
        <>
        <View style={styles.main}>
            <SafeAreaView>
                <View>
                    {children}
                </View>
            </SafeAreaView>
        </View>
        </>
    )
};

JContainer.propTypes = {
    children: PropTypes.element
}

export default JContainer;

