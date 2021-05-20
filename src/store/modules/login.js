import { PostLogin } from '@/mock/login'
import * as types from '../mutation-types'

// State
const state = {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user') || '{}')
}

// Getters
const getters = {}
for (const key in state) {
    getters[key] = () => state[key]
}

// Actions
const actions = {
    /**
     * 登录
     * @param {*} param0 
     * @param {*} data 
     */
    PostLogin({ commit }, data) {
        return new Promise((resolve, reject) => {
            PostLogin(data).then(res => {
                commit('TOKEN', res.data.token)
                commit('USER', res.data.user)
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    /**
     * 登出
     */
    GetLogout({ commit }) {
        commit('TOKEN', '')
        commit('USER', {})
    }
}

// Mutations
const mutations = {
    [types.TOKEN](state, data) {
        localStorage.setItem('token', data)
        state.token = data
    },
    [types.USER](state, data) {
        localStorage.setItem('user', JSON.stringify(data))
        state.user = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
