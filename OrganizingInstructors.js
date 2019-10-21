const organizeInstructors = function(instructors) {
  let organise = {};
  instructors.forEach((info) => {
    let courseName = info.course;
    if (courseName in organise) {
      organise[courseName].push(info.name);
    } else {
      organise[courseName] = [info.name];
    }
  });
  return organise;
}
console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));