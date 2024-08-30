
/*
Problem-4:
    What will be the result of the following codes:

    var a = isNaN(‘11’);

    var a = isNaN(2-10);

    Explain your answers.
*/


// Solve it-----

var a = isNaN('11');
console.log(a);

var b = isNaN(2-10);
console.log(b);


/*
Explain ---- 
                isNaN() এই ফাংশনটি ভিতরে কোনো সংখ্যা আছে কিনা তা পরীক্ষা করে।
                
                ১. var a = isNaN('11');
                
                '11' একটি স্ট্রিং।
                যখন isNaN() ফাংশন এ একটি স্ট্রিংকে পাস করা হয়, তখন এটি সেটিকে সংখ্যায় রূপান্তর করার চেষ্টা করে।
                '11' স্ট্রিংটি সংখ্যায় রূপান্তর করা যায়।
                তাই, isNaN('11') এর মান false হবে।


                ২. var b = isNaN(2-10);
                2-10 এটি একটি গাণিতিক অপারেশন এবং এর ফলাফল -8 হবে।
                -8 একটি সংখ্যা।
                তাই, isNaN(2-10) এর মান false হবে।
*/