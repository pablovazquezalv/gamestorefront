<template>
    <div class="flex">
       
        <div class="w-1/2 h-screen ">
            <form @submit.prevent="onsubmitRegister">
            <h1 class="text-red-400 font-bold m-10 ml-10 text-xl">REGISTRARSE</h1>
            
            <input  v-model="userStore.user.name" class=" mb-5 ml-10 border border-gray-200 h-10 w-3/4" type="text" placeholder="Escribe tu nombre:">
           
            <input v-model="userStore.user.email" type="text" class="mb-5 ml-10 border border-gray-200 h-10 w-3/4" placeholder=" Escribe tu email:">
          
            <input v-model="userStore.user.password" class="mb-5 ml-10 border border-gray-200 h-10 w-3/4" type="password" placeholder="Escribe tu contraseña:">
           
            <input v-model="userStore.user.phone" class="mb-5 ml-10 border border-gray-200 h-10 w-3/4" type="telefono" placeholder="Escribe tu telefono:">
           
            <br>
            
            <button type="submit" class="rounded bg-red-500 h-10 w-3/4 ml-10 mt-10 text-white">CREAR CUENTA</button>
           
            </form>
            <div class="flex justify-center mt-8 mr-36">
                <a class="text-gray-400"><router-link to="/">¿Ya tienes cuenta? Inicia Sesion</router-link></a>
             </div>
              
        </div>
        <div class="w-1/2 bg-black min-h-max">
            <img src="" alt="">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';

export default defineComponent({
    name: 'RegisterView',

    setup() {
        const userStore = useUserStore();

        return {
            userStore,
        };
    },

    methods: {
        async onsubmitRegister() {
            if (this.userStore.user.name == "") {
                alert("El nombre no puede estar vacio");
                return;
            }else if (this.userStore.user.email == "") {
                alert("El email no puede estar vacio");
                return;
            }else if (this.userStore.user.password == "") {
                alert("La contraseña no puede estar vacia");
                return;
            }else if (this.userStore.user.phone == "") {
                alert("El telefono no puede estar vacio");
                return;
            }else{
             await this.userStore.register().then(() => {
                this.$router.push('/');
            });
            }

        },
        
    },
});
</script>