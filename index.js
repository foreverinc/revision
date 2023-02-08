const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const Btn = document.getElementById("btn");
const Btn1 = document.getElementById("btn1");
const ongoing=document.getElementById('on-go')
Btn1.classList.add('d-none')
let courseUnits = ["MICROBIOLOGY", "PARASITOLOGY", "FIRST AID", "ETHICS AND SAFETY", "ICT", "ANATOMY AND PHYSIOLOGY"];

Btn.addEventListener("click", function () {
    let unitNumber = Number(courseUnits.length);
    let x = Math.random() * unitNumber;
    x = Math.floor(x);
    const unitName = document.getElementById("name");
    unitName.innerText = courseUnits[x];
    Btn.classList.add('d-none')
    Btn1.classList.remove('d-none')
    ongoing.innerText=courseUnits[x]

    let endTime = new Date();
    //endTime.setHours(endTime.getHours() + 5);
    endTime.setSeconds(endTime.getSeconds() + 5);    
    let currentTime = new Date();
    let timeLeft = endTime - currentTime;
    let timer = setInterval(function () {
        currentTime = new Date();
        timeLeft = endTime - currentTime;
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        hourElement.innerText = `0${hours} Hrs: `;
        minuteElement.innerText = `${minutes} Mins: `;
        secondElement.innerText = `${seconds} Secs: `;
        console.log(timeLeft)
        if (timeLeft < 1000) {
            clearInterval(timer);
            Btn.classList.remove('d-none')
            Btn1.classList.add('d-none')
        }
    }, 1000);
});





