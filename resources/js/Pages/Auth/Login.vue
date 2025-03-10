<template>
    <GuestLayout>
        <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
            <div class="w-full max-w-md bg-white p-6 sm:p-8 rounded shadow transition duration-500 ease-in-out animate-fade-in delay-300">
                <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
                <form @submit.prevent="submit">

                    <div class=" py-8">

                        <ul
                            v-if="errors"
                            v-for="error in errors"
                            class="bg-red-200 text-red-700"
                        >
                            <li>{{error}}</li>
                        </ul>
                        <ul
                            v-else-if="success"
                            class="bg-green-200 text-green-700"
                        >
                            <li>{{success}}</li>
                        </ul>
                    </div>

                    <!-- Email -->
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email/Phone</label>
                        <input
                            v-model="form.id"
                            type="text"
                            id="email"
                            placeholder="Enter your email Or Phone"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <!-- Password -->
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            v-model="form.password"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <!-- Submit Button -->
                    <div class="mb-4">
                        <button
                            type="submit"
                            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </div>

                    <!-- Forgot Password Link -->
                    <p class="text-sm text-gray-600 text-center">
                        <a href="#" class="text-blue-600 hover:underline">Forgot your password?</a>
                        <Link></Link>
                    </p>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import {useForm} from "@inertiajs/vue3";
import axios from "axios";
import {ref} from "vue";

let form = useForm({
    id: '',
    password: '',
})
let errors = ref([])
let success = ref([])

const submit = async () => {
    try {
        await axios.post('/login', form)
            .then(res=>{
                if (res.status === 'OK')
                    success.value = 'Login Successfull!';
                window.location.href = '/dashboard'
            });
    } catch (error) {
        if (error.response && error.response.status === 422) {
            errors.value = error.response.data.errors || {};
        } else {
            alert('An unexpected error occurred');
        }
    };
}
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