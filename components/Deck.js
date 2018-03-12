import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'
import * as color from '../utils/color'

const Title = styled.Text`
  color: ${color.primaryBlack};
  font-size: 24;
  text-align: center;
`

const Count = styled.Text`
  color: #555;
  font-size: 18;
  text-align: center;
`

const Wrapper = styled.View`
  border-color: ${color.primaryBlack};
  border-width: 1;
  border-top-width: 0;
  padding-top: 25;
  padding-bottom:  25;
`

const Deck = ({children, questions}) => (
  <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
    <Wrapper>
      <Title>{children}</Title>
      <Count>{questions.length || 0} cards</Count>
    </Wrapper>
  </TouchableNativeFeedback>
);

export default Deck;
