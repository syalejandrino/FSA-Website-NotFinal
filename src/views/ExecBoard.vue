<template>
  <!-- Main container for the executive board section -->
  <div class="exec-board-container">
    <h1 class="exec-board-title">FSA Executive Board</h1>
    <div class="exec-board-grid">
      <!-- Loop through the exec_board array to display each board member -->
      <div
        v-for="member in exec_board"
        :key="member.name"
        class="exec-board-card"
      >
        <!-- Use ExecBoardComponent to display each board member's details -->
        <ExecBoardComponent
          :board_name="member.name" 
          :board_year="member.year"
          :board_major="member.major"
          :board_position="member.position"
          :board_imgPath="member.imgPath"
        />
      </div>
    </div>
    <!-- Button to navigate to the contact page -->
    <button @click="$router.push('/contact-us')">Contact Us</button>
  </div>
</template>

<script>
import ExecBoardComponent from '@/components/ExecBoardComponent.vue';

export default {
  // Register the ExecBoardComponent for use within this component
  components: { ExecBoardComponent },
  data() {
    return {
      // Array of executive board members with their details
      exec_board: [
        {
          name: 'Sy Alejandrino',
          position: 'Founder & President',
          year: 'Senior',
          major: 'Computer Science',
          imgPath: 'src/assets/board1.jpeg'
        },
        {
          name: 'Eliana Alzate',
          position: 'Vice-President',
          year: 'Junior',
          major: 'Computer Science',
          imgPath: 'src/assets/board2.jpeg'
        },
        {
          name: 'Mary Lomahan',
          position: 'Treasurer',
          year: 'Senior',
          major: 'Communications',
          imgPath: 'src/assets/board3.jpeg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.exec-board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  min-height: 800px;
  color: white;
  background-color: #1e1e1e;
}

.exec-board-title {
  font-size: 2.5em;
  margin: 40px 0;
  text-align: center;
  border-bottom: 2px solid rgba(241, 196, 15, 0.8);
  padding-bottom: 10px;
  margin-bottom: 50px;
}

.exec-board-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.exec-board-card {
  max-width: 500px;
  margin-bottom: 40px; 
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
