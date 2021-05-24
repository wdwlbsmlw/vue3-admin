import { reactive, ref } from 'vue'

/**
 * 通用表格查询
 * @param {Function} api 
 * @param {Object} params 
 * @returns Reactive
 */
const useTableList = (api, params = {}) => {
    const loading = ref(false)
    const error = ref()
    const data = reactive({
        page: 1,
        pageSize: 20,
        total: 0,
        list: [],
    })

    loading.value = true
    api(params)
        .then(res => {
            data.list = res.data
            data.total = res.total || res.data.length
            loading.value = false
        })
        .catch(e => {
            error.value = e
            data.list = []
            loading.value = false
        })
    return {
        data,
        loading,
        error,
    }
}

export default useTableList
