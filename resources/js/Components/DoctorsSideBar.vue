<template>
    <div

        class="h-fit w-full  text-white flex flex-col ">
        <div>
            <h2 class="font-bold pb-6">Timeless Horizone</h2>
        </div>


        <AuthLinks
            v-for="link in links"
        :linkText="link"
        />
    </div>
</template>

<script setup>
import AuthLinks from "@/Components/AuthLinks.vue";
import {ref} from "vue"; // If you're using Inertia.js

let links = ref(['doctor-dashboard', 'doctor-appointments', 'doctor-take-a-leave'])



</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
