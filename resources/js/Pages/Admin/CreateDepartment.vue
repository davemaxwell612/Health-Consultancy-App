<template>
    <AuthenticatedLayout>
        <div class="max-w-4xl mx-auto px-6 space-y-6">
            <!-- Create Department Section -->
           <ResponseMessage
           :response="response"
           />
            <div class="bg-white shadow-md rounded-lg p-6">
                <p class="text-xl font-semibold text-gray-800">Create Department</p>
                <form class="mt-4" @submit.prevent="submit">
                    <div class="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search or create department"
                            v-model="form.department"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>

            <!-- Available Departments Section -->
            <div class="bg-white shadow-md rounded-lg p-6">
                <h2 class="text-xl font-semibold text-gray-800">Available Departments</h2>
                <ul class="mt-4 space-y-2 "
                v-for="(department, index) in departments"
                    :key="index"
                >
                    <li

                        class="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
                            {{ index+1. +'. '+ department.name }}
                    </li>
                </ul>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import axios from "axios";
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import ResponseMessage from "@/Components/ResponseMessage.vue";


let form = useForm({
    department: ''
})

let props = defineProps({
    departments: Object
})

let response = ref('')
let departments = ref(props.departments)
let bg = ref('')
let submit = () =>{
    axios.post('/admin-add-department', {form})
        .then(res =>{
            if (res){
                    response.value = res.data.message;
                bg.value = 'bg-green-400'
                setTimeout(() => {
                    response.value = '';
                    bg.value = ''
                }, 3000);
                    form.department = '';
                    fetchDepartments()
            }
        })
        .catch(err=>{
            if (err){
                response.value ="Couldn't save department \n Please make sure department doesn't already exist";
                bg.value = 'bg-red-400'
                setTimeout(() => {
                    response.value = '';
                    bg.value = ''
                }, 3000);
                    form.department = ''
            }
        })
}


let fetchDepartments = () =>{
    axios.get('/fetch-departments')
        .then(res=>{
            departments.value = res.data;
        })
}

</script>

<style scoped>

</style>
