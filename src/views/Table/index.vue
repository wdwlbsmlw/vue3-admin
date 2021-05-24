<template>
    <div v-loading="loading">
        <el-table :data="data" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
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
        const { data, loading, error } = useTableList(GetTable)
        return {
            data,
            loading,
            error,
        }
    },
})
</script>
