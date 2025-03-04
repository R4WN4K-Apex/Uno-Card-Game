import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  players: string[];
  gameState: any;
}

const initialState: GameState = {
  players: [],
  gameState: {},
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<string[]>) => {
      state.players = action.payload;
    },
    updateGameState: (state, action: PayloadAction<any>) => {
      state.gameState = action.payload;
    },
  },
});

export const { setPlayers, updateGameState } = gameSlice.actions;
export default gameSlice.reducer;
