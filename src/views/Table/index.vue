<template>
    <div v-loading="data.loading">
        <el-table :data="data.list" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="age" label="年龄"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import useTableList from '@/hooks/useTableList'
import { GetTable } from '@/mock/table'

export default defineComponent({
    name: 'TableOne',

    setup() {
        const {data} = useTableList(GetTable)
        return {
            data
        }
    },
})
</script>
