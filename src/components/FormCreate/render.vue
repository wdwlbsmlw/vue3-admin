<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'render',

    props: {
        tag: {
            type: String,
            default: 'ElInput'
        },
        prop: {
            type: Object,
            default: () => ({})
        }
    },

    render() {
        return h(this.tag, this.prop, this.$slots.default())
    }
})
</script>
