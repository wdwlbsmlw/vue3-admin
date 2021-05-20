/**
 *
 * @param {Object} params
 * @returns
 */
 export const GetTable = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: 1,
                        name: 'LiWei',
                        age: 18
                    },
                    {
                        id: 2,
                        name: 'MaDongDong',
                        age: 18
                    }
                ],
                msg: '登录成功',
                level: 0,
            })
        }, 500)
    })
}
