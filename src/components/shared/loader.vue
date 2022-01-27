<template>
  <div class="justify-center"
    :class="{'fullscreen': visible}"
  >
      <q-inner-loading :showing="visible"
        label="Cargando..."
        label-class="text-normal"
        label-style="font-size: 1.1em"
        size="150px"
      >
      </q-inner-loading>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import store from '../../store';
  const visible = computed( () => store.state.main.loading )
</script>