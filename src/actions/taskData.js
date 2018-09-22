export const SET_TASK_DATA = "SET_TASK_DATA";

const initialState = {
  taskList: [
    {
      title: "Hello",
      completed: false
    },
    {
      title: "BAZINGA",
      completed: true
    }
  ]
};

const taskData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TASK_DATA:
      const { name, options } = payload;
      return {
        ...state,
        [name]: options
      };
    default:
      return state;
  }
};

export default taskData;

/** Action Creators */
export const setValues = (name, options) => ({
  type: SET_TASK_DATA,
  payload: { name, options }
});
