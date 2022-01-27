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
    

    const email = ref('correo@correo.com')
    const firstName = ref('noimporta')
    const lastName = ref('siimporta')

    const registro = ref(null) 

    function signIn(payload){
        store.commit('main/SHOW_LOADER',true)
        DataService.create({path:'user/create', payload})
        .then(data => {
            console.log('success',data);
            store.commit('main/SHOW_LOADER',false)
        }, data => { 
            console.error('reject',data.message)
            store.commit('main/SHOW_LOADER',false)
            })
        .catch(
            error => {
                console.log('error',error)
                store.commit('main/SHOW_LOADER',false)
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
