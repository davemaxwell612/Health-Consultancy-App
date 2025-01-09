<script setup>
import Customnav from "@/Components/Customnav.vue"
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class=""
    >
        <div>
            <Customnav />
        </div>

        <div
            class=""
        >
            <slot />
        </div>
    </div>
</template>

