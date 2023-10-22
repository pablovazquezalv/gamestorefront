<template>
    <div class="flex">
        <div class="w-1/2  h-screen bg-gradient-to-r from-red-500 to-orange-500">
            <img src="public/personajugando.jpg" alt="">
        </div>
        <div class="w-1/2 h-screen ">
            <form action="">
            <h1 class="text-red-400 font-bold m-10 ml-10 text-xl">INICIAR SESION</h1>
            <input class=" ml-10 border border-gray-200 h-10 w-3/4" type="text" placeholder=" Email o Usuario">
            <input type="password" class="m-10 ml-10 border border-gray-200 h-10 w-3/4" placeholder=" Contraseña">
          
            <button class="rounded bg-red-500 h-10 w-3/4 ml-10 text-white">ENTRAR</button>
            <br>
            </form>
            
            <div>
                <div class="flex justify-center mt-8 mr-36">
                    <a href="/register" class="text-gray-400">¿No tienes cuenta? Crea una</a>
                 </div>
                 
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';
export default defineComponent({
    name: 'LoginView',

    setup() {
        const userStore = useUserStore();

        return {
            userStore,
        };
    },

    methods: {
        async onsubmitLogin() {
            await this.userStore.login();
        },
    },
});
</script>