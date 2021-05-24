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

export default defineComponent({
    name: 'Layout',
    
    setup() {
        return {}   
    }
})
</script>
