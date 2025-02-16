<template>
    <GuestLayout>
<!-- Pakages Description -->
<section class="py-12 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">Our Care Packages</h2>
      <p class="text-gray-600 mb-12 animate-fade-in delay-200">
        Experience top-tier healthcare with our comprehensive care packages designed to give you peace of mind.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div
          v-for="(packageItem, index) in packages"
          :key="index"
          class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300"
        >
          <div class="bg-blue-500 text-white rounded-full p-4 mb-4">
            <component :is="packageItem.icon" class="w-10 h-10"></component>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ packageItem.title }}</h3>
          <p class="text-gray-600">{{ packageItem.description }}</p>
        </div>
      </div>
    </div>
  </section>
  
  <section class="bg-gray-50 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-800">Our Pricing Plans</h1>
      <p class="text-gray-600 mt-2">Choose a plan that fits your needs</p>
    </div>
        <ResponseMessage
        :response="response"

        :class="bg"
        />

    <div class="flex justify-center items-center flex-wrap gap-6">
      <div
        v-for="(plan, index) in plans"
        :key="index"

        @click="choosePlan(plan, index)"
        class="bg-white rounded-2xl shadow-lg p-6 w-80 hover:scale-105 hover:shadow-xl transform transition duration-500 ease-in-out"
      >
        <h2 class="text-xl font-bold text-teal-600 mb-4">{{ plan.name }}</h2>
        <p class="text-gray-600 mb-4">{{ plan.description }}</p>
        <p class="text-4xl font-extrabold text-gray-800"
             v-for="billing in plan.billing_cycle"
>
          {{ billing.price }}

        </p>
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
            {{ feature.feature_name }}
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
import axios from "axios";
import {ref} from "vue";
import ResponseMessage from "@/Components/ResponseMessage.vue";

const packages = ref([
  {
    title: "24/7 Access",
    description: "Talk to our medical practitioners anytime you need support.",
    image: "",
  },
  {
    title: "Unlimited Calls",
    description: "Enjoy unlimited monthly calls with doctors and care practitioners.",
    image: "",
  },
  {
    title: "Follow-ups & Support",
    description: "Get regular check-ins and health monitoring.",
    image: "", 
  },
  {
    title: "Private Recommendations",
    description: "Receive private doctor recommendations securely.",
    image: "",
  },
  {
    title: "Dedicated Care",
    description: "Access professionals for personalized healthcare.",
    image: "",
  },
  {
    title: "Medication & Refills",
    description: "Prompt drug prescriptions and scheduled refills.",
    image: "", 
  },
]);

let props = defineProps({
    plans: Array
})

let response = ref()
let bg = ref()

let choosePlan = (plan, index) => {
        axios.post('/patient-choose-plan', {plan})
            .then(res =>{
                if (res.data.message){
                    response.value = res.data.message;
                    bg.value = 'bg-green-400'
                    setTimeout(() => {
                        response.value = '';
                        bg.value = ''
                    }, 3000);
                }
            })
            .catch(err=>{
                if (err){
                    response.value ="Couldn't save Plan \n Please make sure Plan doesn't already exist";
                    bg.value = 'bg-red-400'
                    setTimeout(() => {
                        response.value = '';
                        bg.value = ''
                    }, 3000);
                }
            })
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
