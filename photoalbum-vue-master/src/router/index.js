import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Album from 'components/Album'
import Photo from 'components/Photo'
import User from 'components/User'
import Info from 'components/Info'
import Add from 'components/Addimage'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/Info',
            name: 'Info',
            component: Info
        },
        {
            path: '/Add',
            name: 'Add',
            component: Add
        },
        {
            path: '/album/:id',
            name: 'Album',
            component: Album
        },
        {
            path: '/photo/:id',
            name: 'Photo',
            component: Photo
        },

        {
            path: '/user/:id',
            name: 'User',
            component: User
        }
    ]
})