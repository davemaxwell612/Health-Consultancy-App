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
import {ref} from "vue";

let links = ref(
    [
        'doctor-dashboard-overview',
        'doctor-appointments',
        // 'doctor-patients-list',
        // 'doctor-medical-records-management',
        'doctor-prescription-management',
        'doctor-messages',
        // 'doctor-billing-and-earnings',
        'doctor-profile-and-availability'
    ]
)

</script>

