<template>
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
                        <Link href="/" class="text-gray-400 hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96z"></path>
                            </svg>
                        </Link>
                        <Link href="/" class="text-gray-400 hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                <!-- Footer Links -->
                <div class="w-full md:w-3/4 flex flex-wrap justify-between">
                    <div class="w-1/2 md:w-1/4">
                        <h3 class="text-white font-semibold">Contact Information</h3>
                        <ul class="mt-4 space-y-2">
                            <li><Link href="/marketing" class="hover:underline">Marketing</Link></li>
                            <li><Link href="/analytics" class="hover:underline">Analytics</Link></li>
                            <li><Link href="/automation" class="hover:underline">Automation</Link></li>
                            <li><Link href="/commerce" class="hover:underline">Commerce</Link></li>
                        </ul>
                    </div>
                    <div class="w-1/2 md:w-1/4">
                        <h3 class="text-white font-semibold">Useful Link</h3>
                        <ul class="mt-4 space-y-2">
                            <li><Link href="/home" class="hover:underline">Home</Link></li>
                            <li><Link href="/services" class="hover:underline">Services</Link></li>
                            <li><Link href="/contact" class="hover:underline">Contact</Link></li>
                            <li><Link href="/register" class="hover:underline">Register</Link></li>
                            <li><Link href="/login" class="hover:underline">Login</Link></li>

                        </ul>
                    </div>
                    <div class="w-1/2 md:w-1/4">
                        <h3 class="text-white font-semibold">Company</h3>
                        <ul class="mt-4 space-y-2">
                            <li><Link href="/about" class="hover:underline">About</Link></li>
                            <li><Link href="/blog" class="hover:underline">Blog</Link></li>
                            <li><Link href="/jobs" class="hover:underline">Jobs</Link></li>
                        </ul>
                    </div>
                    <div class="w-1/2 md:w-1/4">
                        <h3 class="text-white font-semibold">Legal</h3>
                        <ul class="mt-4 space-y-2">
                            <li><Link href="/terms-of-service" class="hover:underline">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" class="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/license" class="hover:underline">License</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-12 text-center border-t border-gray-700 pt-6">
                <p class="text-gray-400">© {{ currentYear }} Health, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {ref} from "vue";
import {Link} from "@inertiajs/vue3";

const currentYear = ref(new Date().getFullYear());

</script>
