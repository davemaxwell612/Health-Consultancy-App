<template>
    <AuthenticatedLayout>

    <div class="flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 class="text-3xl font-semibold text-teal-900 mb-4">Upcoming appointments</h1>
<div class="w-full flex items-center justify-end my-3">
    <Link href="patient-book-appointment">
        <button class="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
            Create Appointment
        </button>
    </Link>
</div>
            <table class="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2">Appointment Date/Time</th>
                    <th class="border border-gray-300 px-4 py-2">Department</th>
                    <th class="border border-gray-300 px-4 py-2">Reason</th>
                    <th class="border border-gray-300 px-4 py-2">Countdown</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(appointment, index) in appointments" :key="index">
                    <td class="border border-gray-300 px-4 py-2">
                        {{ formatDateTime(appointment.clients_date_and_time) }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">{{ appointment.department.name}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ appointment.reason }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ getCountdown(appointment.clients_date_and_time) }}</td>
                </tr>
                </tbody>
            </table>
        </div>


    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {ref, onMounted} from "vue";
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    appointments: Object
})

// Format date and time
const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString();
};

// Calculate countdown

const getCountdown = (dateTime) => {
    const now = new Date();
    const appointmentDate = new Date(dateTime);
    const diff = appointmentDate - now;
    if (diff <= 0) return 'Appointment has passed';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
};



onMounted(() => {
    setInterval(() => {
        appointments.value = [...appointments.value]; // Force Vue to update reactive data
    }, 1000);
});

</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
