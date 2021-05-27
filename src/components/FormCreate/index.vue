<script>
import { defineComponent, h, reactive, ref } from 'vue'
import { generaterFormAndRules, getElementTag } from './tools'
import {components} from '@/plugins/element-plus'

export default defineComponent({
    name: 'FormCreate',

    props: {
        modelValue: {
            type: Object,
            default: () => ({}),
        },
        options: {
            type: Object,
            required: true,
        }
    },

    emits: ['update:modelValue'],

    setup(props) {
        console.time('genderate: ')
        const data = generaterFormAndRules(props.options.ui)
        console.timeEnd('genderate: ')
        const form = reactive(data.form)
        const rules = reactive(data.rules)
        const value = ref()
        return {
            form,
            rules,
            ui: props.options.ui,
            value
        }
    },

    render() {
        console.log(this.form)
        let _childrens = []
        this.ui.forEach(row => {
            let _cols = row.children.map(col => {
                let _tagname = getElementTag(col.type)
                if (!_tagname) return
                let _field = h(components.ElFormItem, {
                    label: col.field.title || '',
                    prop: col.field.key || '',
                    style: {
                        display: col.hidden ? 'none' : 'block'
                    }
                }, () => h(components[_tagname], {
                    modelValue: this.value,
                    ...col.field.props,
                    onInput: val => {
                        console.log('input,', val)
                        // this.value = val
                        this.$emit('update:modelValue', val)
                    },
                    'onUpdate:modelValue': val => {
                        // this.form[col.field.key] = val
                        // console.log('update', val)
                        this.$emit('update:modelValue', val)
                    }
                }))
                return h(components.ElCol, col.props, () => _field)
            })
            _childrens.push(h(components.ElRow, row.props, () => _cols))
        })

        _childrens.push(h(components.ElFormItem, {}, () => {
            return h(components.ElButton, {
                type: 'primary',
                onClick: () => {
                    this.$refs.form.validate(valid => {
                        if (!valid) return
                        this.$notify.info('提交成功')
                    })
                }
            }, () => '提交')
        }))

        return h(components.ElForm, {
            ref: 'form',
            model: this.form,
            rules: this.rules,
            ...this.options.form
        }, () => _childrens)
    },
})
</script>
