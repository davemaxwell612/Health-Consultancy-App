<template>
    <AuthenticatedLayout>
    <div class="overflow-x-auto">
        <h1 class="text-3xl font-bold text-teal-700 mb-6 text-center">
            Your Complains/Messages
        </h1>

            <div class="flex justify-end mt-4">
                    <Link href="/patient-messages-create" class="text-white">
                <button class="bg-blue-500 my-3 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
                    Lay a Complain
                </button>
                    </Link>
            </div>


        <table class="min-w-full table-auto border-collapse">
            <thead class=" bg-gray-300">
            <tr class="border-y-2 bg-gray-300">
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">S/N</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Subject</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Message</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Department</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Responded By</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date/Time</th>
                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">View Reply</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(complain, index) in complains" :key="complain.id" class="border-b-2">
                <td class="px-4 py-2 text-sm text-gray-800">{{ index + 1 }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">{{ complain.subject }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">{{ complain.message }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">
                    {{ complain.department ? complain.department.name : 'N/A' }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-800">{{ complain.status }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">
                    {{ complain.responded_by ? complain.responded_by.name : 'Not Responded' }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-800">
                    {{ new Date(complain.created_at).toLocaleString() }}
                </td>
                <td class="px-4 py-2 text-sm text-gray-800 flex flex-col ">
                    <Link
                        :href="{ name: 'complains.view', params: { id: complain.id } }"
                        class="text-blue-500 hover:text-blue-700 border-b-2"
                    >
                        {{ complain.responded_by ? 'View Reply': 'View Reply' }}

                    </Link>
                    <Link
                        :href="{ name: 'complains.view', params: { id: complain.id } }"
                        class="text-red-500 hover:text-red-700 border-b-2"
                    >
                        Delete

                    </Link>
                    <Link
                        :href="{ name: 'complains.view', params: { id: complain.id } }"
                        class="text-green-500 hover:text-green-700 border-b-2"
                    >
                        Edit

                    </Link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { defineProps } from 'vue';
import {Link} from "@inertiajs/vue3";


let props = defineProps({
    complains: Object
})
</script>

<style scoped>
/* Optional styles */
</style>
