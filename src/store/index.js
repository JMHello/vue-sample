import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';

import {
    toCamel
} from '../extend/util';

const {
    state,
    getters,
    mutations,
    actions
} = global;

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

/**
 * 自动注册模块
 */
function registerModule(rFn) {
    rFn.keys().map((item) => {
        const moduleName = toCamel(item.replace('\.\/', '').replace('\.js', ''));
        store.registerModule(moduleName, rFn(item).default);
    })
};

registerModule(require.context('./modules', false, /\.js$/));

export default store;