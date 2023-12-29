<template>
    <div>
      <h2 v-if="isNewCustomer">Nuovo cliente</h2>
      <h2 v-else>Modifica cliente</h2>
        <form @submit.prevent="submitForm">
          <div class="row g-3">

          <div class="col">
            <label for="company_name" class="form-label">Azienda</label>
            <input class="form-control" type="text" id="company_name" v-model="customer.company_name" required />
          </div>
          <div class="col">
            <label for="name" class="form-label">Nome</label>
            <input class="form-control" type="text" id="name" v-model="customer.name" required />
          </div>
          <div class="col">
            <label for="surname" class="form-label">Cognome</label>
            <input class="form-control" type="text" id="surname" v-model="customer.surname" required />
          </div>
          </div>

          <div class="row g-3">
          <div class="col">
            <label for="telephone" class="form-label">Telefono</label>
            <input class="form-control" type="text" id="telephone" v-model="customer.telephone" required />
          </div>
          <div class="col">
            <label for="email" class="form-label">Email</label>
            <input class="form-control" type="text" id="email" v-model="customer.email" required />
          </div>
        </div>

        <div class="col-12 mt-3">
          <button type="submit" v-if="isNewCustomer" class="btn btn-primary">Aggiungi</button>
          <button type="submit" v-else class="btn btn-primary">Aggiorna</button>
        </div>

        </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        customer: {
          company_name: '',
          name: '',
          surname: '',
          telephone: '',
          email: '',
        }
      }
    },
    computed: {
      isNewCustomer() {
        return !this.$route.path.includes('edit');
      }
    },
    async created() {
      if (!this.isNewCustomer) {
        const response = await axios.get(`/api/customers/${this.$route.params.id}`);
        this.customer = response.data;
      }
    },
    methods: {
      async submitForm() {
        try {
          if (this.isNewCustomer) {
            await axios.post('/api/customers', this.customer);
          } else {
            await axios.put(`/api/customers/${this.$route.params.id}`, this.customer);
          }
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  
  