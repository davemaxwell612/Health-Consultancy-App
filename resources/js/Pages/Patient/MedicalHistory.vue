<template>
    <AuthenticatedLayout>
        <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 class="text-2xl font-bold mb-4">Your Medical History</h1>
            <ResponseMessage
                :class="bg"
                :response="response"
            />
            <form @submit.prevent="submitForm">
<!--                Buttons -->
                <div class="flex items-center justify-end">
                <button
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    v-show="isReadOnly"
                    @click="editHistory"
                >Update History</button>
                </div>
                <div class="flex items-center justify-end">
                    <button
                        v-show="!isReadOnly"
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        save
                    </button>
                </div>



                <!-- User ID -->
                <div class="mb-4">
                    <!--                <label for="user_id" class="block text-sm font-medium text-gray-700">User</label>-->
                    <input
                        v-model="$page.props.auth.user.username"
                        id="user_id"
                        name="user_id"
                        readonly
                        :class="['mt-1 block w-full px-3 py-2 border-none border-0 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 outline-none ring-0' : ''
]"
                        :readonly="isReadOnly"
                    >
                </div>

                <!-- Medical conditions  -->
                <div class="mb-4 flex items-center ">
                    <label for="medicalCondition"
                           class="block text-sm font-medium text-gray-700">Any Medical Condition?</label>
                    <input
                        type="checkbox"
                        id="medicalCondition"
                        name="medicalCondition"
                        @change="updateMedicalConditionsStatus"
                        :class="['mt-1 px-3 mx-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </div>


                <!-- user problem -->
                <div

                    class="mb-4"
                        v-show="isMedicalConditions"
                >
                    <label for="conditions" class="block text-sm font-medium text-gray-700">Medical Condition(s)</label>
                    <textarea
                        v-model="form.messege"
                        id="conditions"
                        name="conditions"
                        :class="['h-44 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </textarea>
                </div>




                <!-- Medical conditions -->
                <div
                    v-show="!isMedicalConditions"

                    class="mb-4 flex items-center ">
                    <label for="medication" class="block text-sm font-medium text-gray-700">Are you on Medications(s)</label>
                    <input
                        v-model="form.medications"
                        type="checkbox"
                        id="medication"
                        name="medication"
                        :class="['mt-1 px-3 mx-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </div>


                <!-- Allergies  -->
                <div class="mb-4 flex items-center ">
                    <label for="allergies" class="block text-sm font-medium text-gray-700">Allergies?</label>
                    <input
                        @change="updateAllergicStatus"
                        v-model="isAllergic"
                        id="allergies"
                        name="allergies"
                        type="checkbox"
                        :class="['mt-1 px-3 mx-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"

                    >
                </div>



                <div
                        v-show="isAllergic"

                    class="mb-4">
                    <label for="whatAllergies" class="block text-sm font-medium text-gray-700">What are your allergies</label>
                    <textarea
                        v-model="form.allergies"
                        id="whatAllergies"
                        name="whatAllergies"
                        :class="['h-44 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </textarea>
                </div>


                <!-- Family Medical History -->
                <div class="mb-4">
                    <label for="family_medical_history" class="block text-sm font-medium text-gray-700">Family Medical History</label>
                    <textarea
                        v-model="form.familyMedical_History"
                        id="family_medical_history"
                        name="family_medical_history"
                        required
                        :class="['h-44 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </textarea>
                </div>

                <!-- Previous sugeries and hospitalizations  -->
                <div class="mb-4">
                    <label for="surgeries_or_hospitalization" class="block text-sm font-medium text-gray-700">Previous sugeries or Hospitalizations</label>
                    <textarea
                        v-model="form.previousSurgeries_or_hospitalizations"
                        id="surgeries_or_hospitalization"
                        name="surgeries_or_hospitalization"
                        required
                        :class="['h-44 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                        isReadOnly? 'focus:border-0 focus:ring-0 border-0 outline-none ring-0 bg-gray-100' : ''
                        ]"
                        :readonly="isReadOnly"
                    >
                </textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex items-center justify-end">
                    <button
                        v-show="!isReadOnly"
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        save
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
        messege: 'This is the message',
        clients_date_and_time: '11/12/2025 T  02:44 AM',
        medical_Condition: '',
        medications: false,
        allergies: '',
       familyMedical_History: '',
        previousSurgeries_or_hospitalizations: '',
});

let isReadOnly =ref(true)
let response = ref('')
let bg = ref('')
let isAllergic = ref(false)
let isMedicalConditions = ref(false)

// Form submission
function submitForm() {
    axios.post('/patient-medical-history', {form})
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
let editHistory=()=>{
    isReadOnly.value = !isReadOnly
}

let updateAllergicStatus=()=>{
    isAllergic.value = !isAllergic.value
    console.log(isAllergic)
}
let updateMedicalConditionsStatus=()=>{
    isMedicalConditions.value = !isMedicalConditions.value
    console.log(isMedicalConditions)
}


</script>

<style scoped>
/* You can add additional styling here if needed */
</style>
