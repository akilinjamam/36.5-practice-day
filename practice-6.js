// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// object
const object = { name: 'kalimuddin', age: 18, profession: 'baper hoteler manager', maritualStatus: 'complex' };

const age = object.age;

console.log(age);

// array
const array = ['fish', 'egg', 'chicken', 'beef', 'soup', 'noodles'];
array[1] = 'duck-egg'
let balance = array[1];
balance = 'duck egg'
console.log(balance);
console.log(array)