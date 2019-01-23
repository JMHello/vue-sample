import {
    createNamespacedHelpers
} from 'vuex';

import {
    mutationTypes,
    actionTypes
} from '../../store/modules/template.detail';

// 命名空间的处理
const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = createNamespacedHelpers('templateDetail');

const stateMapper = mapState({
    name(state) {
        return state.name;
    },
    sex(state) {
        return state.sex;
    }
});

const gettersMapper = mapGetters({
    time: 'time'
});

const mutationsMapper = mapMutations({
    setName: mutationTypes.M_SET_NAME
});

const actionsMapper = mapActions({
    getInfo: actionTypes.A_GET_INFO
});

export {
    stateMapper,
    gettersMapper,
    mutationsMapper,
    actionsMapper
}