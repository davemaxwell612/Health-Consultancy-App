<template>
    <AuthenticatedLayout>

        <div class="flex justify-start mt-4">
                <Link href="/patient-messages" class="text-white">
            <button class="bg-blue-500 my-3 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
                Back
            </button>
                </Link>
        </div>
        <div>
            <h1 class="text-2xl font-bold mb-4 text-center">Lay a Colain </h1>
        </div>

            <form @submit.prevent="submitComplaint" class="max-w-lg mx-auto p-4 bg-white shadow rounded-lg">
                <ResponseMessage
                :response="response"
                :class="bg"
                />
                <label class="block mb-2 text-gray-700">Department</label>
                <select v-model="selectedDepartment" class="w-full p-2 border rounded focus:outline-none focus:ring">
                    <option value="" disabled>Select a department</option>
                    <option v-for="department in props.departments" :key="department.id" :value="department.id">
                        {{ department.name }}
                    </option>
                </select>


                <div class="mb-6">
                    <label for="subject" class="block text-lg font-medium text-gray-700 mb-2">Complaint</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        v-model="form.subject"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                        placeholder="e.g Stomach pain | Headache | Difficulty in breathing"
                    />
                </div>


                <label class="block mt-4 mb-2 text-gray-700">Complaint</label>
                <textarea
                    v-model="form.complaint"
                    class="w-full p-2 border rounded focus:outline-none focus:ring"
                    rows="4"
                    placeholder="Describe your complaint"
                required></textarea>

                <button type="submit" class="mt-4 w-full bg-teal-900 text-white py-2 rounded-lg hover:bg-teal-800">
                    Submit Complaint
                </button>
            </form>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
    import { ref } from 'vue';
    import axios from 'axios';
import {Link, useForm} from "@inertiajs/vue3";
import ResponseMessage from "@/Components/ResponseMessage.vue";

let response= ref('')
    let props = defineProps({
        departments: '',
    })
let form = useForm({
    complaint: '',
    subject: ''
})

const selectedDepartment = ref('');
const bg = ref('');

const submitComplaint = async () => {
    if (!selectedDepartment.value || !form.complaint || !form.subject) {
        response = 'Please fill out all fields';
        bg.value = 'bg-red-500'

        setTimeout(()=>{
            response.value = '';
            bg.value ='';
        }, 3000)
    return;
}
    try {
    await axios.post('patient-lay-complain', {
    department_id: selectedDepartment.value,
    message: form.complaint,
    subject: form.subject,
}).then(res=>{
    if (res.status === 200){
            selectedDepartment.value = '';
            form.reset();
            response.value = res.data.message
            bg.value = 'bg-green-500'
        setTimeout(()=>{
            response.value = '';
            bg.value ='';
        }, 3000)
    }
    });
} catch (error) {
        response.value = error
        bg.value = 'bg-red-500'

        setTimeout(()=>{
            response.value = '';
            bg.value ='';
        }, 3000)
}
};
</script>
