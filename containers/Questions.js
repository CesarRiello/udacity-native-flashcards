import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'
import { decks } from '../services/storage'
import { colors } from '../services/theme'
import Loading from '../components/Loading'
import CardFirst from '../components/CardFirst'
import TouchBtn from '../components/TouchBtn'

const Name = styled.Text`
  margin-top: 30;
  color: ${colors.secondary};
  font-size: 30;
  text-align: center;
`

const Quantity = styled.Text`
  color: ${colors.gray};;
  font-size: 16;
  text-align: center;
`

const DeckWrapper = styled.View`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  flex: 1;
  justify-content: center;
  align-items: center;
`

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        title: '',
        questions: []
      }
    }
  }
  refreshDeck = () => {
    const { key } = this.props.navigation.state.params.item
    return decks.get({key})
      .then(item => {
        this.setState({item})
      })
  }
  componentDidMount() {
    this.refreshDeck()
  }
  renderLoading = () => <Loading />
  renderQuestions() {
    const item = this.state.item || {}
    const count = (item.questions || []).length || 0
    return item && (
      <View style={{flex: 1}}>

      {count ?(
        <DeckWrapper key="deck">
          <Name>{item.title || 'No name'}</Name>
          <Quantity>
            Quantity of cards ({count})
          </Quantity>
          <TouchableOpacity
            key="start"
            disabled={!count}
            onPress={() => {this.props.navigation.navigate('Card', {item})}}
          >
            <TouchBtn>Start</TouchBtn>
          </TouchableOpacity>
        </DeckWrapper>
      ) : (
        <CardFirst />
      )
      }

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CardCreate', {item, refreshDeck: this.refreshDeck})}}
            >
            <TouchBtn outline>Create Card</TouchBtn>
        </TouchableOpacity>

      </View>
    )
  }
  render() {
    return (!this.props.screenProps.fetchedDecks && this.renderLoading()) || this.renderQuestions()
  }
}

export default Questions
