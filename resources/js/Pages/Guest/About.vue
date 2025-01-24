<template>
    <GuestLayout>
        <section class="bg-gray-100 py-12 px-6 lg:px-20">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 fade-in">About Us</h1>
      <p class="text-lg text-gray-600 slide-in">Discover who we are and what drives us.</p>
    </div>

    <!-- Content Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Image Section -->
      <div class="fade-in">
        <img
          src="https://i.ibb.co/s1FfqcW/TIMELESS-HEALTHCARE-2.png"
          alt="About Us Image"
          class="rounded-lg shadow-lg"
        />
      </div>

      <!-- Text Section -->
      <div class="space-y-4 slide-in">
        <h2 class="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p class="text-gray-600">
          At our company, we strive to deliver exceptional value to our customers through innovation,
          dedication, and a commitment to excellence. Our goal is to make a positive impact on the world
          while fostering a culture of collaboration and integrity.
        </p>

        <h2 class="text-2xl font-semibold text-gray-800">Our Values</h2>
        <ul class="list-disc list-inside text-gray-600">
          <li>Customer Focus: Putting our customers at the heart of everything we do.</li>
          <li>Innovation: Continuously improving and embracing change.</li>
          <li>Integrity: Upholding the highest standards of ethics and transparency.</li>
        </ul>
      </div>
    </div>

    <!-- Team Section -->
    <div class="mt-16">
      
        <!-- Team Member -->
        <Team />
      </div>
   
  </section>
    </GuestLayout>
</template>

<script setup>
    import GuestLayout from "@/Layouts/GuestLayout.vue";
    import Team from "@/Components/Team.vue";
</script>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      
    };
  },
  mounted() {
    this.addAnimations();
  },
  methods: {
    addAnimations() {
      const fadeElements = document.querySelectorAll(".fade-in");
      const slideElements = document.querySelectorAll(".slide-in");

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      fadeElements.forEach((el) => observer.observe(el));
      slideElements.forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
/* Animation Classes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 1s ease-out forwards;
}

.fade-in {
  opacity: 0;
}

.slide-in {
  opacity: 0;
}
</style>

