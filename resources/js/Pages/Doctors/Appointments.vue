<template>
    <AuthenticatedLayout>

        <div class="flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 class="text-3xl font-semibold text-teal-900 mb-4">Upcoming appointments</h1>
            <table class="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2">Appointment Date/Time</th>
                    <th class="border border-gray-300 px-4 py-2">Reason</th>
                    <th class="border border-gray-300 px-4 py-2">Countdown</th>
                    <th class="border border-gray-300 px-4 py-2">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(appointment, index) in appointments" :key="index">
                    <div
                        v-show="editing"
                        class="flex flex-col items-center justify-center"
                    >
                    <label for="newTimeAndDate">New time and date</label>
                    <input
                        type="datetime-local"
                        id="newTimeAndDate"
                        name="newTimeAndDate"
                        v-model="appointment.clients_date_and_time"
                        class="border border-gray-300 px-4 py-2">
                    </div>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ formatDateTime(appointment.clients_date_and_time) }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">{{ appointment.reason }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ getCountdown(appointment.clients_date_and_time) }}</td>
                    <td class="border border-gray-300 px-4 py-2 flex flex-col">
                        <button
                            v-show="!editing"
                            @click="newDateAndTime"
                            href="#" class="text-green-700"> Reschedule </button>
                        <button
                            v-show="editing"
                            @click="saveNewDateAndTime(appointment)"
                            class="text-green-700 bg-green-100 my-1"> save </button>
                        <button
                            v-show="editing"
                            @click="newDateAndTime"
                            class="text-red-700 bg-red-100 my-1"> Cancel </button>
                    </td>
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

let editing = ref(false)

// Format date and time
const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString();
};

const newDateAndTime =()=>{
    editing.value = !editing.value
}
// let doctorDateAndTime = ref('')
const saveNewDateAndTime =(appointment)=>{
   const doctorDateAndTime = appointment.clients_date_and_time
    axios.post(`/doctor-reschedule-appointment/${appointment.id}`, {doctorDateAndTime})
        .then(res =>{
            if (res.status === 200){
                editing.value = !editing.value
            }
        })
}
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


// onMounted(() => {
//     setInterval(() => {
//         appointments.value = [...appointments.value];
//     }, 10000);
// });

</script>
