<template>
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >
        <div class="absolute-top text-subtitle2 text-center">
          Title
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