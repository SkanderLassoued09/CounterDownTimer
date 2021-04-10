
/*
let finalDate = "1 jan 2022" ; 
let currentDate = new Date();
console.log(currentDate)
let day = currentDate.getDay();
console.log('this is day ' , day)
let month = currentDate.getHours();
console.log('this is month ' ,month)
let minute = currentDate.getMinutes();
console.log('this is minute ' ,minute)
let second = currentDate.getSeconds();
console.log('this is second ' ,second)
*/

const newYear = "1 jan 2022" ; 
function countdown(){
    const newYearDate = new Date(newYear);
    console.log(newYearDate)
    const currentDate = new Date();
    console.log(currentDate)
    console.log('The rest of days ' , (newYearDate - currentDate) / 1000)
    const totalSeconds =(newYearDate - currentDate) / 1000;
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds/3600) % 24 ; 
    const minute = Math.floor(totalSeconds/60) % 24 ;
    const second = Math.floor(totalSeconds) % 60 ; 
    console.log(day , hour , minute , second)
    document.getElementById('day').innerHTML = day ;
    document.getElementById('hour').innerHTML = hour ;
    document.getElementById('minute').innerHTML = minute ;
    document.getElementById('second').innerHTML = second ;
    
}


countdown();
setInterval(countdown,1000)