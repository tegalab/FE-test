<template>
    <div>
        <h5 id="associating-form-text-with-form-controls">Azienda</h5>
        <h6>{{ customer.company_name }}</h6>
        <h5 id="associating-form-text-with-form-controls">Nome</h5>
        <p>{{ customer.name }}</p>
        <h5 id="associating-form-text-with-form-controls">Cognome</h5>
        <p>{{ customer.surname }}</p>
        <h5 id="associating-form-text-with-form-controls">Telefono</h5>
        <p>Price: {{ customer.telephone }}</p>
        <h5 id="associating-form-text-with-form-controls">Email</h5>
        <p>Price: {{ customer.email }}</p>
        <router-link :to="`/customers/${customer.id}/edit`" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
    return {
    customer: {}
    }
},
async created() {
    try {
    const response = await axios.get(`/api/customers/${this.$route.params.id}`);
    this.customer = response.data;
    } catch (error) {
    console.error(error);
    }
}
}
</script>

