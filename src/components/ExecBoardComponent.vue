<template>
  <!-- Main container for the executive board member profile -->
  <div class="exec-board-member">
    <!-- Render the board member's image with a bound source -->
    <img :src="board_imgPath" alt="Board Member Image" class="board-member-image" />
    <!-- Display the board member's name -->
    <h2>{{ board_name }}</h2>
    <!-- Show the position held by the board member -->
    <p><strong>Position:</strong> {{ board_position }}</p>
    <!-- Display the year associated with the board member -->
    <p><strong>Year:</strong> {{ board_year }}</p>
    <!-- Show the major of the board member -->
    <p><strong>Major:</strong> {{ board_major }}</p>
  </div>
</template>

<script>
export default {
  // Define the props for the board member component, allowing data to be passed from a parent component
  props: {
    // Name of the board member (required)
    board_name: {
      type: String,
      required: true
    },
    // Year of the board member's study (required)
    board_year: {
      type: String,
      required: true
    },
    // Major field of study for the board member (required)
    board_major: {
      type: String,
      required: true
    },
    // Position held on the executive board (required)
    board_position: {
      type: String,
      required: true
    },
    // Path to the board member's image (required)
    board_imgPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.exec-board-member {
  background-color: rgba(31, 31, 31, 0.8);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  margin: 20px;
  padding: 60px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 500px;
}

.board-member-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.exec-board-member h2 {
  font-size: 2.0em;
  margin: 10px 0;
}

.exec-board-member p {
  font-size: 1.3em;
  margin: 5px 0;
}
</style>