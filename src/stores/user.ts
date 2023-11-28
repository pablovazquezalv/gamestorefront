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
        phone: ""      
      },
    };
    },
    actions: {
        
        async register() {
          // await axios.post('http://192.168.253.57:8000/crearUser', this.user).then((response: any) => {
          //   console.log(response.data);
          // )}
          await axios.post("http://192.168.253.57:8000/api/crearUser", this.user)
          .then((response: any) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
  
            alert(error);
          });
          
        }
    }
    })
