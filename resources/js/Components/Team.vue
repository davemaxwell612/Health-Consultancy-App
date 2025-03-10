<template>
  <section class="bg-gray-100 py-12 px-6 lg:px-20">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-extrabold text-gray-800">Meet the Team</h2>
      <p class="mt-2 text-gray-600">Our dedicated professionals</p>
    </div>

    <!-- Centered Slider Wrapper -->
    <div class="flex justify-center">
      <div class="relative overflow-hidden w-full max-w-4xl"> 
        <!-- Slider Container -->
        <div class="flex space-x-6 transition-transform duration-500 ease-linear"
          :style="{ transform: `translateX(${currentOffset}px)` }">
          
          <!-- Team Members -->
          <div v-for="(member, index) in extendedTeam" :key="index"
            class="flex-shrink-0 text-center w-40">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-2 border-teal-500">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ member.name }}</h3>
            <p class="text-sm text-gray-600">{{ member.position }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MeetTheTeam",
  data() {
    return {
      team: [
        { name: "John Doe", position: "CEO", image: "https://static.vecteezy.com/system/resources/previews/015/412/213/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg" },
        { name: "Jane Smith", position: "Lead Designer", image: "https://static.vecteezy.com/system/resources/previews/015/409/919/non_2x/elegant-pretty-woman-in-business-suit-with-badge-woman-business-avatar-profile-picture-illustration-isolated-vector.jpg" },
        { name: "Alice Johnson", position: "Software Engineer", image: "https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg" },
        { name: "Robert Brown", position: "Marketing Manager", image: "https://cdn-icons-png.flaticon.com/512/18760/18760819.png" },
        { name: "Emily White", position: "HR Manager", image: "https://cdn-icons-png.flaticon.com/512/4202/4202831.png" }
      ],
      currentOffset: 0,
      slideWidth: 160, // Adjusted based on container width
      interval: null,
    };
  },
  computed: {
    extendedTeam() {
      return [
        this.team[this.team.length - 1], // Clone last item
        ...this.team,
        this.team[0], // Clone first item
      ];
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        if (this.currentOffset <= -(this.slideWidth * (this.team.length + 1))) {
          this.currentOffset = -this.slideWidth;
        } else {
          this.currentOffset -= this.slideWidth;
        }
      }, 3000);
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.transition-transform {
  will-change: transform;
}
</style>
