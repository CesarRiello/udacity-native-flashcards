import { AsyncStorage } from 'react-native'
import uuidv1 from 'uuid/v1'
import {
  Permissions,
  Notifications
} from 'expo'

const FLASHCARDS_KEY = 'FlashCards:cards'
const NOTIFICATION_KEY = 'FlashCards:notifications'

const standartNotification = {
  title: 'don\'t forget to study',
  body: "Use the flashcards to study",
  ios: { sound: true },
  android: {
    priority: 'high',
    sound: true,
    vibrate: true
  }
}

export const decks = {
  list: () => {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
  },
  get: ({key}) => {
    return AsyncStorage.getItem(FLASHCARDS_KEY).then(decks => {
      decks = JSON.parse(decks) || []
      return decks.find(deck => deck.key === key)
    })
  },
  add: ({title}) => {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
      .then(decks => {
        const deckList = JSON.parse(decks) || []
        const deckAdd = {
          title,
          key: uuidv1(),
          questions: []
        }
        const deckAddList = [...deckList, deckAdd]
        AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(deckAddList))
        return deckAdd
      })
  },
  remove: ({key}) => {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
      .then(decks => {
        const deckList = JSON.parse(decks) || []
        const deckAddList = (deckList || [])
          .filter(deck => {
            return deck.key !== key
        })
        AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(deckAddList))
        return deckAddList
      })
  }
}

export const cards = {
  add: ({key, question}) => {
    return AsyncStorage.getItem(FLASHCARDS_KEY).then(decks => {
      const deckList = JSON.parse(decks) || []
      const deckAddList = deckList.map(deck => {
        if(deck.key === key) {
          deck.questions = [...deck.questions, question]
        }
        return deck
      })
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(deckAddList))
    })
  }
}

export const notifications = {
  add: () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)

                Notifications.scheduleLocalNotificationAsync(
                  standartNotification,
                  { time: tomorrow, repeat: 'day' }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  },
  clear: () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
}
