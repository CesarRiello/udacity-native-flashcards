import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'

const TabsNavigation = TabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks List',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Create New Deck',
    }
  }
},{
  animationEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    activeBackgroundColor: `#f00`,
    activeTintColor: '#fff',
    style: { backgroundColor: '#0f0'}
  }
})


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: '#eeeeee', height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={'#cceeee'} />
        </View>
        <TabsNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee'
  },
});
