import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  TextInput,
  Button
} from 'react-native';
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import { Constants } from 'expo'
import AppHeader from './AppHeader'
import Deck from './Deck'
import Decks from './Decks'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const Title = styled.Text`
  color: ${color.primaryBlack};
  font-size: 26;
  text-align: center;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`

const TextField = styled.TextInput`
  height: 50;
  margin-top: 20;
  margin-right: 20;
  margin-bottom: 20;
  margin-left: 20;
  padding-top: 10;
  padding-bottom: 10;
  font-size: 18;
`

const NewButton = styled.View`
  margin-top: 20;
  margin-right: 20;
  margin-bottom: 20;
  margin-left: 20;
  padding-top: 15;
  padding-bottom: 15;
  background-color: ${color.primary};
`
const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16;
`

class DecksCreate extends React.Component {
  saveDeck = () => {
    console.log('Save Deck')
  }
  render() {
    return (
      <KeyboardAvoidingView>
          <View>
            <Title>Choose a name for you deck?</Title>
            <TextField
              placeholder="deck's name"
              onChangeText={(text) => this.setState({text})}
            />
            <TouchableNativeFeedback
              onPress={this.saveDeck}>
              <NewButton>
                <ButtonText>Create</ButtonText>
              </NewButton>
            </TouchableNativeFeedback>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

export default DecksCreate
