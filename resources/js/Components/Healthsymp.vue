<template>
    <!-- ============================ -->
<div class="relative bg-teal-500 text-white py-20 clip-slant">
  <!-- Slanted background effect -->
  <div class="absolute inset-0 bg-teal-500 -z-10 clip-slant"></div>

  <div class="container mx-auto flex flex-wrap">
    <!-- Icons Section -->
    <div class="w-full md:w-1/3 flex flex-wrap p-8 justify-center md:justify-end gap-4">
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img.png">
        </div>
        <p class="mt-2 text-lg">Skin</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img2.png">
        </div>
        <p class="mt-2 text-lg">Sick Child</p>
      </div>
      <!-- Repeat for other icons -->
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img3.png">
        </div>
        <p class="mt-2 text-lg">Female Health</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img4.png">
        </div>
        <p class="mt-2 text-lg">Cold & Flu</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img5.png">
        </div>
        <p class="mt-2 text-lg">Stomach</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-md">
          <img src="https://apps.mobihealthinternational.com/images/2nd-slider-img6.png">
        </div>
        <p class="mt-2 text-lg">Labs Review</p>
      </div>
    </div>

    
    <!-- Text Carousel Section -->
    <div class="w-full max-w-md mx-auto">
      <div class="p-4">
        <h2 class="text-3xl font-bold mb-4">
        Health Concerns That May Not Require Face-To-Face Hospital Visit
      </h2>
      </div>
     
    <div class="relative sm:p-8 bg-white rounded-lg shadow-lg p-6">
      <!-- Carousel Content -->
       
      <div class="text-justify text-lg font-medium text-gray-800">
        <div v-for="(item, index) in items" :key="index" v-show="currentIndex === index">
         <h3>{{ item.title }}</h3>
         <p>{{ item.description }}</p> 
        </div>
      </div>

      <!-- Carousel Controls -->
      <div class="mt-4 flex justify-between items-center">
        <button @click="prevItem" class="text-gray-500 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextItem" class="text-gray-500 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      items: [
        {
          title: "LABORATORY MEDICINE:",
          description:"Connect with our trusted laboratories near you and get genuine quality laboratory and radiologic investigations done.",
          
        },
        {
          title:"MEDICATION DELIVERY:",
          description:"No long walks to or waits at the hospital pharmacy anymore, have your drugs delivered to your doorstep only from our trusted pharmacies. Limits your exposure to counterfeit medicines and unqualified medical personnel.",
        },
        {
          title:"SAFE MEDICAL RECORDS:",
          description:"Have your medical data in a safe place, where you can access or share anytime, anywhere. We take data protection seriously and will not share your medical data or personal data without your consent. Our Electronic Medical record and video software are encrypted end to end for your safety, security and privacy.",
        },
        
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevItem() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
  }
};
</script>

<style>
  .clip-slant {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  }
  
</style>