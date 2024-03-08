// iife -- used to immediate call and global scope ke pollution se bachne 
// ke liye iife use hota h


//named iife
(function chai(){
    console.log(`DB Connected`)
})();// here ; explicitly lagana pdega



// with Arrow function
(()=>{
    console.log(`DB Connected Two`)
})();//again ; explicitly nhi to next code me error ayega


// with parameter and agument
((name)=>{
    console.log(`user name ${name}`)
})("vikash")

// note -- do iife ko likhne ke liye ; lagate h
