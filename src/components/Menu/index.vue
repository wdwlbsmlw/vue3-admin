<template>
    <el-menu router>
        <el-menu-item index="home" :route="{ name: 'home' }">
            <i class="el-icon-menu"></i>
            <template #title>首页</template>
        </el-menu-item>
        <el-submenu index="table">
            <template #title>
                <i class="el-icon-location"></i>
                <span>表格</span>
            </template>
            <el-menu-item index="table.one" :route="{ name: 'table.one' }">表格一</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style lang="scss">
.el-menu {
    height: 100%;
}
</style>