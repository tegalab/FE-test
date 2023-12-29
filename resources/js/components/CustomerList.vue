<template>
    <div>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Azienda</th>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{ customer.company_name }}</td>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.surname }}</td>
                    <td>{{ customer.telephone }}</td>
                    <td>{{ customer.email }}</td>
                    <td>
                      
                        <router-link :to="`/customers/${customer.id}`" class="p-2 btn text-primary"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
                        <router-link :to="`/customers/${customer.id}/edit`" class="p-2 btn text-success"><font-awesome-icon icon="fa-solid fa-user-pen" /></router-link>
                        <button @click="deleteCustomer(customer.id)" type="button" class="p-2 btn text-danger"><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
                      
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customers: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/customers');
      this.customers = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deleteCustomer(id) {
      try {
        await axios.delete(`/api/customers/${id}`);
        this.customers = this.customers.filter(customer => customer.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

