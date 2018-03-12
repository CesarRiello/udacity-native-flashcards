import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../services/theme'

export const BtnText = styled.Text`
  color: ${props => props.outline ? colors.primary : colors.white};
  text-align: center;
  font-size: 18;
`

export const BtnWrap = styled.View`
  margin-top: 5;
  margin-right: 20;
  margin-bottom: 5;
  margin-left: 20;

  padding-top: 15;
  padding-bottom: 15;
  padding-right: 20;
  padding-left: 20;

  background-color: ${props => props.outline ? colors.white : colors.primary};
  border-color:  ${colors.primary};
  border-width: 2;

  border-radius: 5;

  opacity: ${props => props.disabled ? .5 : 1 };
`

const TouchBtn = props => (
  <BtnWrap {...props}>
    <BtnText {...props}>{props.children}</BtnText>
  </BtnWrap>
)

export default TouchBtn
