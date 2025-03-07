<template>
  <GuestLayout>
  
  <Carousel />
  
    <section
      ref="sectionRef"
      :class="[
        'transform transition duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ]"
      class="bg-gray-100 py-12 px-6 lg:px-20"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800">
          Welcome to <span class="text-blue-500">Timeless:</span> Your Health, Simplified
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          At Timeless, we bring healthcare to your fingertips. Our telemedicine app connects you with certified doctors, therapists, and healthcare professionals anytime, anywhere.
        </p>
      </div>
  
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800">Quick Consultations</h2>
            <p class="mt-2 text-gray-600">
              Get expert medical advice in minutes, anytime and anywhere.
            </p>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800">Prescription Refills</h2>
            <p class="mt-2 text-gray-600">
              Enjoy hassle-free prescription renewals from the comfort of your home.
            </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800">Affordable Healthcare</h2>
            <p class="mt-2 text-gray-600">
              Experience secure, convenient, and budget-friendly healthcare.
            </p>
          </div>
        </div>
      </div>
  
      <div class="mt-16 text-center">
        <Link href="/register"
            class="w-full sm:w-auto inline-block bg-blue-500 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition">
          Get Started Today
        </Link>
      </div>
    </section>
  
  
  <!--  Service Steps (Guide) Section -->
  <section
  class="bg-[url('https://apps.mobihealthinternational.com/images/bg-img-02.png')] flex justify-center transform transition duration-500 ease-in-out animate-fade-in delay-300">
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

  <Organizationservices />
  
  <!-- ==============Healthsymp component============== -->
  <Healthsymp />
  
  <!-- Services step -->
  <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mb-8 mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">SKIP THE WAITING ROOM</h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">No more long waiting lines and endless commutes! Plenty of FREE parking!.</p>
              <div class="flex flex-wrap justify-center gap-4 mt-4">
                <Link href="/register" class="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Get started
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
                <Link href="login" class="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Talk with a Doctor
                </Link>
              </div>
  
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

  <!-- ===============Access Care Section===================== -->
  <section class="flex flex-col md:flex-row items-center px-8 md:px-20 py-16 space-y-10 md:space-y-0">
    <!-- Left Image -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img src="https://healthconnect247.com/wp-content/uploads/2021/11/8.png" alt="Doctor Consultation" class="max-w-full h-auto">
    </div>

    <!-- Right Content -->
    <div class="w-full md:w-1/2 text-center md:text-left px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
        Access to care for <span class="text-blue-600">everybody</span>
      </h2>
      <p class="text-gray-600 mt-4 text-lg leading-relaxed">
        You can speak to a doctor, psychologist, and wellness expert via audio and video call options.
      </p>

      <!-- Feature List -->
      <div class="mt-8 space-y-8">
        
        <div class="flex items-start space-x-5">
          <span class="p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl">
            🎥
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-lg">Speak to a Doctor Immediately</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              You can speak to a doctor via the in-app video option at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- ===============Access Welness Section===================== -->
<section class="flex flex-col md:flex-row items-center px-6 md:px-16 py-12 space-y-8 md:space-y-0">
    <!-- Left Image -->
   
    <div class="w-full md:w-1/2 text-center md:text-left px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
        Access to Wellness <span class="text-blue-600">Programs</span>
      </h2>
      <p class="text-gray-600 mt-4 text-lg leading-relaxed">
        You can consult with a clinical psychologist for all mental health issues including depression, anxiety, suicidal tendency, panic attack and lots more.
      </p>

      <!-- Feature List -->
      <div class="mt-8 space-y-8">
        <div class="flex items-start space-x-5">
          <span class="p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl">
            💬
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-lg">Speak with a Pschologist</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              Counselling for your mental health, wellness and psychological wellbeing
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-5">
          <span class="p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl">
            ❤️
          </span>
          <div>
            <h3 class="font-semibold text-gray-900 text-lg">Customised Meal Plans</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              We provide training for employees to promote mental wellness and productivity
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 flex justify-center">
      <img src="https://healthconnect247.com/wp-content/uploads/2021/11/8.png" alt="Doctor Consultation" class="max-w-full h-auto">
    </div>

    <!-- Right Content -->
  </section>
    
  <div>
        <TawkToChat />
        <router-view />
    </div>
  <!-- ======================= Meet the Team slides================ -->
    <Team />
  <!-- =============================Footer========================== -->
      </GuestLayout>
  </template>
  
  
  
  <script>
  import Customfooter from '@/Components/Customfooter.vue';
  import Customnav from '@/Components/Customnav.vue';
  import Healthsymp from '@/Components/Healthsymp.vue';
  import Carousel from "@/Components/Carousel.vue"
  import Team from '@/Components/Team.vue';
  import Organizationservices from "@/Components/Organizationservices.vue";
  
  export default {
    components: {
      Customnav,
      Healthsymp,
      Customfooter,
      Carousel,
      Team,
      Organizationservices,
    },
    data() {
      return {
  
        isVisible: false,
      };
    },
    mounted() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              observer.disconnect(); // Stop observing once visible
            }
          });
        },
        { threshold: 0.1 }
      );
  
      observer.observe(this.$refs.sectionRef);
  
    },
  
    methods: {
  
    }
  };
  </script>
  
  <script setup>
    import TawkToChat from "@/components/TawkToChat.vue";
    import { Link } from '@inertiajs/vue3';
    import GuestLayout from "@/Layouts/GuestLayout.vue";
  </script>
  
  <style>
    .clip-slant {
      clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
    }
  
  </style>
  
  