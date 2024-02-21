function Reducer(state = 0, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      if (state > 0) {
        return state - 1;
      } else {
        return 0;
      }
    default:
      return state;
  }
}
export default Reducer;
