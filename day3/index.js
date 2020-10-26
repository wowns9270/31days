
setInterval(createSnowFlake , 50);

function createSnowFlake(){
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random()* window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random () *5  +3 + 's';
    document.body.appendChild(snow_flake);

    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 +10 +'px';

    setTimeout(() =>{
        snow_flake.remove();
    },5000)



}


