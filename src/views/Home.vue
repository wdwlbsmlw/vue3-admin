<template>
    <div class="home">
        <p>{{ title }}</p>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const title = ref('标题')
        return {
            title
        }
    }
}
</script>
