import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
export const useUserStore = defineStore({
  id : 'user',
  state: () => {
    return {
      users: [],
      user: {
        id: "",
        name: "",
        email: "",
        password: "",      
      },
    };
    },
    actions: {
        async login() {

        },
        async register() {
          await axios.post('http://localhost:3000/users', this.user)
        }
    }
    })
