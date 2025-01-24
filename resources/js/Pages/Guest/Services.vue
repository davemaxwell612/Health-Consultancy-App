<template>
    <GuestLayout>
      <div class="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 md:px-12">
        <!-- Heading Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-extrabold text-gray-800">
            What We Offer
          </h1>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover a variety of services designed to help you achieve your goals with ease and expertise.
          </p>
        </div>
  
        <!-- Services Section -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- Service Card 1 -->
          <div
            class="group bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            <div
              class="mx-auto bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500"
            >
              <svg
                class="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 15a4 4 0 0 1 8 0v6H3v-6zm10 6h8v-6a4 4 0 1 0-8 0v6z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Service Title Here</h3>
            <p class="text-gray-500 mt-4">
                Service description will go here. A brife description of the the service.
            </p>
          </div>
  
          <!-- Service Card 2 -->
          <div
            class="group bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            <div
              class="mx-auto bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500"
            >
              <svg
                class="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75H6.75M9.75 12.75H6.75m6.75 2.25v3.75m0-3.75H15a2.25 2.25 0 1 0 0-4.5h-3.75V9a2.25 2.25 0 1 0 0-4.5H8.25"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Service Title Here</h3>
            <p class="text-gray-500 mt-4">
                Service description will go here. A brife description of the the service.
            </p>
          </div>
  
          <!-- Service Card 3 -->
          <div
            class="group bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            <div
              class="mx-auto bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500"
            >
              <svg
                class="w-10 h-10 text-yellow-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10l1.664 7.325c.344 1.515 1.738 2.675 3.283 2.675h8.106c1.545 0 2.939-1.16 3.283-2.675L21 10H3zM8 3a3 3 0 1 1 6 0h-6z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Service Title Here</h3>
            <p class="text-gray-500 mt-4">
              Service description will go here. A brife description of the the service.
            </p>
          </div>
        </div>
      </div>
    </GuestLayout>
  </template>
  
  <script>
  import GuestLayout from "@/Layouts/GuestLayout.vue";
  
  export default {
    components: {
      GuestLayout,
    },
  };
  </script>
  
  <style>
  /* Optional: Additional custom styles for smoother design */
  </style>
  