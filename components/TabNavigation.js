import { TabNavigator, TabBarBottom } from 'react-navigation'
import DecksList from '../containers/DecksList'
import DeckCreate from '../containers/DeckCreate'
import { colors } from '../services/theme'

const TabNavigation = TabNavigator({
  Decks: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'List of decks',
    }
  },
  DeckCreate: {
    screen: DeckCreate,
    navigationOptions: {
      tabBarLabel: 'Novo Deck',
    }
  }
},
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: colors.light,
      activeBackgroundColor: colors.primary
    }
  }
)

export default TabNavigation
