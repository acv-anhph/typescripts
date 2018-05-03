/*jshint esversion: 6 */

// var courses = ['ac', 'fdg', 'gfg'];
//
// console.log(
//   courses.map(courses => courses.toUpperCase())
// );
//
// var score = [3, 5, 6, 78, 8, 5, 4, 3];
//
// console.log(
//   score.sort(
//     (x, y) => x > y
//   )
// );

// let student = {
//   name: "John",
//   courses: ['a', 'b', 'c'],
//   showInfo: function() {
//     this.courses.forEach(function(course) {

//       // console.log(this);
//     });
//   }
//
// };
//
// student.showInfo();
//
// console.log(this);

var person = {
  firstName: 'Hoang',
  lastName: 'Pham',
  friends : ['Minh', 'Sang', 'Khoa', 'Hoang'],
  showFriend: function() {
    for(var i = 0; i < this.friends.length; i++)
      console.log(this.firstName + ' have a friend named ' + this.friends[i]);
  },
  showFriendThis: function() {
    this.friends.forEach(fr => {
      console.log(this.firstName + ' have a friend named ' + fr);
    });
  }
};

person.showFriend(); //Hàm chạy đúng

person.showFriendThis(); // Hàm chạy sai
