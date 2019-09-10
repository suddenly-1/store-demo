import storage from 'assets/js/storage'
import { SEARCH_HISTORY_KEYWORD_KEY } from 'pages/search/config'

export const searchStorage = {
  methods: {
    $_search_historyStorage (keyword) {
      let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY, [])
      if (keywords.length !== 0) {
        keywords = keywords.filter(value => value !== keyword)
      }
      keywords.unshift(keyword)
      storage.set(SEARCH_HISTORY_KEYWORD_KEY, keywords)
    }
  }
}
