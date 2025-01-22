<template>
<!-- Navigation -->
 
<Customnav />

<!-- Welcome Banner Section -->
<!-- <section 
v-show="isLoaded" 
:class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }" 
class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Speak with a Doctor LIVE</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Many health concerns do not require an office doctor visit.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="register" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
            <Link href="login" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Book an Appointment
            </Link>  
        </div>
    </div>
</section> -->
<Carousel />
<section class="bg-[url('https://apps.mobihealthinternational.com/images/bg-img-02.png')] py-16 px-6 sm:px-12 md:px-24 lg:px-36">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-extrabold mb-6">Welcome to Timeless: Your Health, Simplified</h1>
    <p class="text-lg mb-8 leading-relaxed">
      At Timeless, we bring healthcare to your fingertips. Our telemedicine app connects you with certified doctors, therapists, and healthcare professionals anytime, anywhere.
    </p>
    <p class="text-lg mb-8 leading-relaxed">
      Whether you need a quick consultation, prescription refills, or expert advice, we’re here to provide personalized care that fits into your busy life.
    </p>
    <p class="text-lg mb-8 leading-relaxed">
      Experience secure, convenient, and affordable healthcare without leaving home. Your journey to better health starts here.
    </p>
    <div class="mt-10">
      <a href="#get-started" class="inline-block bg-white text-blue-700 font-medium text-lg px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
        Get Started
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

<!-- ==============Healthsymp component============== -->
<Healthsymp />

<!-- Services step -->
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mb-8 mr-auto place-self-center lg:col-span-7">
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

<!-- =============================Footer========================== -->
 <Customfooter />

</template>


<script>
import Customfooter from '@/Components/Customfooter.vue';
import Customnav from '@/Components/Customnav.vue';
import Healthsymp from '@/Components/Healthsymp.vue';
import Carousel from "@/Components/Carousel.vue"

export default {
  components: {
    Customnav,
    Healthsymp,
    Customfooter,
    Carousel,
  },
  data() {
    return {
      isLoaded: false,     
    };
  },
  mounted() {
    setTimeout(()=>{
      this.isLoaded = true;
    }, 200);
  },
  methods: {
    
  }
};
</script>

<script setup>
  import { Link } from '@inertiajs/vue3';
</script>

<style>
  .clip-slant {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  }
  
</style>
