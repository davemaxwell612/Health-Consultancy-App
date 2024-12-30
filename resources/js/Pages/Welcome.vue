<template>
<!-- Navigation -->
 
<Customnav />

<!-- Welcome Banner Section -->
<section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Speak with a Doctor LIVE</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Many health concerns do not require an office doctor visit.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Book an Appointment
            </a>  
        </div>
    </div>
</section>

<!--  Service Steps (Guide) Section -->
<section class="bg-[url('https://apps.mobihealthinternational.com/images/bg-img-02.png')] flex justify-center">
  <div class="w-full max-w-screen-lg px-4 ">
    <div class="mb-8 p-8">
      <h1 class="text-5xl font-bold text-blue-600">How It Works</h1>
      <p class="text-2xl text-gray-800">Follow these simple steps to complete your journey:</p>
    </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Left Column -->
            <div class="p-6 ">
                <!-- Step 1 -->
                <div class="flex items-start">
                  <div class="relative flex-shrink-0">
                    <!-- Diamond-shaped container for image -->
                    <div class="w-16 h-16 transform rotate-45  flex items-center justify-center">
                      <img src="https://apps.mobihealthinternational.com/images/how-img-1.png" alt="Step 1 Icon" class="transform -rotate-45 w-30 h-30">
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-2xl text-blue-600 font-bold">1</h3>
                    <h4 class="text-lg font-semibold text-gray-800">Register and Login</h4>
                    <p class="text-gray-600">Go ahead. It’s simple and FREE.</p>
                  </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="p-6 ">
              <div class="flex items-start">
                <div class="relative flex-shrink-0">
                  <!-- Diamond-shaped container for image -->
                  <div class="w-16 h-16 transform rotate-45  flex items-center justify-center">
                    <img src="https://apps.mobihealthinternational.com/images/how-img-2.png" alt="Step 2 Icon" class="transform -rotate-45 w-30 h-30">
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-2xl text-blue-600 font-bold">2</h3>
                  <h4 class="text-lg font-semibold text-gray-800">Enter Your Search Criteria</h4>
                  <p class="text-gray-600">Input your symptoms, and we’ll connect you with the right specialist.</p>
                </div>
              </div>
            </div>

            <!-- Left Column -->
            <div class="p-6 ">
               <!-- Step 3 -->
                <div class="flex items-start">
                  <div class="relative flex-shrink-0">
                    <!-- Diamond-shaped container for image -->
                    <div class="w-16 h-16 transform rotate-45  flex items-center justify-center">
                      <img src="https://apps.mobihealthinternational.com/images/how-img-3.png" alt="Step 3 Icon" class="transform -rotate-45 w-30 h-30">
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-2xl text-blue-600 font-bold">3</h3>
                    <h4 class="text-lg font-semibold text-gray-800">Find a Doctor</h4>
                    <p class="text-gray-600">Browse profiles and book your appointment with ease.</p>
                  </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="p-6 ">
                <!-- Step 4 -->
              <div class="flex items-start">
                <div class="relative flex-shrink-0">
                  <!-- Diamond-shaped container for image -->
                  <div class="w-16 h-16 transform rotate-45  flex items-center justify-center">
                    <img src="https://apps.mobihealthinternational.com/images/how-img-4.png" alt="Step 4 Icon" class="transform -rotate-45 w-30 h-30">
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-2xl text-blue-600 font-bold">4</h3>
                  <h4 class="text-lg font-semibold text-gray-800">See Your Doctor</h4>
                  <p class="text-gray-600">Connect instantly with your doctor and get the care you need.</p>
                </div>
              </div>
            </div>

        </div>
    </div>
</section>


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
      <h2 class="text-3xl font-bold mb-4">
        Health Concerns That May Not Require Face-To-Face Hospital Visit
      </h2>
    <div class="relative bg-white rounded-lg shadow-lg p-6">
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

<!-- Services step -->
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">SKIP THE WAITING ROOM</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">No more long waiting lines and endless commutes! Plenty of FREE parking!.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Talk with a Doctor
            </a> 
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">  
            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="dark:hidden w-[272px] h-[572px]" alt="">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
                </div>
            </div>
        </div>                
    </div>
</section>



 <!-- Footer Section -->
 <footer class="bg-gray-900 text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-wrap justify-between">
          <!-- Logo and Description -->
          <div class="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 class="text-lg font-semibold text-white">Health</h2>
            <p class="mt-4 text-gray-400">
              We provide excellent Teleconsultation to our global clients with 21st century technology.
            </p>
            <div class="flex space-x-4 mt-6">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Footer Links -->
          <div class="w-full md:w-3/4 flex flex-wrap justify-between">
            <div class="w-1/2 md:w-1/4">
              <h3 class="text-white font-semibold">Contact Information</h3>
              <ul class="mt-4 space-y-2">
                <li><a href="#" class="hover:underline">Marketing</a></li>
                <li><a href="#" class="hover:underline">Analytics</a></li>
                <li><a href="#" class="hover:underline">Automation</a></li>
                <li><a href="#" class="hover:underline">Commerce</a></li>
              </ul>
            </div>
            <div class="w-1/2 md:w-1/4">
              <h3 class="text-white font-semibold">Useful Link</h3>
              <ul class="mt-4 space-y-2">
                <li><a href="#" class="hover:underline">Home</a></li>
                <li><a href="#" class="hover:underline">Services</a></li>
                <li><a href="#" class="hover:underline">Contact</a></li>
                <li><a href="#" class="hover:underline">Register</a></li>
                <li><a href="#" class="hover:underline">Login</a></li>

              </ul>
            </div>
            <div class="w-1/2 md:w-1/4">
              <h3 class="text-white font-semibold">Company</h3>
              <ul class="mt-4 space-y-2">
                <li><a href="#" class="hover:underline">About</a></li>
                <li><a href="#" class="hover:underline">Blog</a></li>
                <li><a href="#" class="hover:underline">Jobs</a></li>
              </ul>
            </div>
            <div class="w-1/2 md:w-1/4">
              <h3 class="text-white font-semibold">Legal</h3>
              <ul class="mt-4 space-y-2">
                <li><a href="#" class="hover:underline">Terms of Service</a></li>
                <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                <li><a href="#" class="hover:underline">License</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 text-center border-t border-gray-700 pt-6">
          <p class="text-gray-400">© 2024 Health, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>

</template>

<script>
import Customnav from '@/Components/Customnav.vue';

export default {
  components: {
    Customnav,
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
        {
          title:"HOME VISITS:",
          description:"No need to drive grandma miles to see her doctor, her doctor will be right in your home when you need him or her! We also provide additional services including home laboratory testing where possible, physiotherapy and home nursing care.",
        }
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
