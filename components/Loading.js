import React from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { colors } from '../services/theme'

const LoadingWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  marginTop: 70;
`

const nativeStyles = StyleSheet.create ({
  activityIndicator: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80
  }
})

const Loading = () => (
  <LoadingWrap>
    <ActivityIndicator
      color = {colors.primary}
      size = "large"
      style = {nativeStyles.activityIndicator}/>
  </LoadingWrap>
)

export default Loading
