<template>
    <div>
        Home
        <test></test>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import test from './test'

export default defineComponent({
    name: 'Home',

    components: {
        test
    },
    
    setup() {
        return {}
    }
})
</script>
