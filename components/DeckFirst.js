import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../services/theme'


const DeckFirstText = styled.Text`
  color: ${colors.primary};
  font-size: 21;
  text-align: center;
`

const DeckFirstWrapper = styled.View`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;

  flex: 1;
  justify-content: center;
  align-items: center;

  shadow-color: #ccc;
  shadow-opacity: 0.6;
  shadow-radius: 2;
  elevation: 1;
`

const DeckFirst = props => (
  <DeckFirstWrapper>
    <DeckFirstText>Create your first deck</DeckFirstText>
  </DeckFirstWrapper>
)

export default DeckFirst
