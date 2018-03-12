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

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const Title = styled.Text`
  color: ${colors.secondary};
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
