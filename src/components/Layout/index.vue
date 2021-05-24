<template>
    <el-container>
        <el-aside width="200px">
            <Menu></Menu>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'Layout',
    
    setup() {
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        if (!store.state.Login.token || !store.state.Login.user) router.push('/login')
        else if (route.name === 'layout') router.push('/home')
        return {}
    }
})
</script>
