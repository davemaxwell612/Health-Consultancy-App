<template>
    <GuestLayout>
    <section class="pl-4 pr-4 pb-4 pt-8 min-h-screen bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <!-- <div class="mt-6 ">
            
        </div> -->
        <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md transform transition duration-500 ease-in-out animate-fade-in delay-300">
            <h2 class="text-2xl font-semibold mb-4 text-center">Sign Up Form</h2>

            <!-- Display Validation Errors -->
            <div v-if="Object.keys(errors).length" class="bg-red-100 text-red-700 p-4 rounded-md mb-4">
                <p class="font-bold">There were some issues with your submission:</p>
                <ul>
                    <li v-for="(errorMessages, field) in errors" :key="field">
                        <span v-for="message in errorMessages" :key="message">- {{ message }}</span>
                    </li>
                </ul>
            </div>

            <form @submit.prevent="submitForm">
                <!-- Step 1: User Profile Information -->
                <div v-if="currentStep === 1">
                    <h3 class="text-xl font-bold mb-3">User Profile Information</h3>
                    <div class="mb-4">
                        <label class="block text-gray-700">Surname</label>
                        <input type="text" v-model="form.surname" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Other Names</label>
                        <input type="text" v-model="form.otherNames" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Address</label>
                        <input type="text" v-model="form.address" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block text-gray-700">Phone number</label>
                        <input type="text" id="phone" v-model="form.tel" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-700">Email address</label>
                        <input type="email" id="email" v-model="form.email" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" placeholder="john.doe@company.com" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Country</label>
                        <select v-model="selectedCountry" @change="updateStates" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required>
                            <option value="" disabled>Select a country</option>
                            <option v-for="(states, country) in countries" :key="country" :value="country">{{ country }}</option>
                        </select>
                    </div>
                    <div class="mb-4" v-if="stateOptions.length > 0">
                        <label class="block text-gray-700">State</label>
                        <select v-model="selectedState" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required>
                            <option value="" disabled>Select a state</option>
                            <option v-for="state in stateOptions" :key="state" :value="state">{{ state }}</option>
                        </select>
                    </div>
                </div>

                <!-- Step 2: Medical History and Information -->
                <div v-if="currentStep === 2">
                    <h3 class="text-xl font-bold mb-3">Medical History and Information</h3>
                    <div class="mb-4">
                        <label class="block text-gray-700">Medical Conditions</label>
                        <textarea v-model="form.medicalConditions" class="w-full border-gray-300 rounded-md p-2" rows="3"></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700">Medications</label>
                        <select v-model="form.medications" class="bg-gray-50 w-full border-gray-300 rounded-md p-2">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <!-- Step 3: Security and Authentication -->
                <div v-if="currentStep === 3">
                    <h3 class="text-xl font-bold mb-3">Security and Authentication</h3>
                    <div class="mb-4">
                        <label class="block text-gray-700">Username</label>
                        <input type="text" v-model="form.username" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700">Password</label>
                        <input type="password" v-model="form.password" id="password" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required />
                    </div>
                    <div class="mb-6">
                        <label for="confirm_password" class="block text-gray-700">Confirm password</label>
                        <input type="password" v-model="form.password_confirmation" id="confirm_password" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required />
                    </div>
                </div>

                <!-- Step 4: Additional Information -->
                <div v-if="currentStep === 4">
                    <h3 class="text-xl font-bold mb-3">Additional Information</h3>
                    <div class="mb-4">
                        <label class="block text-gray-700">Preferred Language</label>
                        <select v-model="form.preferredLanguage" class="bg-gray-50 w-full border-gray-300 rounded-md p-2">
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                    <div class="mb-4 flex items-start">
                        <input type="checkbox" v-model="form.termsAccepted" class="mr-2" required />
                        <label class="text-gray-700">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-between mt-6">
                    <button type="button" class="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600" @click="previousStep" v-if="currentStep > 1">Previous</button>
                    <button type="button" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" @click="nextStep" v-if="currentStep < totalSteps">Next</button>
                </div>
            </form>
        </div>
    </section>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';

import { ref, reactive } from 'vue';
import axios from 'axios';

const currentStep = ref(1);
const totalSteps = 4;

const form = reactive({
    surname: '',
    otherNames: '',
    address: '',
    tel: '',
    email: '',
    medicalConditions: '',
    medications: '',
    username: '',
    password: '',
    password_confirmation: '',
    preferredLanguage: '',
    termsAccepted: false,
});

const selectedCountry = ref('');
const selectedState = ref('');
const stateOptions = ref([]);

const countries = {
    USA: ['California', 'Texas', 'Florida', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    India: ['Maharashtra', 'Tamil Nadu', 'Delhi', 'Karnataka'],
    Nigeria: ['Abia','Adamawa', 'Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue',
                'Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','Gombe',
                'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
                'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers',
                'Sokoto','Taraba','Yobe','Zamfara', 'Abuja'
            ],
};

const errors = ref({}); // To store validation errors

const nextStep = () => {
    if (currentStep.value < totalSteps) currentStep.value++;
};

const previousStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};

const updateStates = () => {
    stateOptions.value = countries[selectedCountry.value] || [];
    selectedState.value = '';
};

const submitForm = async () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const formData = {
        ...form,
        country: selectedCountry.value,
        state: selectedState.value,
    };

    try {
        errors.value = {};
        const response = await axios.post('/register', formData, {
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Content-Type': 'application/json',
            },
        });
        alert('Form submitted successfully!');
        window.location.href = '/dashboard'
    } catch (error) {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors || {};
        } else {
            alert('An unexpected error occurred');
        }
    }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>