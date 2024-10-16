<template>
  <!-- Main container for the contact section -->
  <div class="contact-container">
    <!-- Container for the contact form -->
    <div class="contact-form-container">
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-description">We’d love to hear from you! Please send us a message.</p>
      <!-- Form for user input, preventing default submission -->
      <form @submit.prevent="sendMessage" class="contact-form">
        <input type="text" placeholder="Your Name" v-model="name" required class="contact-input" />
        <input type="email" placeholder="Your Email" v-model="email" required class="contact-input" />
        <textarea placeholder="Your Message" v-model="message" required class="contact-textarea"></textarea>
        <button type="submit" class="contact-button">Send Message</button>
      </form>
    </div>
    <!-- Container for contact information -->
    <div class="contact-info">
      <h2 class="info-title">Get in Touch</h2>
      <p class="info-text">Follow us on social media or contact us directly!</p>
      <div class="social-links">
        <!-- Social media links -->
        <a href="https://www.linkedin.com/company/filipino-students-association-fsa-depauw/?viewAsMember=true" target="_blank" class="social-link">
          <img src="@/assets/linkedin_logo.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/depauw_filoassoc/" target="_blank" class="social-link">
          <img src="@/assets/instagram_logo.png" alt="Instagram" />
        </a>
      </div>
      <p class="phone-number">Phone: (123) 456-7890</p>
    </div>
  </div>
</template>

<script>
export default {
  // Data properties for the contact form inputs
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  // Methods for the component
  methods: {
    // Function to handle form submission
    sendMessage() {
      alert('Message sent!'); // Placeholder for actual message sending logic
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  padding: 60px;
  margin-bottom: 250px;
  color: white;
  background-color: #1e1e1e;
}

.contact-form-container {
  max-width: 800px;
  margin-right: 40px;
}

.contact-title {
  font-size: 2.5em;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(244, 196, 15, 0.8);
  padding-bottom: 10px;
  text-align: center;
}

.contact-description {
  font-size: 1.2em;
  text-align: center;
  max-width: 1500px;
  margin-bottom: 40px;
}

.contact-form {
  background-color: rgba(31, 31, 31, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  padding-left: 90px;
}

.contact-input,
.contact-textarea {
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid rgba(241, 196, 15, 0.2);
  border-radius: 6px;
  background-color: rgba(241, 196, 15, 0.05);
  color: white;
}

.contact-textarea {
  height: 100px;
  resize: none;
}

.contact-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: rgba(241, 196, 15, 0.9);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: rgba(241, 196, 15, 1);
}

.contact-info {
  flex: 1;
  text-align: center;
}

.info-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.info-text {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link img {
  width: 40px;
  height: 40px;
}

.phone-number {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>