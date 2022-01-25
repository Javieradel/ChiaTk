import { useStore } from 'vuex'
import { computed } from 'vue'

// composable
import useShowToastify from './useShowToastify'

const { callToast } = useShowToastify()

const useCrud = ({ path }) => {
  // store
  const store = useStore()

  // vars
  const showSlideOverCrud = computed(() => store.state[path].showSlideOverCrud)
  const showDeleteModalCrud = computed(() => store.state[path].showDeleteModalCrud)

  const getItems = async () => {
    await store.dispatch(`${path}/getAll`, { path })
  }
  const getItem = async ({ id }) => {
    await store.dispatch(`${path}/get`, { path, id })
  }

  const createItem = async ({ data }) => {
    const response = await store.dispatch(`${path}/create`, { path, data })
    if (response.status === 201) {
      cash('#basic-slide-over-preview-carl').modal('hide')
      cash('#basic-slide-over-preview-carl').remove()
      store.commit(`${path}/SET_VALUE_STATE`, { variable: 'showSlideOverCrud', payload: false })

      callToast({ idHtml: 'success-notification-content' })

      await getItems()
    }
  }

  const updateItem = async ({ id, data }) => {
    const response = await store.dispatch(`${path}/update`, { path, id, data })
    if (response.status === 200) {
      cash('#basic-slide-over-preview-carl').modal('hide')
      cash('#basic-slide-over-preview-carl').remove()
      store.commit(`${path}/SET_VALUE_STATE`, { variable: 'showSlideOverCrud', payload: false })

      callToast({ idHtml: 'success-notification-content' })

      await getItems()
    }
  }
  const deleteItem = async ({ id }) => {
    const response = await store.dispatch(`${path}/delete`, { path, id })
    if (response.status === 200) {
      cash('#delete-modal-zeye').modal('hide')
      cash('#delete-modal-zeye').remove()
      store.commit(`${path}/SET_VALUE_STATE`, { variable: 'showDeleteModalCrud', payload: false })

      callToast({ idHtml: 'success-notification-content' })

      await getItems()
    }
  }

  return {
    // methods
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    // vars
    showSlideOverCrud,
    showDeleteModalCrud
  }
}

export default useCrud
