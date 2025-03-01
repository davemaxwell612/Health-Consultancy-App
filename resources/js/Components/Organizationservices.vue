<template>
    <section class="w-full px-4 py-10 bg-white transform transition duration-500 ease-in-out animate-fade-in delay-300">
      <h2 class="text-3xl font-bold text-center text-gray-900">Services We Offer</h2>
  
      <!-- Tabs Navigation (Scrollable on Mobile) -->
      <div class="flex overflow-x-auto space-x-2 md:justify-center mt-6 px-2 md:px-0">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="activeTab = index"
          class="px-4 py-2 whitespace-nowrap font-semibold rounded-lg transition duration-300 flex-shrink-0"
          :class="activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          {{ tab.name }}
        </button>
      </div>
  
      <!-- Tab Content (Stacked on Mobile, Side-by-Side on Larger Screens) -->
      <div class="mt-10 flex flex-col md:flex-row items-center md:space-x-10">
        
        <!-- Dynamic Image (Full Width on Mobile) -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img :src="tabs[activeTab].image" alt="Service Image" 
            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg transition duration-500">
        </div>
  
        <!-- Tab Description -->
        <div class="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4 md:px-0">
          <h3 class="text-xl font-semibold text-gray-900">{{ tabs[activeTab].title }}</h3>
          <p class="mt-4 text-gray-600">{{ tabs[activeTab].description }}</p>
          <button class="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700">
            Learn More
          </button>
        </div>
  
      </div>
    </section>
  </template>
   
   <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          {
            name: "Individuals",
            title: "Personalized Healthcare Services",
            description: "Get direct access to medical consultations, wellness programs, and health monitoring tailored to your needs.",
            image: ""
          },
          {
            name: "Partners",
            title: "Partner Healthcare Services",
            description: "Get direct access to medical consultations, wellness programs, and health monitoring tailored to your needs.",
            image: ""
          },
          {
            name: "Family",
            title: "Family Care Services",
            description: "Enabling telecom providers to integrate healthcare services into their digital ecosystem.",
            image: ""
          },
          {
            name: "Employers",
            title: "Corporate Healthcare Solutions",
            description: "We provide comprehensive healthcare services for employees to enhance productivity and well-being.",
            image: ""
          },
          {
            name: "HMO",
            title: "Managed Care for Organizations",
            description: "Our platform consolidates insurance efforts, helping HMOs optimize client retention and control medical loss ratios.",
            image: ""
          },
          {
            name: "Governments",
            title: "Public Health Initiatives",
            description: "We collaborate with government agencies to provide accessible healthcare solutions for citizens.",
            image: ""
          },
          {
            name: "NGOs",
            title: "Healthcare Support for NGOs",
            description: "We partner with NGOs to provide medical assistance and healthcare programs to communities in need.",
            image: ""
          }
          
        ]
      };
    }
  };
  </script>
  