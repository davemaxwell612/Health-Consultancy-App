<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- Logo Section -->
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="block text-green-600 text-4xl">🚑</span>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link href="/">Timeless Horizon Limited</Link>
          </span>
        </a>
        
        <!-- Hamburger Menu Button -->
        <button
          @click="toggleDrawer"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <!-- Large screen Nav -->
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link href="/">Home</Link>
                  </a>
                </li>    
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link href="register">Register</Link>
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link href="login">Login</Link>
                  </a>
                </li>
            </ul>
            </div>
      </div>
  
      <!-- Sliding Drawer -->
      <div
        :class="['fixed top-0 left-0 h-full bg-gray-50 dark:bg-gray-800 z-50 transform transition-transform', isDrawerOpen ? 'translate-x-0' : '-translate-x-full']"
        class="w-64"
      >
        <div class="p-4">
          <button
            @click="toggleDrawer"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul class="font-medium p-4 space-y-4">
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" >
              <Link href="/">Home</Link> 
            </a>
          </li>
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Services</a>
          </li>
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" >Contact</a>
          </li>
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500" >
              <Link href="register">Register</Link> 
            </a>
          </li>
          <li>
            <a href="#" class="block text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">
              <Link href="login">Longin</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  </template>
  
  <script setup>
    import { Link } from '@inertiajs/vue3';
  </script>
  
  <script>
  export default {
       data() {
      return {
        isDrawerOpen: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ensure the sliding drawer animation works smoothly */
  </style>
  