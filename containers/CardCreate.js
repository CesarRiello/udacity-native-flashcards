import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'

import { cards } from '../services/storage'
import { colors } from '../services/theme'
import Loading from '../components/Loading'
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
  margin-top: 0;
  margin-right: 20;
  margin-bottom: 0;
  margin-left: 20;
  font-size: 18;

  padding-bottom: 10;
  padding-top: 10;
  padding-right: 20;
  padding-left: 20;

  background-color:  ${colors.white};
  border-color:  ${colors.secondary};
  border-width: 2;
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

const InputContainer = styled.View`
  width: 100%
`

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16;
`

const KeyboardAvoidingViewStyle = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

class CardCreate extends React.Component {
  state = {
    question: '',
    answer: '',
    loadingDeck: false
  }
  cardAdd = () => {
    const {navigation, screenProps} = this.props
    const { key } = navigation.state.params.item
    const { refreshDeck } = navigation.state.params
    const {question, answer} = this.state
    this.setState({loadingDeck: true})
    cards.add({key, question: { question, answer}})
      .then(() => {
        screenProps.loadDecks()
          .then(() => {
            refreshDeck().then(navigation.goBack)
          })
        })
  }
  renderLoading = () => <Loading />
  renderView = () => (<KeyboardAvoidingViewStyle
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={true}
    behavior="padding"
    >
      <InputContainer>
        <DefaultLabel>Question</DefaultLabel>
        <DefaultInput
          placeholder="How much is 2 plus 2?"
          value={this.state.question}
          onChangeText={(text) => this.setState({question: text})}
        />
        <DefaultLabel>Answer</DefaultLabel>
        <DefaultInput
          placeholder="Ex: four."
          value={this.state.answer}
          onChangeText={(text) => this.setState({answer: text})}
        />
        <TouchableOpacity onPress={this.cardAdd}>
          <NewButton>
            <ButtonText>Salvar Card</ButtonText>
          </NewButton>
        </TouchableOpacity>
      </InputContainer>
  </KeyboardAvoidingViewStyle>)
  render() {
    return this.state.loadingDeck
    ? this.renderLoading()
    : this.renderView()
  }
}

export default CardCreate
