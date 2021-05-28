import {h} from 'vue'
import { components } from '@/plugins/element-plus'

/**
 * 生成默认值
 * @param { String } type
 * @param { Any } defaultData
 * @returns
 */
export const getDefaultData = (type, defaultData) => {
    if (defaultData !== undefined) return defaultData
    let _default = ''
    switch (type) {
        case 'String':
            _default = ''
            break
        case 'Number':
            _default = 0
            break
        case 'Array':
            _default = []
            break
        default:
            _default = ''
            break
    }
    return _default
}

/**
 * 生成默认值
 * @param { String } type
 * @param { Any } defaultData
 * @returns
 */
export const getElementTag = type => {
    if (!type) return null
    let _tag = 'ElInput'
    switch (type) {
        case 'radio':
            _tag = 'ElRadio'
            break
        case 'checkbox':
            _tag = 'ElCheckbox'
            break
        case 'input':
            _tag = 'ElInput'
            break
        case 'select':
            _tag = 'ElSelect'
            break
        default:
            _tag = 'ElInput'
            break
    }
    return _tag
}

/**
 * 生成Form
 * @param {Array} ui
 */
export const generaterFormAndRules = ui => {
    try {
        const _form = {},
            _rules = {}
        ui.map(row =>
            row.children.map(col => {
                const { key, dataType, defaultData } = col.field
                _form[key] = getDefaultData(dataType, defaultData)
                if (Object.prototype.hasOwnProperty.call(col.field, 'validate')) _rules[key] = col.field.validate || []
            })
        )
        return {
            form: _form,
            rules: _rules,
        }
    } catch (e) {
        console.log(e)
    }
}

/**
 * 生成options
 * @param {Array} list 
 */
export const generaterOptions = (list = []) => {
    return list.map(item => {
        return h(components.ElOption, {
            key: item.value,
            value: item.value,
            label: item.label,
            disabled: Object.prototype.hasOwnProperty.call(item, 'disabled') ? item.disabled : false
        })
    })
}