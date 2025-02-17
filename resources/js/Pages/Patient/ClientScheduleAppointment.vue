<template>
    <AuthenticatedLayout>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-bold mb-4">Book an Appointment</h1>

        <div class="w-full flex items-center justify-end my-3">
            <Link href="patient-my-appointments">
                <button class="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                    All appointments
                </button>
            </Link>
        </div>

        <ResponseMessage
            :class="bg"

        :response="response"
        />

        <form @submit.prevent="submitForm">
<!--            Select a department -->
            <div>
                <select name="" id=""
                        v-model="form.department"
                        class="p-2 border border-gray-300 rounded-md text-base w-full appearance-none bg-transparent cursor-pointer">
                    <option value="" disabled selected>Select department</option>
                    <option v-for="(department, index) in props.departments"
                            :value="department.id"
                            :key="index" >
                        {{ department.name }}
                    </option>
                </select>
            </div>


            <!-- Client Date and Time -->
            <div class="mb-4">
                <label for="clients_date_and_time" class="block text-sm font-medium text-gray-700">Pick a Date and Time of your convinience</label>
                <input
                    type="datetime-local"
                    v-model="form.clients_date_and_time"
                    id="clients_date_and_time"
                    name="clients_date_and_time"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <!-- user problem -->
            <div class="mb-4">
                <label for="doctor_id" class="block text-sm font-medium text-gray-700">Reason for appointment</label>
                <textarea
                    v-model="form.messege"
                    id="doctor_id"
                    name="doctor_id"
                    required
                    class="h-44 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                </textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex items-center justify-end">
                <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import axios from "axios";
import {Link, useForm} from "@inertiajs/vue3";
import ResponseMessage from "@/Components/ResponseMessage.vue";

// Data setup for the form fields
const form = useForm({
    messege: '',
    department: '',
    clients_date_and_time: '',
});
let response = ref('')
let bg = ref('')


let props = defineProps({
    departments: Object,
})

// Form submission
function submitForm() {
   axios.post('/patient-schedule-appointment', {form})
       .then(res=>{
           if (res.status === 200){
               response.value = res.data.message,
               bg.value = 'bg-green-500',

                   form.reset()
                   setTimeout(() => {
                       response.value = '';
                       bg.value = ''
                   }, 3000);
           }
       })
       .catch(err =>{
           if (err){
               response.value = 'Error booking appointment, please try again',
                   bg.value = 'bg-red-500',
                   setTimeout(() => {
                       response.value = '';
                       bg.value = ''
                   }, 3000);
           }
       })
}
</script>

<style scoped>
/* You can add additional styling here if needed */
</style>
