import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import App from './components/App.vue';
import CustomerList from './components/CustomerList.vue';
import CustomerForm from './components/CustomerForm.vue';
import Customer from './components/Customer.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faHouse, faTrashCan, faUserEdit, faEye } from '@fortawesome/free-solid-svg-icons';
//import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

library.add(faUserPlus, faHouse,faTrashCan, faUserEdit, faEye);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CustomerList },
        { path: '/customers/create', component: CustomerForm },
        { path: '/customers/:id', component: Customer },
        { path: '/customers/:id/edit', component: CustomerForm },
    ]
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');