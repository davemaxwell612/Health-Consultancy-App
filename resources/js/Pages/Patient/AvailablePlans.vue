<template>
        <AuthenticatedLayout>
            <Plans
            :plans="plans"
            />

        </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Plans from "@/Components/Plans.vue";

let props = defineProps({
    plans: Array,
})
</script>
