import React from 'react'
import FlipCard from 'react-native-flip-card'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import styled from 'styled-components/native'

import TouchBtn from '../components/TouchBtn'
import { colors } from '../services/theme'

const Title = styled.Text`
  color: ${colors.secondary};
  font-size: 24;
  text-align: center;
`

const Count = styled.Text`
  color: #555;
  font-size: 18;
  text-align: center;
`

const CardFront = styled.View`
  flex: 1;
  width: 300;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`

const CardBack = styled.View`
  flex: 1;
  width: 300;
  background-color: ${colors.white};
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
  justify-content: center;
  align-items: center;
`

const CardText = styled.View`
  flex: 1;
`

const CardWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`

const Steps = styled.View`
  padding-top: 5;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 5;
  justify-content: space-between;
`

const Step = styled.Text`
  color: ${colors.secondary};
  font-size: 20;
`


class CardView extends React.Component {
  state = {
    disableCard: true,
    currentQuestion: 0,
    fliped: false,
    score: 0
  }
  handleFlipEnd = (fliped) => {
    this.setState(() => {
      const disableCard = !fliped
      return {
        fliped,
        disableCard
      }
    })
  }
  nextCard = (answer) => {
    const { navigation } = this.props
    const { item = {} } = navigation.state.params
    this.setState(({currentQuestion, score}) => {
      if(currentQuestion + 1 >= (item.questions || []).length) {
        const resetAction = NavigationActions.reset({
          index: 2,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'}),
            NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
            NavigationActions.navigate({ routeName: 'Restart', params: {item, score: answer ? score + 1 :  score}})
          ]
        })
        this.props.navigation.dispatch(resetAction)
        return false
      }
      return {
        currentQuestion: currentQuestion + 1 < (item.questions || []).length ? currentQuestion + 1 :  currentQuestion,
        disableCard: true,
        fliped: false,
        score: answer ? score + 1 :  score
      }
    })
  }
  render() {
    const { navigation } = this.props
    const { item } = navigation.state.params
    const { disableCard, fliped, currentQuestion, score } = this.state

    return (
      <Wrapper>
        <Steps>
          <Step>{`${currentQuestion + 1}/${(item.questions || {}).length || 0}`}</Step>
        </Steps>
        <CardWrapper>
          <FlipCard
            perspective={1000}
            friction={6}
            flipHorizontal={true}
            flipVertical={false}
            flip={fliped}
            clickable={true}
            onFlipEnd={this.handleFlipEnd}
            syle={{borderWidth: 0}}>
            <CardFront>
              <Title>{item.questions[currentQuestion].question}</Title>
            </CardFront>
            <CardBack>
              <Title>{item.questions[currentQuestion].answer}</Title>
            </CardBack>
          </FlipCard>
        </CardWrapper>
        <View style={{justifyContent: 'center', width: '100%'}}>

          <TouchableOpacity disabled={disableCard} onPress={() => {this.nextCard(true)}}>
            <TouchBtn disabled={disableCard} color={colors.correct}>
              Correct
            </TouchBtn>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={disableCard}
            onPress={() => {this.nextCard(false)}}>
            <TouchBtn disabled={disableCard} color={colors.incorrect}>
              Incorrect
            </TouchBtn>
          </TouchableOpacity>

        </View>

      </Wrapper>
      )
  }
}

export default CardView
