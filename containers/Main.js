import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Constants } from 'expo'
import styled from 'styled-components/native'

import { decks, notifications } from '../services/storage'
import { colors } from '../services/theme'
import RootNavigator from '../routes'

const Wrapper = styled.View`
  flex: 1;
  background: ${colors.light};
`

const Header = styled.View`
  background: ${colors.light};
  height: ${Constants.statusBarHeight}
`

const Body = styled.View`
  flex: 1;
  background: ${colors.silver};
`

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      decks: [],
      loadingDecks: false,
      fetchedDecks: false
    }
  }

  loadDecks = () => {
    this.setState({ loadingDecks: true })
    return decks.list()
      .then(decks => {
        this.setState({
          decks: JSON.parse(decks),
          fetchedDecks: true,
          loadingDecks: false
        })
    })
  }

  componentDidMount() {
    this.loadDecks()
    notifications.add()
  }

  deckAdd = ({navigation, item}) => {
    this.loadDecks()
      .then(() => {
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
            NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
          ]
        })
        navigation.dispatch(resetAction)
    })
  }

  render() {
    const screenProps = {
      ...this.state,
      loadDecks: this.loadDecks,
      deckAdd: this.deckAdd,
    }
    return (
      <Wrapper >
        <Header >
          <StatusBar />
        </Header>
        <Body >
          <RootNavigator
            screenProps={screenProps} />
        </Body>
      </Wrapper>
    );
  }
}

export default Main
