<template>
<AuthenticatedLayout>
    <div class="overflow-x-auto">
        <h1 class="text-3xl font-bold text-teal-700 mb-6 text-center">
            My invoices
        </h1>
    </div>


    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Invoice #
                </th>
                <th scope="col" class="px-6 py-3">
                    Invoice date
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Due date
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700 border-t-2"
            v-for="transaction in transactions"
            >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {{ transaction.invoice_number }}
                </th>
                <td class="px-6 py-4">
                    {{ transaction.invoice_date }}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {{ transaction.due_date }}
                </td>
                <td class="px-6 py-4">
                    {{ transaction.amount }}
                </td>
                <td class="px-6 py-4 text-green-500">
                    <Link href="#"> {{ transaction.status }} </Link>

                </td>
            </tr>

            </tbody>
        </table>
    </div>

</AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Link} from "../../../../.vite/deps/@inertiajs_vue3.js";

let props  = defineProps({
    transactions: Object
})

</script>

<style scoped>

</style>
