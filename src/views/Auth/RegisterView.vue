<template>
    <div class="flex">
       
        <div class="w-1/2 h-screen ">
            <form @submit.prevent="onsubmitRegister">
            <h1 class="text-red-400 font-bold m-10 ml-10 text-xl">REGISTRARSE</h1>
            
            <input  v-model="userStore.user.name" class=" ml-10 border border-gray-200 h-10 w-3/4" type="text" placeholder=" Email o Usuario">
           
            <input v-model="userStore.user.email" type="password" class="m-10 ml-10 border border-gray-200 h-10 w-3/4" placeholder=" Email">
          
            <input v-model="userStore.user.password" class=" ml-10 border border-gray-200 h-10 w-3/4" type="password" placeholder=" Contraseña">
            <br>
            
            <button type="submit" class="rounded bg-red-500 h-10 w-3/4 ml-10 mt-10 text-white">CREAR CUENTA</button>
           
            </form>
            <div class="flex justify-center mt-8 mr-36">
                <a class="text-gray-400"><router-link to="/register">¿Ya tienes cuenta? Inicia Sesion</router-link></a>
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
            await this.userStore.register();
        },
        
    },
});
</script>