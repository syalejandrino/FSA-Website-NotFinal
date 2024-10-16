<template>
  <!-- Main application container -->
  <div id="app">
    <header>
      <!-- Navigation container -->
      <div class="nav-container">
        <!-- Logo linked to the home page -->
        <router-link to="/" class="logo-link">
          <div class="logo-text-container">
            <img src="@/assets/fsa_logo.png" alt="Logo" class="logo" />
            <div class="logo-text">
              DePauw FSA
            </div>
          </div>
        </router-link>
        
        <nav>
          <!-- Navigation menu items -->
          <ul class="nav-list">
            <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
            <li><router-link to="/events" exact-active-class="active-link">Events</router-link></li>
            <li><router-link to="/exec-board" exact-active-class="active-link">Executive Board</router-link></li>
            <li><router-link to="/blog" exact-active-class="active-link">Blog</router-link></li>
            <li><router-link to="/contact-us" exact-active-class="active-link">Contact Us</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <!-- Router view for rendering matched components -->
      <router-view />
    </main>

    <footer>
      <!-- Copyright information -->
      <p>&copy; 2024 Filipino Students Association. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>