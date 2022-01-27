<template>
    <HeaderComponentVue></HeaderComponentVue>

    <div class="q-pa-md q-mx-auto" style="max-width: 400px">
        <h4 class="text-left" >
            Registrate
        </h4>
        <q-form
        ref="registro"
        @submit="onSubmit"
        class="q-gutter-md"
        >
            <q-input
                filled
                type="email"
                v-model="email"
                label="Tu correo *"
                hint="carlos@correo.com"
                lazy-rules
                :rules="[ val => val && /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(val) || 'Debes ingresar tu correo']"
            />

            <q-input
                filled
                v-model="firstName"
                label="Tu nombre *"
                hint="Carlos"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debes ingresar tu nombre']"
            />

            <q-input
                filled
                v-model="lastName"
                label="Tu apellido *"
                hint="Marquez"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Debes ingresar tu apellido']"
            />

            <div>
                <q-btn label="Registrarse" type="submit" color="primary"/>
            </div>
        </q-form>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import store from '../../store';
    import DataService from '../../api/services';
    import HeaderComponentVue from '../shared/HeaderComponent.vue';
    import router from '../../router';

    const email = ref('correo_@correo.com')
    const firstName = ref('test')
    const lastName = ref('test')

    const registro = ref(null) 

    function showError(data){
      console.log(data);
      store.commit('main/SHOW_MODAL',
      { show:true, 
        data:{
          title: data.title,
          type: data.type ||'warning',
          message: data.message}
      })
    }
    function showSucces(data){
      store.commit('main/SHOW_MODAL',
      { show:true, 
        data:{
          title:data.title,
          type:data.type,
          message:data.message}
      })
    }
    async function signIn(payload){
      store.commit('main/SHOW_LOADER',true)
      const data = {
          email:payload.email.value,
          lastName:payload.firstName.value,
          firstName:payload.lastName.value
      }
      await DataService.create({path:'user/create', data})
        .then(data => {
          store.commit('main/SET_USER', data)
          store.commit('main/SHOW_LOADER', false)
          showSucces({title:'¡Registro Éxitoso!', type: 'done', message:'Registrado con éxito\n redireccionando...' })
          }, 
        error => {
          console.log(error.response)
          store.commit('main/SHOW_LOADER',false)
            showError({
              title: `Error, codigo: ${error.response.status}`,
              type: 'warning',
              message: 'El correo ya está en uso'
            })
          })
        .catch(
            error => {
              console.log(error)
              store.commit('main/SHOW_LOADER',false)
              showError({
              title: `Error Crítico, codigo: ${error.message}`,
              type: 'warning',
              message: ''
            })
              }
        )
    }
    function onSubmit(){
        registro.value.validate()
        .then(
            success => {
                success ? signIn({email , firstName, lastName}) : console.log('fail')
            },
        )
    }
</script>
