<template>
    <AuthenticatedLayout>
        <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 class="text-2xl font-bold mb-4">Medical Records Management</h1>

            <form @submit.prevent="submitForm">
                <ResponseMessage
                :response="response"
                :class="bg"
                />
                <!-- Search Box -->
                <div class="relative">
                    <label for="search" class="block text-sm font-medium text-gray-700">Search User:</label>
                    <input
                        v-model="searchQuery"
                        id="search"
                        type="search"
                        placeholder="Search by name"
                        class="w-full border-gray-300 border rounded px-4 py-2 my-2"
                        required
                    />
                    <ul v-if="filteredUsers.length > 0"
                        class=" h-12 overflow-hidden bg-white border rounded mt-1 w-full max-h-40 overflow-y-auto z-10">
                        <li
                            v-for="user in filteredUsers"
                            :key="user.id"
                            class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            @click="selectUser(user)"
                        >
                            {{ user.username }}
                        </li>
                    </ul>
                </div>

                <!-- Test conducted on -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Test conducted on:</label>
                    <input
                        type="date"
                        v-model="form.conducted_on"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    >
                </div>

                <!-- Diagnosis -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Diagnosis</label>
                    <textarea
                        v-model="form.diagnosis"
                        class="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter diagnosis"
                    ></textarea>
                </div>

                <!-- Medications -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Medications</label>
                    <textarea
                        v-model="form.medications"
                        class="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter prescribed medications"
                    ></textarea>
                </div>

                <!-- Test Results -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Test Results</label>
                    <textarea
                        v-model="form.test_result"
                        class="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter test results"
                    ></textarea>
                </div>

                <!-- Notes -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Additional Notes</label>
                    <textarea
                        v-model="form.extra_notes"
                        class="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter any additional notes"
                    ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
                    >
                        Save Record
                    </button>
                </div>
            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {computed, ref} from "vue";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import ResponseMessage from "@/Components/ResponseMessage.vue";

const form = ref({
    diagnosis: "",
    medications: "",
    test_result: "",
    notes: "",
    conducted_on: ""
});

const resetForm = () => {
    form.value = {
        diagnosis: "",
        medications: "",
        test_result: "",
        extra_notes: "",
        conducted_on: "",
    };
};
let props = defineProps({
    users: Array,
})


let searchQuery = ref('');
let department = ref('');
let selectedUser = ref('');
let response = ref('')
let patient =  ref('');
let bg = ref('')

const filteredUsers = computed(() => {
    return props.users.filter(user => user.username.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const selectUser = (user) => {
    selectedUser.value = user;
    searchQuery.value = user.username;
    patient.value = user
};

const submitForm = () => {
    console.log(patient.value.id)
    let data = {
        user_id: patient.value.id,
        ...form.value,
    }
    axios.post("/doctor-update-medical-records", data)
        .then(res => {
            if (res.status === 201){
                response.value = res.data.message
                bg.value = 'bg-green-500'
                setTimeout(()=>{
                    response.value = '';
                    bg.value ='';
                }, 3000)
                resetForm()
            }
        })
        .catch(error => {
            console.error("Error saving record:", error);
        });
};
</script>
