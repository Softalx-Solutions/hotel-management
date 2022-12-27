export const greet = (hours) => {
  return hours >= 0 && hours <= 11
    ? "morning"
    : hours >= 12 && hours <= 16
    ? "afternoon"
    : hours >= 16 && hours <= 21
    ? "evening"
    : "night";
};
