<template>
    <AuthenticatedLayout>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-bold mb-4">Book an Appointment</h1>
        <ResponseMessage
            :class="bg"

        :response="response"
        />

        <form @submit.prevent="submitForm">
            <!-- User ID -->
            <div class="mb-4">
<!--                <label for="user_id" class="block text-sm font-medium text-gray-700">User</label>-->
                <input
                    v-model="$page.props.auth.user.username"
                    id="user_id"
                    name="user_id"
                    readonly
                    class="focus:border-0 focus:ring-0 outline-none ring-0 mt-1 block w-full px-3 py-2 border-none border-0 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >

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
                <label for="doctor_id" class="block text-sm font-medium text-gray-700">What is  your problem</label>
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
import {useForm} from "@inertiajs/vue3";
import ResponseMessage from "@/Components/ResponseMessage.vue";

// Data setup for the form fields
const form = useForm({
    messege: '',
    clients_date_and_time: '',
});
let response = ref('')
let bg = ref('')


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
