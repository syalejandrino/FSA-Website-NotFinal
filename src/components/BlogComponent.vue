<template>
  <!-- Main container for the blog post -->
  <div class="blog-post">
    <!-- Display the blog title -->
    <h2>{{ blog_name }}</h2>
    <!-- Render the blog image with a bound source -->
    <img :src="blog_imgPath" alt="Blog Image" class="blog-image" />
    <!-- Show the Blog date and a brief description -->
    <p><strong>Date:</strong> {{ blog_date }}</p>
    <p><strong>About:</strong> {{ blog_about }}</p>
  </div>
</template>

<script>
export default {
  // Define the component's props, allowing parent components to pass data
  props: {
    // Title of the blog post (required)
    blog_name: {
      type: String,
      required: true
    },
    // Publication date of the blog post (required)
    blog_date: {
      type: String,
      required: true
    },
    // Brief description or summary of the blog post (required)
    blog_about: {
      type: String,
      required: true
    },
    // Path to the blog post's image (required)
    blog_imgPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.blog-post {
  text-align: center;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(31, 31, 31, 0.8);
  color: white;
}

.blog-image {
  width: 90%;
  height: 90%;
  border-radius: 8px;
}
</style>