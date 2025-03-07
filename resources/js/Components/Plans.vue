<template>
    <section class="bg-gray-50 py-12">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-extrabold text-gray-800">Our Pricing Plans</h1>
            <p class="text-gray-600 mt-2">Choose a plan that fits your needs</p>
        </div>

        <!-- Plan period buttons -->
        <div class="flex w-full items-center justify-center ">
            <div class="bg-teal-500 w-fit">

            <button
                v-for="planPeriod in planPeriods"
                :key="planPeriod"
                @click="updatePlanPeriod(planPeriod)"
                :class="['px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 mx-px 2',
                planPeriod.active ? 'bg-white text-black ring-2' : ' bg-teal-600 hover:bg-teal-700 text-red-600 text-white']"
            >

            {{ planPeriod.name }} Months
            </button>
            </div>
        </div>
<!--        <ResponseMessage :response="response" :class="bg"/>-->
        <div class="flex justify-center items-center flex-wrap gap-6">
            <div
                v-for="(plan, index) in allPlans"
                :key="index"
                class="bg-white rounded-2xl shadow-lg p-6 w-80 hover:scale-105 hover:shadow-xl transform transition duration-500 ease-in-out"
            >
                <h2 class="text-xl font-bold text-teal-600 mb-4">{{ plan.name }}</h2>
                <p class="text-gray-600 mb-4">{{ plan.description }}</p>
                <p class="text-4xl font-extrabold text-gray-800">
                    {{ plan.billing_cycle[0].price * selectedPeriod }}
                </p>
                <p class="text-sm text-gray-500 mt-1">Billing cycle: {{ selectedPeriod }} months</p>
                <ul class="mt-6 space-y-3 text-gray-600">
                    <li v-for="(feature, index) in plan.features" :key="index" class="flex items-center">
                        <svg class="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" stroke-width="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {{ feature.feature_name }}
                    </li>
                </ul>
                <button

                    @click="choosePlan(plan, index, $page.props.auth.user.id)"
                    class="bg-teal-500 text-white font-semibold rounded-lg py-2 px-4 mt-6 hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-200 transition duration-300">
                    Choose Plan
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import ResponseMessage from "@/Components/ResponseMessage.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

let props = defineProps({
    plans: Array,
})

let allPlans = ref(props.plans)
let planPeriods = ref([
    {name: 1, active: false},
    {name: 3, active: false},
    {name: 6, active: false},
    {name: 12, active: false}
])
let selectedPeriod = ref(1)
onMounted(()=>{
    planPeriods.value[0].active = true
})
let updatePlanPeriod = (period) => {
    for (const planPeriod of planPeriods.value) {
        planPeriod.active = false
    }
    selectedPeriod.value = period.name;
    period.active = true
};

let response = ref()
let bg = ref()

let choosePlan = (plan, index, user_id) => {
    const updatedPlan = {
        ...plan,
        billing_cycle: [{
            ...plan.billing_cycle[0],
            price: plan.billing_cycle[0].price * selectedPeriod.value,
            duration: selectedPeriod.value
        }]
    };

    axios.post(`/patient-choose-plan/${plan.id}/${user_id}`, {updatedPlan})
        .then(res => {
            if (res.data.message) {
                response.value = res.data.message;
                window.location.href =  res.data.url;
                // window.location.href = response.data.authorization_url;
                bg.value = 'bg-green-400'
                setTimeout(() => {
                    response.value = '';
                    bg.value = ''
                }, 3000);
            }
        })
        .catch(err => {
            if (err) {
                response.value = "Couldn't save Plan \n Please make sure Plan doesn't already exist";
                bg.value = 'bg-red-400'
                setTimeout(() => {
                    response.value = '';
                    bg.value = ''
                }, 3000);
            }
        });
};
</script>
