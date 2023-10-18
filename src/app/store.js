import { configureStore  } from '@reduxjs/toolkit';
import UserSlices from '../Slices/UserSlices';
import QuestionsSlices from '../Slices/QuestionsSlices';

export const store = configureStore({
  reducer: {
    user: UserSlices,
    questions: QuestionsSlices,
  },
});
