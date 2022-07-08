let btn = document.getElementById("setbtn");
        let alarmH = '';
        let alarmM = '';
        let alarmS = '';
        let zon = '';
        btn.addEventListener("click",()=>{
            alarmH = document.getElementById("hr").value;
            alarmM = document.getElementById("min").value;
            alarmS = document.getElementById("sec").value;
            zon =  document.getElementById("zon").value;
            console.log(alarmH,':',alarmM,':',alarmS,' ',zon);

        })

  
        var sound = new Audio("alarmAudio.wav");
        sound.loop = true;
        
        let setalarm = document.getElementsByClassName("setalarm");
        let digital = document.getElementById("digitalclock");
         let h = document.getElementsByClassName("hour");
            let m = document.getElementsByClassName("minute");
            let s = document.getElementsByClassName("second");
       
        
       // setInterval(()=>{console.log(tim.getHours()+':'+tim.getMinutes()+":"+tim.getSeconds());},1000)
        setInterval(() => {
            let time = new Date();
            let hour = time.getHours();
            let minute = time.getMinutes();
            let second = time.getSeconds();
            hrot = 30*hour + minute/2;
            mrot = 6*minute;
            secrot = 6*second;
            //console.log(second)
            h[0].style.transform = "rotate("+hrot+"deg)";
            m[0].style.transform = "rotate("+mrot+"deg)";
            s[0].style.transform = "rotate("+secrot+"deg)";
            console.log()
            digital.innerHTML = (hour+':'+minute+':'+second)
        }, 1000);
        
        
    const getTimeString = ({ hours, minutes, seconds, zone }) => {
      if (minutes / 10 < 1) {
        minutes = "0" + minutes;
      }
      if (seconds / 10 < 1) {
        seconds = "0" + seconds;
      }
      return `${hours}:${minutes}:${seconds} ${zone}`;
    };
    
    // DIGITAL CLOCK
    const renderTime = () => {
      var currentTime = document.getElementById("current-time");
      const currentDate = new Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
      var zone = hours >= 12 ? "PM" : "AM";
      if (hours > 12) {
        hours = hours % 12;
      }
      const timeString = getTimeString({ hours, minutes, seconds, zone });
      currentTime.innerHTML = timeString;
      
      if(eval(alarmH) === eval( hours) && eval(alarmM) === eval( minutes) && eval(alarmS) === eval( seconds) && zone === zon )
      {
        console.log("ring alarm"); 
        sound.play();
    
       setalarm[0].innerHTML +='<br><button id="stopalarm" >STOP</button>';
       document.getElementById('stopalarm').addEventListener('click', () => {
      // 👇️ hide button
      sound.pause();
      document.getElementById('stopalarm').style.display = 'none';
      //document. location. reload()
      
        
      })
        
      }
    };
    
    
    // Update time every second
    setInterval(renderTime, 1000);
    