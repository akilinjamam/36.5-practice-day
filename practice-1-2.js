// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const student = {
    name: '',
    id: 306,
    subject: 'BBA',
    marks: { bangla: 'A-', english: 'A', math: 'A+', accounting: 'A+', marketing: 'B', finance: 'B+', management: 'A', hrm: 'A+' },
    highestMarks: ['accounting', 'math', 'hrm'],
    recheck: function (subject, names) {
        const theRecheck = `${this.name = names} want to recheck the subject, ${this.marks.subject = subject}.`;
        return theRecheck
    }
}


const recheckMarks = student.recheck('bangla', 'rahat');
console.log(recheckMarks);

student.marks.english = 'A+'

console.log(student.marks)

const templeteString = `${student.name} got  ${student.marks.accounting} in ${student.highestMarks[0]} , I wish his success in the future with bright result`

console.log(templeteString);