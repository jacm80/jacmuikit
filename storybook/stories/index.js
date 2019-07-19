import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, SafeAreaView } from 'react-native';

import { JInput } from '../../src/index';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));

storiesOf('JInput', module).add('JInput view', () => (
  <SafeAreaView>
    <View style={{ flex: 1, backgroundColor: 'cyan' }}>
      <JInput placeholder="ingrese un texto para continuar..." />
    </View>
  </SafeAreaView>
));