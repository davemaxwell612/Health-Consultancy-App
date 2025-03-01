<template>
  <div class="bg-blue-500 text-white py-12 px-6 md:px-16">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <!-- Left Section (Doctor Image + Description) -->
      <div class="flex flex-col justify-center items-center text-center md:text-left">
        <img src="https://static.vecteezy.com/system/resources/previews/015/412/213/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg" alt="Doctor" class="w-60 h-60 object-cover rounded-full shadow-lg mb-4" />
        <h2 class="text-2xl font-bold">Expert Care, Anytime You Need</h2>
        <p class="mt-2 text-sm text-white/80">
          Our experienced doctors provide medical advice, diagnosis, and treatment for various health conditions.
        </p>
      </div>

      <!-- Right Section (Health Conditions) -->
      <div class="bg-white rounded-lg p-6 shadow-lg h-96 overflow-y-auto">
        <h3 class="text-lg font-bold text-gray-800 mb-4">Conditions We Manage</h3>

        <div class="grid grid-cols-3 gap-4">
          <div v-for="(condition, index) in healthConditions" :key="index" class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full overflow-hidden shadow-md">
              <img :src="condition.image" :alt="condition.name" class="w-full h-full object-cover" />
            </div>
            <p class="text-sm text-gray-700 mt-2 text-center">{{ condition.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      healthConditions: [
        { name: "Respiratory Health", image: "https://static.vecteezy.com/system/resources/previews/015/409/919/non_2x/elegant-pretty-woman-in-business-suit-with-badge-woman-business-avatar-profile-picture-illustration-isolated-vector.jpg" },
        { name: "Digestive Wellness", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Skin Care", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Infectious Diseases", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Women's Health", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Lifestyle & Wellness", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Health, Diet & Exercise", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Musculoskeletal Health", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Chronic Conditions", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom scrollbar for overflow section */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #554aec;
  border-radius: 10px;
}
</style>
