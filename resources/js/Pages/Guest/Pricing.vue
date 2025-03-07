<template>
    <GuestLayout>
<!-- Pakages Description -->
<!--<section class="py-12 bg-gray-50">-->
<!--    <div class="max-w-6xl mx-auto text-center">-->
<!--      <h2 class="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">Our Care Packages</h2>-->
<!--      <p class="text-gray-600 mb-12 animate-fade-in delay-200">-->
<!--        Experience top-tier healthcare with our comprehensive care packages designed to give you peace of mind.-->
<!--      </p>-->

<!--      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">-->
<!--        <div-->
<!--          v-for="(packageItem, index) in packages"-->
<!--          :key="index"-->
<!--          class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300"-->
<!--        >-->
<!--          <div class="bg-blue-500 text-white rounded-full p-4 mb-4">-->
<!--            <component :is="packageItem.icon" class="w-10 h-10"></component>-->
<!--          </div>-->
<!--          <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ packageItem.title }}</h3>-->
<!--          <p class="text-gray-600">{{ packageItem.description }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->



        <Plans
        :plans="plans"
        />


    </GuestLayout>
</template>

<script setup>

import GuestLayout from "@/Layouts/GuestLayout.vue";
import axios from "axios";
import {ref} from "vue";
import ResponseMessage from "@/Components/ResponseMessage.vue";
// import {
//   PhoneIcon,
//   VideoCameraIcon,
//   ClipboardDocumentCheckIcon,
//   HeartIcon,
//   CalendarIcon,
//   PresentationChartBarIcon
// } from "@heroicons/vue/24/solid";
import Plans from "@/Components/Plans.vue";
// const packages = ref([
//   {
//     title: "24/7 Access",
//     description: "Talk to our medical practitioners anytime you need support.",
//     image: "",
//     icon: PhoneIcon,
//   },
//   {
//     title: "Unlimited Calls",
//     description: "Enjoy unlimited monthly calls with doctors and care practitioners.",
//     image: "",
//     icon: VideoCameraIcon,
//   },
//   {
//     title: "Follow-ups & Support",
//     description: "Get regular check-ins and health monitoring.",
//     image: "",
//     icon: ClipboardDocumentCheckIcon,
//   },
//   {
//     title: "Private Recommendations",
//     description: "Receive private doctor recommendations securely.",
//     image: "",
//     icon: HeartIcon,
//   },
//   {
//     title: "Dedicated Care",
//     description: "Access professionals for personalized healthcare.",
//     image: "",
//     icon: CalendarIcon,
//   },
//   {
//     title: "Medication & Refills",
//     description: "Prompt drug prescriptions and scheduled refills.",
//     image: "",
//     icon: PresentationChartBarIcon,
//   },
// ]);

let props = defineProps({
    plans: Array
})





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
