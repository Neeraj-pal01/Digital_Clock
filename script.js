
setInterval(() => {
const date=new Date();

const hours= date.getHours()==0 ? 12 : date.getHours();
const minutes =  date.getMinutes() >9 ? date.getMinutes() : `0${date.getMinutes()}`;
const seconds= date.getSeconds()  >9 ? date.getSeconds(): `0${date.getSeconds()}`


const hours12 = hours <= 12 ? hours : hours - 12;
const ampm=hours >= 12 ? 'PM' : 'AM';
console.log(hours,hours12, minutes, seconds, ampm);
    
    document.getElementById('hour').innerHTML=hours12 > 9 ? hours12 : `0${hours12}`;
    document.getElementById('minute').innerHTML=minutes;    
    document.getElementById('second').innerHTML=seconds;
    document.getElementById('ampm').innerHTML=ampm;
}, 1000);
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
};

