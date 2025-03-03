// TASK 1
function deepCopyObj(obj) {
  // console.log(obj)
  let copy;
  if(Array.isArray(obj)) copy = [];
  else copy = {};

  if (typeof obj === 'object' && obj != null) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        //  || typeof obj[key] === 'function'
        // console.log(' ')
        // console.log('OBJ or FN ' + key + ' ' + obj[key]);
        copy[key] = deepCopyObj(obj[key]);
      } else if(typeof obj[key] === 'function' ) {
        copy[key] = obj[key].bind({})
      }
      else{
        // console.log(`Primitive ${key} ${obj[key]}`);
        copy[key] = obj[key];
      }
    }
  }

  // console.log(copy);
  return copy;
}

const firstObj = {
  name: 'Ivan',
  age: '24',
  skills: {
    sport: true,
    language: ['ukrainian', 'english'],
  },
  hobby: ['safa', 'bxc', 'sdhbc', ['asdf', 'xcvbn']],
  walking() {
    console.log('walking');
  }
}

const secondObj= undefined;

const copyObj = deepCopyObj(firstObj);
copyObj.skills = { language: ['english', 'french'] };
copyObj.hobby[0] = 'firstCheck';
copyObj.hobby[3][0] = 'secondCheck';

console.log(firstObj === copyObj);
console.log(firstObj.hobby === copyObj.hobby);
console.log(firstObj.walking === copyObj.walking);

console.table(firstObj);
console.table(copyObj);

// TASK 2
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

const newCoursesAndDurationArray = coursesAndDurationArray.map((course, i) => ({id: i+1, ...course}));
console.log(newCoursesAndDurationArray);