/**
 *
 * @param {Object} params
 * @returns
 */
export const GetTable = (params = {}) => {
    return new Promise(resolve => {
        let _page = params.page || 1
        let _size = params.pageSize || 10
        setTimeout(() => {
            let _list = []
            for (let index = (_page-1)*_size; index < _page*_size; index++) {
                _list.push({
                    id: index + 1,
                    name: 'LiWei - ' + (index + 1),
                    age: index + 1,
                })
            }
            if (params.sort.age === 'descending') _list = _list.sort((a, b) => b.age - a.age)
            resolve({
                data: _list,
                total: 200,
                msg: '查询成功',
                level: 0,
            })
        }, 500)
    })
}
