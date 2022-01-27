<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="show" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 300px">
        
        <q-card-section class="q-pt-lg text-center">
          <q-icon name="warning"
            class="text-red"
            style="font-size: 4rem;"
            v-show="type == 'warning'"
            />
          <q-icon name="done" 
            class="text-green"
            style="font-size: 4rem;"
            v-show="type == 'done'"
            />
          <q-icon name="info" 
            class="text-blue"
            style="font-size: 4rem;"
            v-show="type == 'info'"
            />
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="text-h6 q-py-none text-center">
            {{title || '¡Atención!'}}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          {{message || ''}}
        </q-card-section>
        
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" @click="closeModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import store from '../../store';
  const show = computed( () => store.state.main.showModal)
  const title = computed( () => store.state.main.dataModal.title)
  const type  = computed( () => store.state.main.dataModal.type)
  const message = computed( () => store.state.main.dataModal.message)
  // v-close-popup no work because persistent is a computed property
  // that means only can be modified by store
  function closeModal(){
    store.commit('main/SHOW_MODAL', { show:false })
  }
</script>