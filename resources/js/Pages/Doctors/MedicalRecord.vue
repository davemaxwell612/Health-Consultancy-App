
<template>
    <AuthenticatedLayout>
    <div class="overflow-x-auto">
        <h1 class="text-3xl font-semibold text-center text-teal-900 mb-4">Medical records</h1>
        <div class="w-full flex items-center justify-end my-3">
            <Link href="/doctor-update-medical-records">
                <button class="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                    Create a record
                </button>
            </Link>
        </div>
        <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead class="bg-gray-100">
            <tr class="text-left">
                <th class="py-2 px-4 border">S/N</th>
                <th class="py-2 px-4 border">Patient Name</th>
                <th class="py-2 px-4 border">Diagnosis</th>
                <th class="py-2 px-4 border">Medications</th>
                <th class="py-2 px-4 border">Test Result</th>
<!--                <th class="py-2 px-4 border">Test Image</th>-->
                <th class="py-2 px-4 border">Extra Notes</th>
                <th class="py-2 px-4 border">Conducted On</th>
                <th class="py-2 px-4 border">Month</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(record, index) in records" :key="record.id" class="hover:bg-gray-50">
                <td class="py-2 px-4 border">{{ index + 1 }}</td>
                <td class="py-2 px-4 border">{{ record.user.username }}</td>
                <td class="py-2 px-4 border">{{ record.diagnosis || 'N/A' }}</td>
                <td class="py-2 px-4 border">{{ record.medications || 'N/A' }}</td>
                <td class="py-2 px-4 border">{{ record.test_result || 'N/A' }}</td>
<!--                <td class="py-2 px-4 border text-center">-->
<!--                    <img v-if="record.test_image" :src="record.test_image" alt="Test Image" class="w-16 h-16 object-cover rounded-md shadow" />-->
<!--                    <span v-else>N/A</span>-->
<!--                </td>-->
                <td class="py-2 px-4 border">{{ record.extra_notes || 'N/A' }}</td>
                <td class="py-2 px-4 border">{{ record.conducted_on }}</td>
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
