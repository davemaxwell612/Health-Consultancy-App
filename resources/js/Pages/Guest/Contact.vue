<template>
    <GuestLayout>
  <div class="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-12 px-6">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-gray-800">Get in Touch</h1>
      <p class="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
        We're here to help you with any questions or concerns. Reach out and let’s connect!
      </p>
    </div>

    <!-- Contact Section -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="bg-white shadow-md rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800">Contact Information</h2>
        <p class="text-gray-600 mt-4">
          Feel free to reach out through any of the channels below. We're excited to hear from you!
        </p>
        <div class="mt-6 space-y-4">
          <!-- Phone -->
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10l1.664 7.325c.344 1.515 1.738 2.675 3.283 2.675h8.106c1.545 0 2.939-1.16 3.283-2.675L21 10H3zM8 3a3 3 0 1 1 6 0h-6z" />
            </svg>
            <span class="text-gray-800">+2347071829712</span>
          </div>
          <!-- Email -->
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.893 4.757c.718.433 1.496.433 2.214 0L21 8M3 8l7.893 4.757c.718.433 1.496.433 2.214 0L21 8" />
            </svg>
            <span class="text-gray-800">info@timelesshorizon.com.ng</span>
          </div>
          <!-- Location -->
          <div class="flex items-center space-x-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c4.418 0 8 3.582 8 8s-8 12-8 12S4 14.418 4 10s3.582-8 8-8z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
            <span class="text-gray-800">123 Main Street, Cityville, Country</span>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-white shadow-md rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
        <form @submit.prevent="submitForm" class="mt-6 space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-gray-600">Your Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Enter your name"
              class="w-full border-gray-300 rounded-lg shadow-sm p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-600">Your Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Enter your email"
              class="w-full border-gray-300 rounded-lg shadow-sm p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Message -->
          <div>
            <label for="message" class="block text-gray-600">Your Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Write your message here"
              rows="5"
              class="w-full border-gray-300 rounded-lg shadow-sm p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</GuestLayout>
</template>

<script setup>

import GuestLayout from "@/Layouts/GuestLayout.vue";
</script>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Example: Handle form submission logic here
      alert("Your message has been sent!");
    },
  },
};
</script>

<style>

</style>
