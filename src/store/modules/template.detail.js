export const mutationTypes = {
    M_SET_NAME: 'M_SET_NAME'
};

export const actionTypes = {
    A_GET_INFO: 'A_GET_INFO'
};

const initialState = {
    name: '',
    age: -1,
    sex: 0,
    info: {
        time: +new Date()
    }
};

const getters = {
    time(state) {
        return state.info.time;
    }
};

const mutations = {
    [mutationTypes.M_SET_NAME](state, {
        name
    } = {}) {
        state.name = name;
    }
};

const actions = {
    [actionTypes.A_GET_INFO]({
        commit,
        state,
        getters,
        rootState,
        dispatch,
        rootGetters
    }, {} = {}) {
        commit(mutationTypes.M_SET_NAME, {
            name: 'hello, jmazm'
        })
    }
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions
}