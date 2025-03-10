<template>
    <div id="carousel" class="carousel bg-gray-900 transform transition duration-500 ease-in-out animate-fade-in delay-300">
      <div
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{
          backgroundImage: `url(${slide.image})`,
          opacity: index === currentIndex ? 1 : 0,
          transform:
            index === currentIndex ? 'translateX(0)' : 'translateX(100%)',
        }"
      >
        <div class="carousel-overlay"></div>
        <div class="carousel-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
          <div class="buttons flex flex-wrap justify-center gap-4 mt-4">
            <button
                @click="navigateTo(slide.link1)"
                class="w-full sm:w-auto bg-teal-500 text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition">
                {{ slide.button1 }}
            </button>
            <button
                @click="navigateTo(slide.link2)"
                class="w-full sm:w-auto bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition">
                {{ slide.button2 }}
            </button>
          </div>
        </div>
      </div>

      <!-- Left and Right Arrow Buttons -->
      <!-- <div class="arrow left-arrow" @click="prevSlide">&#8249;</div>
      <div class="arrow right-arrow" @click="nextSlide">&#8250;</div> -->
    <div class="arrow left-arrow hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-800 hover:text-gray-600 transition"
        @click="prevSlide" >
        &#8249;
    </div>
      <div class="arrow right-arrow hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-800 hover:text-gray-600 transition"
        @click="nextSlide">
        &#8250;
    </div>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="setCurrentIndex(index)"
        ></span>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        slides: [
                    {
            title: "Welcome to Timeless: Your Health, Simplified",
            // description:
            //   "At Timeless, we bring healthcare to your fingertips. Our telemedicine app connects you with certified doctors, therapists, and healthcare professionals anytime, anywhere.",
            button1: "Get Started",
            button2: "Learn More",
            link1: "/register",
            link2: "/login",
            image: "https://i.ibb.co/jd26SBB/african-american-mother-having-video-call-with-pediatrician-while-holding-ill-daughter-her-lap.jpg",
          },
          {
            title: "Speak with a Doctor LIVE",
            // description:
            //   "Many health concerns do not require an office doctor visit. Experience secure, convenient, and affordable healthcare without leaving home.",
            button1: "Book Now",
            button2: "Get Help",
            link1: "/register",
            link2: "/login",
            image: "https://i.ibb.co/7tBN9LCY/female-doctor-talking-via-video-call-father-who-is-giving-inhaling-therapy-his-son-home.jpg",
          },
          {
            title: "Your Health, Our Priority",
            // description:
            //   "Whether you need a quick consultation, prescription refills, or expert advice, we’re here to provide personalized care that fits into your busy life.",
            button1: "Start Today",
            button2: "Contact Us",
            link1: "/register",
            link2: "/login",
            image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        currentIndex: 0,
        timer: null,
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    methods: {
      startAutoSlide() {
        this.timer = setInterval(this.nextSlide, 8000);
      },
      stopAutoSlide() {
        clearInterval(this.timer);
      },
      nextSlide() {
        this.currentIndex =
          this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
      },
      prevSlide() {
        this.currentIndex =
          this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
      },
      setCurrentIndex(index) {
        this.stopAutoSlide();
        this.currentIndex = index;
        this.startAutoSlide();
      },
      navigateTo(link) {
        window.location.href = link;
      },
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
  };
  </script>

  <style>
  .carousel {
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .carousel-slide {
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .carousel-content {
    color: white;
    text-align: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px 40px;
    border-radius: 10px;
    max-width: 600px;
  }

  .buttons button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .buttons button:hover {
    background: #0056b3;
    transform: scale(1.05);
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 24px;
    border-radius: 50%;
    z-index: 10;
  }

  .left-arrow {
    left: 20px;
  }

  .right-arrow {
    right: 20px;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  .carousel-indicators {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .indicator {
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .indicator:hover {
    transform: scale(1.2);
  }

  .indicator.active {
    background: #007bff;
  }
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
