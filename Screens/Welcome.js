import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text } from '../Components'
import { theme } from '../Constants';


 class Welcome extends Component {
    static naviagtionOptions = {
        header: null,
    }
    render() {
        return (
            <Block >
                <Block center middle flex={0.3}>
                    <Text h1 centert bold>Your greenhouse
                    <Text h1 primary>Your greenhouse</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>Enjoy</Text>
                </Block>
                <Text>Welcome</Text>
            </Block>);
    }
}

const styles = StyleSheet.create({

})

export default Welcome