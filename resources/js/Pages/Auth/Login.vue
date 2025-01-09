<template>
   <GuestLayout>
   <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
      <div class="w-full max-w-md bg-white p-6 sm:p-8 rounded shadow">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
        <form @submit.prevent="handleLogin">
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email/Phone</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email Or Phone"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <!-- Password -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
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
          </p>
        </form>
      </div>
    </div>
</GuestLayout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Simulate login logic
        console.log('Logging in with:', this.email, this.password);
        // Add your API call or authentication logic here
      },
    },
  };
  </script>
  
<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
</script>