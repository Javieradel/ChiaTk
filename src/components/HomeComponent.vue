<template>
  <h1>HOME</h1>
  <CarouselVue></CarouselVue>
  <modalVue></modalVue>
</template>
<script setup>
import CarouselVue from './shared/Carousel.vue'
import modalVue from './shared/modal.vue';
import store from '../store';
function showModal(){
  //store.commit('main/SHOW_MODAL', { show:true, data:{title:'test',type:'info', message:'esta es una prueba'} })
}
</script>