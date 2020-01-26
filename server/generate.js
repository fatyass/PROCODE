var faker = require('faker');
var database = { Courses: []};
for (var i = 1; i<= 300; i++) {
  database.Courses.push({
    id: i,
    name: faker.commerce.CoursesName(),
    Description: faker.lorem.sentences(),
    //lessons: faker.commerce.LessonsName(),
    //Language: faker.commerce.LanguageName(),
   
  });
  console.log(JSON.stringify(database));
}