import { reactive, getCurrentInstance } from 'vue'

/**
 * 通用表格查询
 * @param {Function} api 
 * @param {Object} options 配置项（可扩展）
 * options.query 默认参数
 * options.customParamsFilter 自定义参数过滤器
 * @returns Reactive
 */
const useTableList = (api, options = {}) => {
    const { ctx } = getCurrentInstance()
    const data = reactive({
        loading: false,
        page: 1,
        pageSize: 10,
        total: 0,
        list: [],
        sort: {}
    })

    const search = reactive({})

    // 查询数据
    const getList = () => {
        data.loading = true
        let _params = generatorParams()
        if (ctx.$utils.hasKey(options, 'customParamsFilter')) _params = options.customParamsFilter(_params)
        console.log(_params)
        api(_params)
            .then(res => {
                data.list = res.data
                data.total = res.total || res.data.length
                data.loading = false
            })
            .catch(e => {
                console.log(e)
                data.list = []
                data.loading = false
            })
    }

    // 生成查询参数
    const generatorParams = () => {
        let _query = ctx.$utils.hasKey(options, 'query') ? options.query : {}
        const _sort = {}
        if (Object.keys(data.sort).length > 0) {
            Object.keys(data.sort).forEach(key => {
                _sort[key] = data.sort[key]
            })
        }
        const _params = {
            page: data.page,
            pageSize: data.pageSize,
            query: {
                ..._query,
                ...search
            },
            sort: _sort
        }
        return _params
    }
    
    // CurrentPage Change Event
    const handlePageChange = val => {
        console.log('page change: ', val)
        data.page = val
        getList()
    }

    // PageSize Change Event
    const handleSizeChange = val => {
        console.log('size change', val)
        data.pageSize = val
        if (data.page > 1) data.page = 1
        getList()
    }

    // Sort Change Event
    // ElementPlus have a bug.
    const handleSortChange = (row) => {
        if (row.prop) data.sort[row.prop] = row.order
        else data.sort = {}
        getList()
    }

    // Search Event
    const handleSearch = () => {
        if (data.page > 1) data.page = 1
        getList()
    }

    getList()

    return {
        data,
        search,
        tableEvent: {
            handleSearch,
            handlePageChange,
            handleSizeChange,
            handleSortChange
        }
    }
}

export default useTableList
