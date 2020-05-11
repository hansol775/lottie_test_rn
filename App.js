import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView source={require('./src/images/clap.json')} autoPlay loop />
        </View>
    );
};

export default App;
