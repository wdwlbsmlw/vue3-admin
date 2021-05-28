<script>
import { getCurrentInstance, defineComponent, h, reactive, ref } from 'vue'
import { generaterFormAndRules, getElementTag, generaterOptions, generaterRadioGroup } from './tools'
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
        const {ctx} = getCurrentInstance()
        const formRef = ref(null)
        const data = generaterFormAndRules(props.options.ui)
        const form = reactive(data.form)
        const rules = reactive(data.rules)

        const generaterUI = () => {
            console.time('genderaterUI: ')
            let _list = []
            props.options.ui.forEach(row => {
                let _cols = row.children.map(col => {
                    let _tagname = getElementTag(col.field.type)
                    if (!_tagname) return
                    let _field = h(components.ElFormItem, {
                        label: col.field.title || '',
                        prop: col.field.key || '',
                        style: {
                            display: col.hidden ? 'none' : 'block'
                        }
                    }, () => col.field.type === 'slot' ? h(components.ElCol, col.props, () => {
                            return ctx.$slots[col.field.key]({value: form[col.field.key], form, key: col.field.key})
                        }) : h(components[_tagname], {
                        modelValue: form[col.field.key],
                        ...col.field.props,
                        onInput: val => {
                            if (_tagname !== 'ElInput') return
                            let _val = col.field.dataType === 'Number' ? Number(val) : val
                            form[col.field.key] = _val
                            // 触发自定义事件
                            if (ctx.$utils.hasKey(col.field, 'on') && ctx.$utils.hasKey(col.field.on, 'change')) col.field.on.change(_val)
                        },
                        onChange: val => {
                            if (_tagname === 'ElInput') return
                            form[col.field.key] = val
                        }
                    }, () => {
                        if (_tagname === 'ElSelect') return generaterOptions(col.field.data)
                        else if (_tagname === 'ElRadio') return col.field.title
                        else if (_tagname === 'ElRadioGroup') {
                            let _type = col.field.type.includes('button') ? 'button' : 'radio'
                            return generaterRadioGroup(col.field.data, _type)
                        }
                        return null
                    }))
                    return h(components.ElCol, col.props, () => _field)
                })
                _list.push(h(components.ElRow, row.props, () => _cols))
            })
            console.timeEnd('genderaterUI: ')
            return _list
        }

        // 修改UI配置
        const setUIData = (key, field, value) => {
            console.log(key, field, value)
            props.options.ui.forEach(row => {
                row.children.forEach(col => {
                    if (col.field.key === key) col.field[field] = value
                })
            })
        }

        // 修改FormData
        const setData = (key, val) => {
            if (!ctx.$utils.hasKey(form, key)) return
            form[key] = val
        }

        return {
            formRef,
            form,
            rules,
            ui: props.options.ui,
            generaterUI,
            setUIData,
            setData
        }
    },

    render() {
        let _childrens = this.generaterUI()

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
