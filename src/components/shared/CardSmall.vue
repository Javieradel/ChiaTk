<template>
    <q-card class="my-card">
      <q-img
        :src="imgUrl || ''"
        :alt="title || 'Imagen de Pets'"
        basic
      >
        <div class="absolute-top text-subtitle2 text-center">
          {{title || 'titulo'}}
        </div>
      </q-img>
    </q-card>
</template>
<script setup>
    const props = defineProps({
        title: String,
        imgUrl: String
    })
</script>