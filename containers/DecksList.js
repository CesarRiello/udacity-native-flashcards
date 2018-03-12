import React from 'react';
import { FlatList, Vibration, Alert } from 'react-native';
import styled from 'styled-components/native'
import { decks } from '../services/storage'
import { colors } from '../services/theme'
import Deck from '../components/Deck'
import Loading from '../components/Loading'
import DeckFirst from '../components/DeckFirst'

class DecksList extends React.Component {
  handleRemove = ({item}) => {
    Vibration.vibrate(100)
    Alert.alert(
      'Remove this deck?',
      `${item.title}`,
      [
        {text: 'Nope', onPress: () => {}},
        {text: 'Yep', onPress: () => this.removeDeck({key: item.key})}
      ],
      { cancelable: false }
    )
  }
  removeDeck = ({key}) => {
    decks.remove({key})
      .then((decks) => {
        this.props.screenProps.loadDecks()
      })
  }
  renderList = () => {
    return (this.props.screenProps.decks || []).length ? (
      <FlatList
        data={this.props.screenProps.decks}
        renderItem={({item}) => (
          <Deck
            questions={item.questions}
            item={item}
            onLongPress={() => this.handleRemove({item})}
            onPress={() => this.props.navigation.navigate('Deck', {item})}>
            {item.title}
          </Deck>
        )}
      />
    ) : (
      <DeckFirst />
    );
  }
  renderLoading = () => <Loading />
  render() {
    return !this.props.screenProps.fetchedDecks
      && this.renderLoading()
      || this.renderList()
  }
}

export default DecksList
