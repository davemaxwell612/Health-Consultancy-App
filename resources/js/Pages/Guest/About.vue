<template>
    <GuestLayout>
        <section class="bg-gray-100 py-12 px-6 lg:px-20">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300">About Us</h1>
      <p class="text-lg text-gray-600 slide-in">Discover who we are and what drives us.</p>
    </div>

    <!-- Content Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Image Section -->
      <div class="fade-in">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <Team class="transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300"/>
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
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>

