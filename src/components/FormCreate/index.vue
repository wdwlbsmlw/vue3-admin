<script>
import { defineComponent, h, reactive, ref } from 'vue'
import { generaterFormAndRules, getElementTag, generaterOptions } from './tools'
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

    setup(props) {
        const formRef = ref(null)
        console.time('genderate: ')
        const data = generaterFormAndRules(props.options.ui)
        console.timeEnd('genderate: ')
        const form = reactive(data.form)
        const rules = reactive(data.rules)

        const forceUpdate = () => {
            console.log('update')
            formRef.value.$forceUpdate()
        }

        return {
            formRef,
            form,
            rules,
            ui: props.options.ui,
            forceUpdate
        }
    },

    render() {
        console.log(this.form)
        let _childrens = []
        this.ui.forEach(row => {
            let _cols = row.children.map(col => {
                let _tagname = getElementTag(col.field.type)
                if (!_tagname) return
                let _child = []
                if (_tagname === 'ElSelect') _child = generaterOptions(col.field.data)
                let _field = h(components.ElFormItem, {
                    label: col.field.title || '',
                    prop: col.field.key || '',
                    style: {
                        display: col.hidden ? 'none' : 'block'
                    }
                }, () => h(components[_tagname], {
                    modelValue: this.form[col.field.key],
                    ...col.field.props,
                    onInput: val => {
                        let _val = col.field.dataType === 'Number' ? Number(val) : val
                        this.form[col.field.key] = _val
                        // 触发自定义事件
                        if (this.$utils.hasKey(col.field, 'on') && this.$utils.hasKey(col.field.on, 'change')) col.field.on.change(_val)
                    },
                    onChange: val => {
                        if (_tagname === 'ElInput') return
                        this.form[col.field.key] = val
                    }
                }, () => _child))
                return h(components.ElCol, col.props, () => _field)
            })
            _childrens.push(h(components.ElRow, row.props, () => _cols))
        })

        _childrens.push(h(components.ElFormItem, {}, () => {
            return [
                h(components.ElButton, {
                    type: 'primary',
                    onClick: () => {
                        this.$refs.formRef.validate(valid => {
                            if (!valid) return
                            this.$emit('submit', this.form)
                        })
                    }
                }, () => '提交'),
                h(components.ElButton, {
                    type: 'default',
                    onClick: () => {
                        this.$refs.formRef.resetFields()
                        this.$emit('reset')
                    }
                }, () => '重置')
            ]
        }))

        return h(components.ElForm, {
            ref: 'formRef',
            model: this.form,
            rules: this.rules,
            ...this.options.form
        }, () => _childrens)
    },
})
</script>
