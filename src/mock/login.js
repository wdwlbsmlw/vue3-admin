/**
 *
 * @param {Object} params
 * @returns
 */
export const PostLogin = (params = {}) => {
    return new Promise((resolve, reject) => {
        if (!params.username || !params.password) reject(new Error('用户名密码不正确'))
        setTimeout(() => {
            resolve({
                data: {
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlWnE3YXNZY3dzSmhuc2sxRHF4ZVRQc0lwMTNmUXJBMjNOTExCbTUvL0pnPSIsImV4cCI6MTYyMTUyMDIyOH0.YaKXKdQMv-x4_BbkCi4h-r0SWVL5oSy7txZJ9-3yJjU',
                    user: {
                        userId: '1617332362000000001',
                        name: params.username,
                        fullName: params.username,
                        nickName: params.username,
                        departmentId: '114',
                        occupation: 1,
                        email: '',
                        mobile: '',
                        gender: 1,
                        status: 1,
                        lastLoginTime: 1621498628202,
                        description: '',
                        updateTime: 1621498628202,
                        createTime: 1617332362673,
                    },
                },
                msg: '登录成功',
                level: 0,
            })
        }, 500)
    })
}
