<template>
    <div
        className="h-fit w-full  text-white flex flex-col ">
        <div>
            <h2 className="font-bold pb-6">Patient's name</h2>
        </div>
        <AuthLinks
            v-for="link in links"
            :linkText="link"
        />
    </div>
</template>

<script setup>
import {Link} from '@inertiajs/vue3';
import AuthLinks from "@/Components/AuthLinks.vue";
import {ref} from "vue"; // If you're using Inertia.js

let links = ref([
    "patient-dashboard-overview",
    "patient-book-appointment",
    "patient-my-appointments",
    "patient-medical-records",
    "patient-prescriptions",
    "patient-billing-and-payments",
    "patient-messages",
    "patient-profile-settings",
    "patient-health-tracker"
])


</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
