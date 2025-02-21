<template>
    <div
        class="h-fit w-full  text-white flex flex-col ">

        <div>
            <h2 class="font-bold pb-6">{{$page.props.auth.user.username}}</h2>
        </div>

        <AuthLinks
            v-for="patientLink in patientLinks"
            :link="patientLink"
        />
    </div>
</template>

<script setup>
import {Link} from '@inertiajs/vue3';
import AuthLinks from "@/Components/AuthLinks.vue";
import {ref} from "vue"; // If you're using Inertia.js
let props = defineProps({
    patientLinks: Array,
})
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
