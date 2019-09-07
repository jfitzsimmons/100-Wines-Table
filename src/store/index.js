import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import config from '../config'

import wines from './wines'

Firebase.initializeApp(config)

Vue.use(Vuex)
  const state = {
  db: Firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    wines
  }
})
