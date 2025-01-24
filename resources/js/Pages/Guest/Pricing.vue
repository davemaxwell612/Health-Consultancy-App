<template>
    <GuestLayout>

  <section class="bg-gray-50 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-800">Our Pricing Plans</h1>
      <p class="text-gray-600 mt-2">Choose a plan that fits your needs</p>
    </div>

    <div class="flex justify-center items-center flex-wrap gap-6">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="bg-white rounded-2xl shadow-lg p-6 w-80 hover:scale-105 hover:shadow-xl transform transition duration-500 ease-in-out"
      >
        <h2 class="text-xl font-bold text-teal-600 mb-4">{{ plan.name }}</h2>
        <p class="text-gray-600 mb-4">{{ plan.description }}</p>
        <p class="text-4xl font-extrabold text-gray-800">{{ plan.price }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ plan.billingCycle }}</p>
        <ul class="mt-6 space-y-3 text-gray-600">
          <li v-for="(feature, index) in plan.features" :key="index" class="flex items-center">
            <svg
              class="w-5 h-5 text-teal-500 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            {{ feature }}
          </li>
        </ul>
        <button
          class="bg-teal-500 text-white font-semibold rounded-lg py-2 px-4 mt-6 hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-200 transition duration-300"
        >
          Choose Plan
        </button>
      </div>
    </div>
  </section>


    </GuestLayout>
</template>

<script setup>

import GuestLayout from "@/Layouts/GuestLayout.vue";
</script>
<script>
export default {
  name: "PricingPage",
  data() {
    return {
      plans: [
        {
          name: "Basic Plan",
          description: "Perfect for individuals starting out.",
          price: "$19",
          billingCycle: "per month",
          features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
          name: "Pro Plan",
          description: "Best for professionals and small teams.",
          price: "$49",
          billingCycle: "per month",
          features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        },
        {
          name: "Enterprise Plan",
          description: "Ideal for large organizations.",
          price: "$99",
          billingCycle: "per month",
          features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        },
      ],
    };
  },
};
</script>


<style scoped>

</style>
