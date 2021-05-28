<template>
    <div>
        <form-create ref="fc" v-model="form" :options="options" @submit="onSubmit">
            <template v-slot:up="{form}">
                <div>
                    <el-input v-model="form['up']"></el-input>
                </div>
            </template>
        </form-create>

        <el-button @click="test">test</el-button>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const fc = ref(null)
        const form = reactive({})
        const options = reactive({
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
                        type: 'default',
                    },
                    children: [
                        {
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                                xs: 24,
                                sm: 24,
                                md: 12,
                                lg: 8,
                            },
                            field: {
                                dataType: 'String',
                                key: 'name',
                                type: 'input',
                                title: '姓名',
                                props: {
                                    type: 'text',
                                },
                                on: {
                                    change: val => {
                                        console.log('custom change', val)
                                    },
                                },
                                validate: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                            },
                        },
                        {
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12,
                                xs: 24,
                                sm: 24,
                                md: 12,
                                lg: 8,
                            },
                            field: {
                                dataType: 'String',
                                key: 'password',
                                type: 'input',
                                title: '密码',
                                props: {
                                    type: 'password',
                                    placeholder: '请输入密码',
                                },
                                validate: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                            },
                        },
                    ],
                },
                {
                    type: 'row',
                    props: {
                        gutter: 10,
                        type: 'default',
                    },
                    children: [
                        {
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                            },
                            field: {
                                dataType: 'Number',
                                key: 'age',
                                type: 'input',
                                title: 'Number',
                                props: {
                                    type: 'number',
                                },
                                validate: [
                                    { required: true, type: 'number', message: '请输入Number', trigger: 'change' },
                                    { type: 'number', min: 10, max: 100, message: '请输入正确的Number', trigger: 'change' },
                                ],
                            },
                        },
                    ],
                },
                {
                    type: 'row',
                    props: {
                        gutter: 10,
                        type: 'default',
                    },
                    children: [
                        {
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                            },
                            field: {
                                dataType: 'Array',
                                key: 'type',
                                type: 'select',
                                title: '类型',
                                props: {
                                    multiple: true,
                                    size: 'mini',
                                },
                                data: [
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                ],
                            },
                        },
                        {
                            type: 'col',
                            hidden: false,
                            props: {
                                span: 12, // undefined
                            },
                            field: {
                                dataType: 'String',
                                key: 'up',
                                type: 'slot',
                                title: 'UP'
                            },
                        },
                    ],
                },
            ],
        })

        const onSubmit = formData => {
            console.log(formData)
        }

        const test = () => {
            fc.value.setUIData('type', 'title', '类型2')
            fc.value.setUIData('type', 'data', [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
            ])

            setTimeout(() => {
                fc.value.setData('type', ['3'])
                fc.value.setData('age', 30)
                fc.value.setData('name', 'liwei')
            }, 2000)
        }
        return {
            fc,
            form,
            options,
            onSubmit,
            test,
        }
    },
})
</script>
