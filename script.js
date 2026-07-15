function bukaUndangan(){

document.getElementById("isi")
.scrollIntoView({
behavior:"smooth"
});

document.getElementById("musik").play();

}


let tanggal = new Date("October 8, 2026 08:00:00").getTime();


setInterval(function(){

let sekarang=new Date().getTime();

let jarak=tanggal-sekarang;


let hari=Math.floor(jarak/(1000*60*60*24));

let jam=Math.floor(
(jarak%(1000*60*60*24))/(1000*60*60)
);


document.getElementById("countdown").innerHTML=
hari+" Hari "+jam+" Jam";


},1000);