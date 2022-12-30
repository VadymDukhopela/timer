let deadline = new Date('Dec 31 2022 00:00:00');

function count (){
    let now = new Date();
    gap = deadline - now;
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if(gap < 1){
        alert('хапиздую')
    }else{
        document.getElementById('days__info').innerText = days + ' Дней';
        document.getElementById('hours__info').innerText = hours + ' Часов';
        document.getElementById('minutes__info').innerText = minutes + ' Минут';
        document.getElementById('seconds__info').innerText = seconds + ' Секунд';
    }
    
}


setInterval(count, 1000);
