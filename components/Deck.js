import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../services/theme'

const Name = styled.Text`
  color: ${colors.primary};
  font-size: 25;
  padding-left: 20;
`

const Quantity = styled.Text`
  color: ${colors.gray};
  font-size: 17;
  padding-left: 20;
`

const Wrapper = styled.View`
  border-color: #ccc;
  border-width: 1;
  border-top-width: 0;
  padding-top: 25;
  padding-bottom:  25;
  background: #fff;

  shadow-color: #ccc;
  shadow-opacity: 0.6;
  shadow-radius: 2;
  elevation: 1;

  margin-top: 10;
  margin-left: 10;
  margin-right: 10;
`

const Deck = props => (
  <TouchableOpacity
    {...props}>
    <Wrapper>
      <Name>{props.children}</Name>
      <Quantity>Cards quantity ({props.questions.length}) </Quantity>
    </Wrapper>
  </TouchableOpacity>
)

export default Deck;
