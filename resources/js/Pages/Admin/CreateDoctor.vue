<template>
    <AuthenticatedLayout>
    <div class="max-w-4xl mx-auto p-6">
        <ResponseMessage
        :response="response"
        />
        <p>dddafdsafsd</p>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Search Box -->
            <div class="relative">
                <label for="search" class="block text-sm font-medium text-gray-700">Search User:</label>
                <input
                    v-model="searchQuery"
                    id="search"
                    type="search"
                    placeholder="Search by name"
                    class="w-full border-gray-300 border rounded px-4 py-2"
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

            <!-- Age Field -->
            <div>
                <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                <input
                    v-model="form.age"
                    id="age"
                    type="number"
                    required
                    class="mt-1 block w-full px-4 py-2 border-gray-300 rounded"
                    placeholder="Enter age"
                />
            </div>

            <!-- Qualification Field -->
            <div>
                <label for="qualification" class="block text-sm font-medium text-gray-700">Qualification</label>
                <input
                    v-model="form.qualification"
                    id="qualification"
                    type="text"
                    required
                    class="mt-1 block w-full px-4 py-2 border-gray-300 rounded"
                    placeholder="Enter qualification"
                />
            </div>

            <!-- Fee Field -->
            <div>
                <label for="fee" class="block text-sm font-medium text-gray-700">Fee</label>
                <input
                    v-model="form.fee"
                    id="fee"
                    type="number"
                    required
                    step="0.01"
                    class="mt-1 block w-full px-4 py-2 border-gray-300 rounded"
                    placeholder="Enter fee"
                />
            </div>

            <!-- Department Field -->
            <div>
                <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
                <select
                    v-model="department"
                    class="focus:outline-none ring-0">
                    <option selected
                    class="text-gray-200 bg-red-600"
                    >
                        Select Department
                    </option>
                    <option v-for="department in props.departments"
                            :key="department.id" :value="department.id"
                    >
                        {{ department.name }}
                    </option>
                </select>
            </div>

            <!-- Submit Button -->
            <div>
                <button
                    type="submit"
                    class="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import axios from "axios";
import {useForm} from "@inertiajs/vue3";
import ResponseMessage from "@/Components/ResponseMessage.vue";
let props = defineProps({
        departments: Object,
        users: Object
})

let form = useForm({
        age: '',
        qualification: '',
        fee: '',
 })

let searchQuery = ref('');
let department = ref('');
let selectedUser = ref('');
let response = ref('')


        const filteredUsers = computed(() => {
            return props.users.filter(user => user.username.toLowerCase().includes(searchQuery.value.toLowerCase()));
        });

        const selectUser = (user) => {
            selectedUser.value = user;
            searchQuery.value = user.username;  // Populate the search field with the selected user's name
        };

        const handleSubmit = () => {
            let sentData = {
                form,
                department: department.value,
                user: selectedUser.value.id
            }
            // Submit logic, you can add form submission to an API here
          axios.post('/add-doctor', {sentData})
              .then(res => {

              })
        };

</script>
