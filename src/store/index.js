import Vue from 'vue'
import Vuex from 'vuex'

import '@babel/polyfill'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import config from '../config'
import wines from './wines'

firebase.initializeApp(config)

Vue.use(Vuex)
  const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    wines
  }
})
