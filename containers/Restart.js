import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components/native'

import { NavigationActions } from 'react-navigation'
import { colors } from '../services/theme'
import { notifications } from '../services/storage'
import TouchBtn from '../components/TouchBtn'

const Title = styled.Text`
  color: ${colors.secondary};
  font-size: 24;
  text-align: center;
`

const Count = styled.Text`
  color: ${colors.gray};
  font-size: 18;
  text-align: center;
`

const Wrapper = styled.View`
  border-color: ${colors.secondary};
  border-width: 1;
  border-top-width: 0;
  padding-top: 25;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom:  25;
`


class Restart extends Component {
  backToDeck = () => {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }
  restartQuiz = (item) => {
    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
        NavigationActions.navigate({ routeName: 'Card', params: {item}})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  componentDidMount() {
    notifications.clear
      .then(notifications.add)
  }
  render() {
      const { item = {}, score } = this.props.navigation.state.params
      const questionsCount = (item.questions || {}).length || 0
      return (
        <Wrapper>
          <Title>{item.title}</Title>
          <Count>{`You right ${score} of ${questionsCount}`}</Count>
          <View style={{justifyContent: 'center', width: 200, marginTop: 30}}>
            <TouchableOpacity onPress={() => { this.restartQuiz(item) }}>
              <TouchBtn secondary>
                Tray again
              </TouchBtn>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.backToDeck() }}>
              <TouchBtn>Back to your deck</TouchBtn>
            </TouchableOpacity>
          </View>
        </Wrapper>
      )
    }
};

export default Restart;
