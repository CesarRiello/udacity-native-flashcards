import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../services/theme'

const DefaultInput = styled.TextInput`
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

export default DefaultInput
