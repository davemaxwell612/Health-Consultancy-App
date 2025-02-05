<template>
    <div
        class="h-fit w-full  text-white flex flex-col ">
        <div>
            <h2 class="font-bold pb-6">Patient's name</h2>
        </div>
        <AuthLinks
            v-for="link in links"
            :linkText="link"
        />
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import AuthLinks from "@/Components/AuthLinks.vue";
import {ref} from "vue"; // If you're using Inertia.js

let links = ref([
<<<<<<< HEAD
    'patient-dashboard',
    'patient-lay-a-complain',
    'patient-medical-history',
    'patient-schedule-appointments',
    'patient-upcoming-appointments',
=======
    // 'patient-dashboard',
    // 'patient-lay-complain',
    // 'patient-medical-history',
    // 'patient-schedule-appointments',
    // 'patient-upcoming-appointments',
    //
    //
    //
    "patient-dashboard-overview",
    "patient-book-appointment",
    "patient-my-appointments",
    "patient-medical-records",
    "patient-prescriptions",
    "patient-billing-and-payments",
    "patient-messages",
    "patient-profile-settings",
    "patient-health-tracker"
>>>>>>> implment_lay_complain_and_giving_recomendations_by_doctor_feature
])



</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
