import { StackNavigator } from 'react-navigation'
import Questions from '../containers/Questions'
import CardView from '../containers/CardView'
import CardCreate from '../containers/CardCreate'
import Restart from '../containers/Restart'
import TabNavigation from '../components/TabNavigation'

const RootNavigator = StackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
      title: 'Flash Cards'
    }
  },
  Deck: {
    screen: Questions,
    navigationOptions: {
      title: 'Deck'
    }
  },
  CardCreate: {
    screen: CardCreate,
    navigationOptions: {
      title: 'New card'
    }
  },
  Card: {
    screen: CardView,
    navigationOptions: {
      title: 'Card question'
    }
  },
  Restart: {
    screen: Restart,
    navigationOptions: {
      title: 'End'
    }
  }
})

export default RootNavigator
