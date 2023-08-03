export const state = () => ({
    breadcrumbs: null,
})

export const getters = {
    list: (state) => state.breadcrumbs,
}

export const mutations = {
    GET_BREADCRUMBS(state, payload) {
        console.log(payload)
        state.breadcrumbs = payload
    },
}

export const actions = {
    async getBreadcrumbs({commit}, data) {
        commit('GET_BREADCRUMBS', data)
    },
}
