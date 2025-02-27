//Object in JS

// var phoneKey = 'phone';

// var myInfo = {
//     name: 'khiem',
//     age: 18,
//     address: 'Nha Trang,VN',
//     [phoneKey]: '6591082321',
// };

// var myKey = 'address';

// console.log(myInfo);

//them mot key moi vao object
// myInfo.email = 'khiemtran123@gmail.com';
// Neu them mot key moi ma bi dinh vao nhung quy tac
// dat ten thi co the lam nhu sau
// vd: myInfo['my-email'] = 'value'
// console.log(myInfo);

// console.log(myInfo[myKey])

// console.log(myInfo.phone);

// //xoa mot key dung delete
// delete myInfo.address;
// console.log(myInfo)

// Function -> phuong thuc / method
// Others -> Thuoc tinh / property


// Object constructor

function User(firstName, lastName, phone) {
    // dua vao day nhung thuoc tinh chung cua tung doi tuong
    this.firstName = firstName,
    this.lastName = lastName,
    this.phone = phone,
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Khiem','Tran','031252343');

var user = new User('K00','T004','2131252391');

// them key cho tung user
author.email = 'khiemtran@gmail.com',
user.comment = 'hello moi nguoi'

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());