<template>
    <div>

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

