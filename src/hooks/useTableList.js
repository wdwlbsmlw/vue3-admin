import { reactive, ref } from 'vue'

const useTableList = async (api, params = {}) => {
    const loading = ref(false)
    const error = ref()
    const data = reactive({ 
        list: []
    })

    try {
        loading.value = true
        data.list = await api(params)

        loading.value = false
    } catch (e) {
        error.value = e
        data.list = []
        loading.value = false
    }
    return {
        data,
        loading,
        error
    }
}

export default useTableList