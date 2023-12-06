import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
import router from '@/router';
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
        phone: ""      
      },
    };
    },
    actions: {
        
        async register() {
          await axios.post("http://20.120.4.185/api/crearUser", this.user)
          .then((response: any) => {
            router.push({ name: "login" });
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
  
            alert(error.response.data.message);
          });
        },

        async login() {
          await axios.post("http://20.120.4.185/api/login",this.user)
          .then((response: any) => {
            console.log(response);
//            router.push({ name: "home" });
            localStorage.setItem("user", response);
            localStorage.setItem("message", response.message)
            alert("Bienvenido");
 
            router.push({ name: "home" });
          })
          .catch((error) => {
            console.log(error);
  
            alert(error.response.data.message);
          });
          
        }
    },
    })
