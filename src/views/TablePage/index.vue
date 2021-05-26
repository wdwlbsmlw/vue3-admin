<template>
    <div v-loading="data.loading">
        <el-form inline :model="search" @submit.prevent>
            <el-form-item label="姓名">
                <el-input v-model="search.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="tableEvent.handleSearch">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="data.list" style="width: 100%" @sort-change="tableEvent.handleSortChange">
            <el-table-column prop="id" label="ID" align="center" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" min-width="200"> </el-table-column>
            <el-table-column prop="age" label="年龄" width="200" align="center" sortable="custom"> </el-table-column>
            <el-table-column label="action"> </el-table-column>
        </el-table>
        <el-pagination
            @size-change="tableEvent.handleSizeChange"
            @current-change="tableEvent.handlePageChange"
            :current-page="data.page"
            :page-sizes="[10, 20, 50]"
            :page-size="data.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
        >
        </el-pagination>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import useTableList from '@/hooks/useTableList'
import { GetTable } from '@/mock/table'

export default defineComponent({
    name: 'TableOne',

    setup() {
        const customParamsFilter = (params) => {
            params.test = 'test'
            return params
        }
        const { data, tableEvent, search } = useTableList(GetTable, {customParamsFilter})

        return {
            data,
            tableEvent,
            search
        }
    },
})
</script>
