<template>
    <div>
<<<<<<< HEAD

        <div class="col-md-6 offset-md-3">
        <div class="card border-0">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="media-body text-left">
                  <h3 class="success">{{ customer.company_name }}</h3>
                 <div> <span>{{ customer.name }}</span> <span>{{ customer.surname }}</span></div>

                  <div><span>{{ customer.telephone }}</span> - <span>{{ customer.email }}</span></div>
                </div>
                <div class="align-self-center">
                    
                </div>
              </div>
            </div>

            <div class="text-muted">
                <router-link :to="`/customers/${customer.id}/edit`" class="btn btn-primary">Modifica</router-link>
            </div>

          </div>

        </div>
      </div>
       
        
=======
        <h5 id="associating-form-text-with-form-controls">Azienda</h5>
        <h6>{{ customer.company_name }}</h6>
        <h5 id="associating-form-text-with-form-controls">Nome</h5>
        <p>{{ customer.name }}</p>
        <h5 id="associating-form-text-with-form-controls">Cognome</h5>
        <p>{{ customer.surname }}</p>
        <h5 id="associating-form-text-with-form-controls">Telefono</h5>
        <p>{{ customer.telephone }}</p>
        <h5 id="associating-form-text-with-form-controls">Email</h5>
        <p>{{ customer.email }}</p>
        <router-link :to="`/customers/${customer.id}/edit`" class="btn btn-primary">Edit</router-link>
>>>>>>> 29d21da189dd38577aae98157a595daa5317fadc
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

