<template>
    <div
        class="bg-blue-900 min-h-1/2 flex items-center justify-center text-white">
        <div class="text-center max-w-lg p-6 bg-blue-800 rounded-lg shadow-lg">
            <h1 class="text-4xl font-bold mb-4">Your Plan Has Expired</h1>
            <p class="text-lg mb-6">It looks like your subscription has expired. Please renew your plan to continue enjoying our services.</p>
            <div class="space-x-4">
                <Link href="#planSection">

                    <button
                        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Renew Now
                    </button>
                </Link>
            </div>
        </div>
    </div>
</template>

<script>
import {Link} from "@inertiajs/vue3";

export default {
    name: "PlanHasExpiredNotification",
    components: {Link}
}
</script>

<style scoped>

</style>
