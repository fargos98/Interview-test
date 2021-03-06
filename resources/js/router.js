import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import products from './components/ProductsComponent';
import product from './components/productComponents/ProductComponent';

import cart from './components/cartComponents/CartComponent';

import login from './components/LoginComponent';
import register from './components/RegisterComponent';

import admin from './components/AdminComponent';
import adminPanel from './components/AdminPanelComponent';
import adminProducts from './components/adminComponents/AdminProductsComponent';
import adminUsers from './components/adminComponents/AdminUsersComponent';

import editCurrentUser from './components/userComponents/EditCurrentUserComponent';

const routes = [
    {
        path: '/',
        name: 'index',
        component: products
    },
    {
        path: '/editUser',
        name: 'editCurrentUser',
        component: editCurrentUser
    },
    {
        path: '/products/:category',
        name: 'products',
        component: products
    },
    {
        path: '/products/:id/:slug',
        name: 'product',
        component: product
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        //ADMIN CHILDREN
        children: [
            //ADMIN PANEL (INITIAL)
            {
                path: '',
                name: 'adminPanel',
                component: adminPanel
            },
            //ADMIN PANEL PRODUCTS (READ AND DELETE)
            {
                path: 'products',
                name: 'adminProducts',
                component: adminProducts
            },
            //ADMIN PANEL USERS (READ AND DELETE)
            {
                path: 'users',
                name: 'adminUsers',
                component: adminUsers
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes
})