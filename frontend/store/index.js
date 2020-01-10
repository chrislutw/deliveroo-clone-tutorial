import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = (parsed.user && JSON.parse(parsed.user)) || null
      } catch (e) {
        user = null
      }
    }

    commit('auth/setUser', user)
  }
}
