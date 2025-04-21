enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log("task-basic-5:", isWeekend(DayOfWeek.Friday));
console.log("task-basic-5:", isWeekend(DayOfWeek.Saturday));
