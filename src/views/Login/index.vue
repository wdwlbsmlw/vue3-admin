<template>
    <div class="login" v-loading="loginRs.loading">
        <h2>登录</h2>
        <el-form ref="formRef" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const {ctx} = getCurrentInstance()
        const store = useStore()
        const router = useRouter()

        const PostLogin = (params) => store.dispatch('PostLogin', params)

        const formRef = ref()

        // Login Form Data
        const form = reactive({ username: '', password: '' })
        const rules = {
            username: { required: true, message: '请输入用户名' },
            password: { required: true, message: '请输入密码' }
        }

        // Login
        const loginRs = reactive({ loading: false, data: {}, err: null })
        const onLogin = async () => {
            formRef.value.validate(async valid => {
                if (!valid) return
                loginRs.loading = true
                try {
                    loginRs.data = await PostLogin(form)
                    if (loginRs.data.data.token) {
                        ctx.$notify.success('登录成功')
                        router.push({ name: 'home' })
                    }
                    loginRs.loading = false
                } catch (e) {
                    loginRs.loading = false
                    loginRs.err = e
                    console.log(e)
                }
            })
        }

        return {
            form,
            formRef,
            rules,
            onLogin,
            loginRs
        }
    },
})
</script>

<style lang="scss">
.login {
    max-width: 500px;
    margin: 0 auto;

    h2 {
        text-align: center;
    }
}
</style>
