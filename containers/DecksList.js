import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
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

class DecksList extends React.Component {
  render() {
    return (
      <FlatList
        data={API.getDecks()}
        renderItem={({item}) => <Deck questions={item.questions}>{item.title}</Deck>}
      />
    );
  }
}

export default DecksList
