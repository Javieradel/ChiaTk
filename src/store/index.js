
import { createStore } from 'vuex'
import main from './modules/main'
const store = createStore({
    modules: {
        main
    }
}) 
function useStore() {
    return store
}
export default store