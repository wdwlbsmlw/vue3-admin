<template>
    <div>
        <form-create ref="fc" v-model="form" :options="options" @submit="onSubmit"></form-create>

        <el-button @click="test">test</el-button>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const fc = ref(null)
        const form = reactive({})
        const options = {
            form: {
                labelPosition: 'right', // right|left|top
                labelWidth: '120px', // Number unit.px
                size: 'medium', // large|medium|small|mini
            },
            row: {
                gutter: 20, // Number unit.px
                type: 'default', // flex|default
                justify: 'start', // start|end|center|space-around|space-between
                align: 'top', // top/middle/bottom
                tag: 'div', // Tag default.div
            },
            ui: [
                {
                    type: 'row',
                    props: {
                        gutter: 10,
                        type: 'default'
                    },
                    children: [
                        { 
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                            },
                            field: {
                                dataType: 'String',
                                key: 'name',
                                type: 'input',
                                title: '姓名',
                                props: {
                                    type: 'text'
                                },
                                on: {
                                    change: (val) => {
                                        console.log('custom change', val)
                                    }
                                },
                                validate: [
                                    { required: true, message: '请输入姓名', trigger: 'blur' }
                                ]
                            }
                        },
                        { 
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12
                            },
                            field: {
                                dataType: 'String',
                                key: 'password',
                                type: 'input',
                                title: '密码',
                                props: {
                                    type: 'password',
                                    placeholder: '请输入密码'
                                },
                                validate: [
                                    { required: true, message: '请输入密码', trigger: 'blur' }
                                ]
                            }
                        }
                    ]
                },
                {
                    type: 'row',
                    props: {
                        gutter: 10,
                        type: 'default'
                    },
                    children: [
                        { 
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                                offset: 0,
                                push: 0,
                                pull: 0,
                                xs: undefined,
                                sm: undefined,
                                md: undefined,
                                lg: undefined,
                                xl: undefined,
                                tag: 'div'
                            },
                            field: {
                                dataType: 'Number',
                                key: 'age',
                                type: 'input',
                                title: 'Number',
                                props: {
                                    type: 'number'
                                },
                                // validate: [
                                //     { required: true, type: 'number', message: '请输入Number', trigger: 'change' },
                                //     { type: 'number', min: 10, max: 100, message: '请输入正确的Number', trigger: 'change' },
                                // ]
                            }
                        }
                    ]
                }
            ]
        }
        
        const onSubmit = (formData) => {
            console.log(formData)
        }

        const test = () => {
            console.log(fc.value.form.age = 20)
        }
        return {
            fc,
            form,
            options,
            onSubmit,
            test
        }
    }
})
</script>
