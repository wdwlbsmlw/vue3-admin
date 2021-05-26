import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

const components = {
    Header,
    Footer,
    Menu
}

export default {
    install: app => {
        for (const key in components) {
            const com = components[key]
            app.component(com.name, com)
        }
    }
}