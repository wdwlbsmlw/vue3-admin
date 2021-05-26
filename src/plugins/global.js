import * as UTILS from '../utils/utils'

export default {
    install: (app) => {
        app.config.globalProperties.$utils = UTILS
    }
}