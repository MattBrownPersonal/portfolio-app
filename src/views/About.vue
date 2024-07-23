<template>
  <h1>Tic Tac Toe</h1>
  <h2>Now Playing: {{ selectedPlayer }}</h2>
  <div class="app-container">
    <div class="grid-container">
      <div v-for="row in grid.length" :key="`row-${row}`" class="row">
        <div
          v-for="col in grid.length"
          :key="`cell-${row}-${col}`"
          class="cell"
          @click="handleClick(row, col)"
        >
          {{ grid[row - 1][col - 1].selectedBy }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface GridCell {
  number: number;
  selectedBy: string;
}

type Grid = GridCell[][];

export default defineComponent({
  name: "TicTacToe",
  setup() {
    const grid = ref<Grid>([
      [
        { number: 1, selectedBy: "" },
        { number: 2, selectedBy: "" },
        { number: 3, selectedBy: "" },
      ],
      [
        { number: 4, selectedBy: "" },
        { number: 5, selectedBy: "" },
        { number: 6, selectedBy: "" },
      ],
      [
        { number: 7, selectedBy: "" },
        { number: 8, selectedBy: "" },
        { number: 9, selectedBy: "" },
      ],
    ]);
    const players = ref(["Player One", "Player Two"]);
    let selectedPlayer = ref(players.value[0]);

    const updateCell = (row: number, col: number, player: string) => {
      grid.value[row - 1][col - 1].selectedBy = player;
    };

    const handleClick = (row: number, col: number): void => {
      if (!grid.value[row - 1][col - 1].selectedBy) {
        if (selectedPlayer.value == "Player One") {
          selectedPlayer.value = players.value[1];
          updateCell(row, col, "X");
        } else {
          selectedPlayer.value = players.value[0];
          updateCell(row, col, "O");
        }
      }
    };

    return {
      grid,
      players,
      selectedPlayer,
      handleClick,
    };
  },
});
</script>

<style>
h2 {
  color: whitesmoke;
}
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.grid-container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.cell {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  font-size: 13rem;
  background-color: lightseagreen;
}

.cell:hover {
  border-color: red;
}
</style>
