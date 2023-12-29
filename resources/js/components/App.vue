<template>

      <header class="bg-dark text-white">
        <div class="container">

          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <router-link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">FE-Test</span>
              </router-link>
              <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;"><font-awesome-icon icon="fa-solid fa-house" /> Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/customers/create" class="nav-link text-white" style="text-decoration: none; color: white;">
                      <font-awesome-icon icon="fa-solid fa-user-plus" /> Aggiungi cliente</router-link>
                </li>
              </ul>
            </div>
            </div>
      </header>
    
      <div class="container pt-3">

      <div class="card border-0">
        <div class="card-body">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </div>
      </div>
    
    </div>
    
    </template>
    
    <script>
    export default {
      name: 'App'
    }
    </script>
    