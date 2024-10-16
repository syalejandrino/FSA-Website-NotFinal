<template>
  <!-- Main container for the home page -->
  <div class="home-page">
    <div class="textbox">
      <!-- Title of the organization -->
      <h1>DePauw Filipino Students Association</h1>
      <!-- Introduction and call to action -->
      <p>Mabuhay Tigers! <br> Join us in promoting our culture and supporting each other.</p>
      <!-- Button to navigate to the events page -->
      <button @click="$router.push('/events')">See Future Events</button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.home-page {
  background-image: url('@/assets/background_home.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  overflow: hidden;
}

.textbox {
  background-color: rgba(31, 31, 31, 0.7);
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 120%;
  max-width: 1200px;
}

h1 {
  font-size: 64px;
  margin: 40px 0;
  text-align: center;
  border-bottom: 2px solid rgba(241, 196, 15, 0.8);
  padding-bottom: 10px;
  margin-bottom: 50px;
}

p {
  font-size: 28px;
  margin-bottom: 20px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

button {
  padding: 15px 30px;
  font-size: 20px;
  background-color: rgba(241, 196, 15, 0.8);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgba(241, 196, 15, 1);
}
</style>
