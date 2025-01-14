<template>
    <AuthenticatedLayout>

    <div class="flex flex-col-reverse lg:flex-row items-center justify-center bg-gray-100 p-4">
        <!-- Details Section -->
        <div class="lg:w-2/3 w-full bg-white shadow rounded-lg p-6">
            <h2 class="text-2xl font-bold text-gray-700 mb-4">
                Schedule appointment with Doctor
            </h2>
            <p class="text-gray-600">
                <strong>Doctor:</strong> Doctor 1
            </p>
            <p class="text-gray-600">
                <strong>Age:</strong> 30
            </p>
            <p class="text-gray-600">
                <strong>Qualification:</strong> PHD
            </p>

            <!-- Input Fields -->
            <form class="mt-4 space-y-4">
                <div>
                    <label
                        for="date"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Consulting Date Address
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        class="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label
                        for="timeSlot"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Select Time Slot
                    </label>
                    <select
                        id="timeSlot"
                        name="timeSlot"
                        class="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-300"
                    >
                        <option>Choose time slot</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>
                <p class="text-gray-600">
                    <strong>Doctor Fee:</strong> N 1000
                </p>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg p-3 transition-colors"
                >
                    Book the Slot
                </button>
            </form>
        </div>


        <!-- Image Section -->
        <div class="lg:w-1/3 w-full h-full flex justify-center mb-6 lg:mb-0">
            <img
                src="https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Doctor"
                class="w-48 h-48 object-cover rounded-md shadow"
            />
        </div>
    </div>


    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
