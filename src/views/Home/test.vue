<script>
import { defineComponent, reactive, h } from 'vue'
import { components } from '@/plugins/element-plus'

export default defineComponent({
    setup() {
        const form = reactive({
            name: '',
            password: '',
        })
        return {
            form,
        }
    },

    render() {
        console.log(this.form)
        return h('div', {}, [
            h(
                components.ElForm,
                {
                    model: this.form,
                },
                () => {
                    return [
                        h(
                            components.ElFormItem,
                            {
                                label: '姓名',
                            },
                            () => {
                                return h(components.ElInput, {
                                    modelValue: this.form['name'],
                                    onInput: val => {
                                        this.form['name'] = val
                                    },
                                })
                            }
                        ),
                        h(
                            components.ElFormItem,
                            {
                                label: '密码',
                            },
                            () => {
                                return h(components.ElInput, {
                                    modelValue: this.form['password'],
                                    onInput: val => {
                                        this.form['password'] = val
                                    },
                                })
                            }
                        ),
                    ]
                }
            ),
            h(components.ElButton, {
                onClick: () => {
                    console.log(this.form)
                }
            }, 'test'),
        ])
    },
})
</script>
