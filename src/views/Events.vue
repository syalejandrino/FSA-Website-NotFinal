<template>
  <!-- Main container for the events section -->
  <div class="events-container">
    <h1>Upcoming Events</h1>
    <div class="events-grid">
      <!-- Loop through the events array to display each event -->
      <div
        v-for="event in events"
        :key="event.name"
        class="event-card"
        @mouseenter="showHoverMessage"  
        @mouseleave="hideHoverMessage"
      >
        <!-- Link to the event's details -->
        <a :href="event.link" target="_blank" class="event-link">
          <!-- Use EventsComponent to display event details -->
          <EventsComponent
            :event_name="event.name"
            :event_date="event.date"
            :event_about="event.about"
            :event_loc="event.loc"
            :event_imgPath="event.imgPath"
          />
          <!-- Display hover message if hovering is true -->
          <div class="hover-message" v-if="hovering">{{ hoverText }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EventsComponent from '@/components/EventsComponent.vue';

export default {
  components: { EventsComponent },
  data() {
    return {
      // Array of event objects to display
      events: [
        {
          name: 'Cultural Night',
          date: 'October 07, 2024',
          about: 'A night of Filipino culture and performances.',
          loc: 'UB Ballroom',
          imgPath: 'src/assets/event1.png',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        },
        {
          name: 'Study Group',
          date: 'October 16, 2024',
          about: 'Join us for a collaborative study session.',
          loc: 'Roy O. West - 211',
          imgPath: 'src/assets/event2.png',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        },
        {
          name: 'Game Night',
          date: 'November 05, 2024',
          about: 'Enjoy a night of games and fun with friends.',
          loc: 'CDI Lobby',
          imgPath: 'src/assets/event3.png',
          link: 'https://www.instagram.com/depauw_filoassoc/'
        }
      ],
      // State to control hover behavior
      hovering: false,
      hoverText: 'Click for more information' // Text displayed on hover
    };
  },
  methods: {
    // Method to set hovering state to true
    showHoverMessage() {
      this.hovering = true;
    },
    // Method to set hovering state to false
    hideHoverMessage() {
      this.hovering = false;
    }
  }
};
</script>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  min-height: 100vh;
  color: white;
}

.events-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.event-card {
  background-color: rgba(31, 31, 31, 0.8);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  flex: 1 1 calc(30% - 40px);
  max-width: 400px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  margin-bottom: 30px;
}

.event-card:hover {
  transform: scale(1.05);
}

.event-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.hover-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(241, 196, 15, 0.9);
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.event-card:hover .hover-message {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  margin: 40px 0;
  text-align: center;
  border-bottom: 2px solid rgba(241, 196, 15, 0.8);
  padding-bottom: 10px;
  margin-bottom: 50px;
}
</style>