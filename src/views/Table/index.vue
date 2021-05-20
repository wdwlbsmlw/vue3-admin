<template>
    <div v-loading="loading">{{ data }}</div>
</template>

<script>
import { defineComponent } from 'vue'
import useTableList from '@/hooks/useTableList'
import { GetTable } from '@/mock/table'

export default defineComponent({
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
