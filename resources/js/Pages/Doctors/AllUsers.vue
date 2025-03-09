<template>
    <AuthenticatedLayout>

    <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 rounded-lg shadow-md">
            <!-- Table Header -->
            <thead class="bg-gray-800 text-white">
            <tr>
                <th class="px-4 py-2 text-left">Surname</th>
                <th class="px-4 py-2 text-left">Other Names</th>
                <th class="px-4 py-2 text-left">Tel</th>
                <th class="px-4 py-2 text-left">Email</th>
                <th class="px-4 py-2 text-left">Username</th>
                <th class="px-4 py-2 text-left">Country, State</th>
                <th class="px-4 py-2 text-left">Created At</th>
                <th class="px-4 py-2 text-left">Action</th>
            </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
            <tr
                v-for="(user, index) in users"
                :key="index"
                class="border-b hover:bg-gray-100 odd:bg-gray-50 even:bg-white"
            >
                <td class="px-4 py-2">{{ user.surname }}</td>
                <td class="px-4 py-2">{{ user.otherNames }}</td>
                <td class="px-4 py-2">{{ user.tel }}</td>
                <td class="px-4 py-2">{{ user.email }}</td>
                <td class="px-4 py-2">{{ user.username }}</td>
                <td class="px-4 py-2">{{ user.country }}, {{ user.state }}</td>
                <td class="px-4 py-2">{{ new Date(user.created_at).toLocaleDateString() }}</td>
                <td class="px-4 py-2">
                    <Link :href="`view-user/${user.id}`">View details</Link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </AuthenticatedLayout>
</template>


<script setup>
import { defineProps } from "vue";
import {Link} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

let props = defineProps({
    users: Array, // Expecting an array of user objects
});
</script>
