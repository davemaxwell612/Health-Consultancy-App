<template>
    <p
        :class="bg"
        class="my-3 px-3 py-3" >{{ props.response }}</p>
</template>

<script setup>


let props = defineProps({
    response: String
})
</script>

<style scoped>

</style>
