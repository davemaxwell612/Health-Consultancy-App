<template>
    <div class="flex">
        <!-- Sidebar Section -->
        <div
            :class="[
        'fixed p-6 z-50 bg-gray-700 flex h-screen flex-col items-start justify-between transition-transform duration-300 lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64'
      ]"
        >
            <!-- Render Sidebars Based on Role -->
            <AdminSideBar v-if="$page.props.auth.user.user_role === 'admin'" />
            <DoctorsSideBar v-else-if="$page.props.auth.user.user_role === 'doctor'" />
            <PatientSideBar v-else />

            <Logout />
        </div>

        <!-- Sidebar Toggle Button (Visible on Mobile/Tablet Only) -->
        <button
            class="lg:hidden fixed top-4 left-4 bg-gray-700 text-white p-2 rounded-full z-50 shadow-md focus:outline-none"
            @click="toggleSidebar"
        >
            <!-- Icon: Hamburger Menu or Close -->
            <span v-if="!isSidebarOpen">☰</span>
            <span v-else>✕</span>
        </button>

        <!-- Main Content -->
        <div
            class="px-3 py-12 bg-gray-100 w-full transition-all duration-300"
            :class="{'ml-0': !isSidebarOpen && !isLargeScreen, 'lg:ml-64': true}"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Logout from "@/Components/Logout.vue";
import DoctorsSideBar from "@/Components/DoctorsSideBar.vue";
import PatientSideBar from "@/Components/PatientSideBar.vue";
import AdminSideBar from "@/Components/AdminSideBar.vue";
import { ref, onMounted } from "vue";

// Reactive state to control sidebar visibility
const isSidebarOpen = ref(false);
const isLargeScreen = ref(false);

// Function to toggle sidebar visibility
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

// Detect screen size and set sidebar visibility for large devices
const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024; // lg breakpoint
    if (isLargeScreen.value) {
        isSidebarOpen.value = true; // Always open on large devices
    } else {
        isSidebarOpen.value = false; // Hidden by default on small devices
    }
};

// Add event listener to handle window resizing
onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
</script>
