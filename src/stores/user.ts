import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore({
  id : 'user',
  state: () => {
    return {
      users: [],
      user: {
        id: "",
        name: "",
        email: "",        
      },
    };
    },
    actions: {
        async login() {

        },
        async register() {
        }
    }
    })
