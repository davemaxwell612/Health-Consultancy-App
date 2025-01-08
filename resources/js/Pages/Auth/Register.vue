<template>
<section class="bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
    <div class="max-w-4xl mx-auto  p-6 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-semibold mb-4 text-center">Sign Up Form</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Section 1: User Profile Information -->
        <div v-if="currentStep === 1">
          <h3 class="text-xl font-bold mb-3">User Profile Information</h3>
          <div class="mb-4">
            <label class="block text-gray-700">Surname</label>
            <input type="text" v-model="form.surname" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 dark:text-white">Other Names</label>
            <input
              type="text"
              v-model="form.otherNames"
              class="w-full border-gray-300 rounded-md bg-gray-50 p-2"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 dark:text-white">Address</label>
            <input type="text" v-model="form.surname" class="bg-gray-50 w-full border-gray-300 rounded-md p-2" required/>
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-gray-700">Phone number</label>
            <input type="tel" id="phone" v-model="form.tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div class="mb-6">
            <label for="email" class="block text-gray-700">Email address</label>
            <input type="email" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 

        <!-- Select Country and State -->
        <div class="mb-4">
            <label class="block text-gray-700">Country</label>
            <select
            v-model="selectedCountry"
            @change="updateStates"
            class="w-full bg-gray-50 border-gray-300 rounded-md p-2"
            required
            >
            <option value="" disabled>Select a country</option>
            <option v-for="(states, country) in countries" :key="country" :value="country">
                {{ country }}
            </option>
            </select>
        </div>

        <div class="mb-4" v-if="stateOptions.length > 0">
            <label class="block text-gray-700">State</label>
            <select
            v-model="selectedState"
            class="w-full bg-gray-50 border-gray-300 rounded-md p-2"
            required
            >
            <option value="" disabled>Select a state</option>
            <option v-for="state in stateOptions" :key="state" :value="state">
                {{ state }}
            </option>
            </select>
        </div>
          <!-- Add remaining fields for Section 1 -->
        </div>
  
        <!-- Section 2: Medical History and Information -->
        <div v-if="currentStep === 2">
          <h3 class="text-xl font-bold mb-3">Medical History and Information</h3>
          <div class="mb-4">
            <label class="block text-gray-700">Medical Conditions</label>
            <textarea
              v-model="form.medicalConditions"
              class="w-full border-gray-300 rounded-md p-2"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Medications</label>
            <select
              v-model="form.medications"
              class="w-full border-gray-300 rounded-md p-2"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <!-- Add remaining fields for Section 2 -->
        </div>
  
        <!-- Section 3: Payment Information -->
        <div v-if="currentStep === 3">
          <h3 class="text-xl font-bold mb-3">Payment Information</h3>
          <div class="mb-4">
            <label class="block text-gray-700">Payment Method</label>
            <select
              v-model="form.paymentMethod"
              class="w-full border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
        </div>
  
        <!-- Section 4: Security and Authentication -->
        <div v-if="currentStep === 4">
          <h3 class="text-xl font-bold mb-3">Security and Authentication</h3>
          <div class="mb-4">
            <label class="block text-gray-700 dark:text-white">Username</label>
            <input
              type="text"
              v-model="form.username"
              class="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div class="mb-6">
                <label for="password" class="block text-gray-700 dark:text-white">Password</label>
                <input type="password" v-model="form.password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 
            <div class="mb-6">
                <label for="confirm_password" class="block text-gray-700 dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 
        </div>
  
        <!-- Section 5: Additional Information -->
        <div v-if="currentStep === 5">
          <h3 class="text-xl font-bold mb-3">Additional Information</h3>
          <div class="mb-4">
            <label class="block text-gray-700">Preferred Language</label>
            <select
              v-model="form.preferredLanguage"
              class="w-full border-gray-300 rounded-md p-2"
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          <div class="mb-4 flex items-start">
            <input
              type="checkbox"
              v-model="form.termsAccepted"
              class="mr-2"
              required
            />
            <label class="text-gray-700">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
  
        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-6">
          <button
            type="button"
            class="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            @click="previousStep"
            v-if="currentStep > 1"
          >
            Previous
          </button>
          <button
            type="button"
            class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            @click="nextStep"
            v-if="currentStep < totalSteps"
          >
            Next
          </button>
        </div>
      </form>
    </div>
</section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentStep: 1,
        totalSteps: 5,
        form: {
          surname: '',
          otherNames: '',
          tel: '',
          email: '',
          medicalConditions: '',
          medications: '',
          paymentMethod: '',
          username: '',
          password: '',
          preferredLanguage: '',
          termsAccepted: false,
        },
        selectedCountry: '', // Stores the selected country
        selectedState: '',   // Stores the selected state
        stateOptions: [],    // Dynamically updates the state options
        countries: {
        USA: ['California', 'Texas', 'Florida', 'New York'],
        Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
        India: ['Maharashtra', 'Tamil Nadu', 'Delhi', 'Karnataka'],
        Nigeria: ['Lagos', 'Abuja', 'Kano', 'Rivers', 'Cross River'],
      },
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
        }
      },
      updateStates() {
      // Update state options based on selected country
      this.stateOptions = this.countries[this.selectedCountry] || [];
      this.selectedState = ''; // Reset state selection when country changes
     },
      previousStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      handleSubmit() {
        alert('Form submitted!');
        console.log(this.form);
      },
    },
  };
  </script>
  