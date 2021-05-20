<template>
    <div class="header">
        Header {{ title }}
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Header',

    setup() {
        const title = ref('w shi biaoti')
        
        return {
            title
        }   
    }
}
</script>

<style lang="scss">
.header {
    background-color: rgba($color: $--color-primary, $alpha: 0.3);
}
</style>
