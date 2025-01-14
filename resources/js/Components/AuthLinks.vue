<template>
    <Link
        :href="`/${props.linkText}`"
        class="mb-4 hover:text-blue-300 transition-colors bg-gray-500 w-full py-2 px-3 rounded-md h-10 flex items-center"
    >
        {{capitalizeFirstLetter(props.linkText) }}
    </Link>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
let props = defineProps({
    linkText: String
})

let capitalizeFirstLetter = (str) => {
    let processLetter = str.replace(/[-_]/g, ' ')

    let words = processLetter.split(' ');
        words.shift();
        words =  words.join(' ')
        words = words[0].charAt(0).toUpperCase() + words.slice(1)
        return words;
}


</script>

<style scoped>

</style>
