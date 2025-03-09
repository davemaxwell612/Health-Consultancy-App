
<template>
    <AuthenticatedLayout>
        <div class="overflow-x-auto">
            <h1 class="text-3xl font-semibold text-center text-teal-900 mb-4">Your medical records</h1>
            <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead class="bg-gray-100">
                <tr class="text-left">
                    <th class="py-2 px-4 border">S/N</th>
                    <th class="py-2 px-4 border">Diagnosis</th>
                    <th class="py-2 px-4 border">Medications</th>
                    <th class="py-2 px-4 border">Test Result</th>
                    <!--                <th class="py-2 px-4 border">Test Image</th>-->
                    <th class="py-2 px-4 border">Extra Notes</th>
                    <th class="py-2 px-4 border">Conducted On</th>
                    <th class="py-2 px-4 border">Conducted by Dr.</th>
                    <th class="py-2 px-4 border">Month</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(record, index) in records" :key="record.id" class="hover:bg-gray-50">
                    <td class="py-2 px-4 border">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border">{{ record.diagnosis || 'N/A' }}</td>
                    <td class="py-2 px-4 border">{{ record.medications || 'N/A' }}</td>
                    <td class="py-2 px-4 border">{{ record.test_result || 'N/A' }}</td>
                    <td class="py-2 px-4 border">{{ record.extra_notes || 'N/A' }}</td>
                    <td class="py-2 px-4 border">{{ record.conducted_on }}</td>
                    <td class="py-2 px-4 border">{{ record.doctor_name }}</td>
                    <td class="py-2 px-4 border">{{ record.month }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Link} from "@inertiajs/vue3";
defineProps({
    records: Array,
});
</script>

<style scoped>
th, td {
    text-align: left;
}
</style>
