import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'
import { decks } from '../services/storage'
import { colors } from '../services/theme'
import DefaultInput from '../components/DefaultInput'
import DefaultLabel from '../components/DefaultLabel'

const NewButton = styled.View`
  margin-top: 20;
  margin-right: 20;
  margin-bottom: 20;
  margin-left: 20;
  padding-top: 15;
  padding-bottom: 15;
  background-color: ${colors.primary};
`
const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16;
`

class DeckCreate extends React.Component {
  state = {
    title: ''
  }
  saveDeck = () => {
    decks.add({title: this.state.title})
      .then((item) => {
        this.setState({title: ''})
        this.props.screenProps.deckAdd({navigation: this.props.navigation, item})
        this.props.navigation.goBack()
    })
  }
  render() {
    return (
      <KeyboardAvoidingView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        behavior="padding"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <DefaultLabel>Deck Name?</DefaultLabel>
            <DefaultInput
              placeholder="Math ou history"
              value={this.state.title}
              onChangeText={(text) => this.setState({title: text})}
            />
            <TouchableOpacity onPress={this.saveDeck}>
              <NewButton>
                <ButtonText>Create</ButtonText>
              </NewButton>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}


export default DeckCreate
