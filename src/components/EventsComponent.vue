<template>
  <!-- Main container for the event component -->
  <div class="event-component">
    <!-- Display the event name -->
    <h2>{{ event_name }}</h2>
    <!-- Render the event image with a bound source -->
    <img :src="event_imgPath" alt="Event Image" class="event-image" />
    <!-- Show the event date -->
    <p><strong>Date:</strong> {{ event_date }}</p>
    <!-- Provide a brief description of the event -->
    <p><strong>About:</strong> {{ event_about }}</p>
    <!-- Display the location of the event -->
    <p><strong>Location:</strong> {{ event_loc }}</p>
  </div>
</template>

<script>
export default {
  // Define the props for the event component, allowing data to be passed from a parent component
  props: {
    // Name of the event (required)
    event_name: {
      type: String,
      required: true
    },
    // Date of the event (required)
    event_date: {
      type: String,
      required: true
    },
    // Description or summary of the event (required)
    event_about: {
      type: String,
      required: true
    },
    // Location where the event will take place (required)
    event_loc: {
      type: String,
      required: true
    },
    // Path to the event image (required)
    event_imgPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.event-component {
  text-align: center;
}

.event-component h2 {
  font-size: 2.0em;
}

.event-component p {
  font-size: 1.3em;
}

.event-image {
  width: 90%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
}
</style>