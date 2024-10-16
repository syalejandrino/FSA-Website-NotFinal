<template>
  <!-- Main container for the blog section -->
  <div class="blog-container">
    <!-- Section introducing the founding story -->
    <div class="founding-section">
      <h1 class="founding-question">How FSA was Founded?</h1>
    </div>
    <!-- Narrative about the organization's founding -->
    <p class="founding-story">
      Our organization was founded with the mission to foster cultural appreciation and community engagement. Over the years, we've hosted numerous events and activities that bring people together, celebrate diversity, and promote understanding among different cultures. Our journey has been filled with memorable experiences and impactful initiatives that have enriched our community.
    </p>
    <br><br>
    
    <!-- Heading for past activities -->
    <h1 class="past-activities">Past Activities</h1>
    <div class="past-activities-container">
      <!-- Grid to display blog cards for past activities -->
      <div class="blog-grid">
        <div v-for="post in blog" :key="post.name" class="blog-card">
          <!-- Link to each blog post -->
          <a :href="post.link" target="_blank" class="blog-link">
            <div class="image-container">
              <!-- Blog component for individual posts -->
              <BlogComponent
                :blog_name="post.name"
                :blog_date="post.date"
                :blog_about="post.about"
                :blog_imgPath="post.imgPath"
              />
              <div class="overlay">Click for more information</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Button to navigate to future events -->
    <button class="see-events-button" @click="$router.push('/events')">See Future Events</button>
  </div>
</template>

<script>
import BlogComponent from '@/components/BlogComponent.vue';

export default {
  // Register the BlogComponent for use within this component
  components: { BlogComponent },
  data() {
    return {
      // Array of blog posts to display
      blog: [
        {
          name: 'Cultural Awareness Workshop',
          date: 'August 30, 2023',
          about: 'A workshop focused on cultural appreciation.',
          imgPath: 'src/assets/blog1.jpg',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        },
        {
          name: 'Community Service Day',
          date: 'September 10, 2023',
          about: 'Engaging with the local community through service.',
          imgPath: 'src/assets/blog2.jpg',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        },
        {
          name: 'End-of-Semester Celebration',
          date: 'December 15, 2023',
          about: 'Celebrating our accomplishments and cultural heritage.',
          imgPath: 'src/assets/blog3.jpg',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        }
      ]
    };
  }
};
</script>

<style scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  color: white;
  background-color: #1e1e1e;
}

.founding-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.founding-story {
  font-size: 1.3em;
  text-align: center;
  max-width: 800px;
}

.past-activties {
  font-size: 2.5em;
  margin: 40px 0 20px;
  text-align: center;
  border-bottom: 2px solid rgba(241, 196, 15, 0.8);
  padding-bottom: 10px;
}

.founding-question {
  font-size: 2.5em;
  margin: 40px 0 20px;
  text-align: center;
  border-bottom: 2px solid rgba(241, 196, 15, 0.8);
  padding-bottom: 10px;
}

.past-activities-container {
  background-color: rgba(31, 31, 31, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.blog-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.blog-card {
  flex: 1 1 calc(30% - 40px);
  max-width: 450px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(241, 196, 15, 0.2);
  border-radius: 12px;
  background: rgba(241, 196, 15, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-container:hover .overlay {
  opacity: 1;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.see-events-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: rgba(241, 196, 15, 0.9);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.see-events-button:hover {
  background-color: rgba(241, 196, 15, 1);
}
</style>