var timeBtns = document.querySelectorAll(".time-item")
let data = []

fetch("data.json")
.then(res=>res.json())
.then(res=>{
    console.log(res)
data = res;

    // --red:hsl(15,100%,70%);
    // --soft_blue:hsl(195,100%,70%);
    // --soft_red:hsl(348,100%,68%);
    // --lime_green:hsl(145,58%,55%);
    // --violet:hsl(264,64%,52%);
    // --soft_orange:hsl(43,84%,65%);

    var colors = ["hsl(15,100%,70%)","hsl(195,100%,70%)","hsl(348,100%,68%)","hsl(145,58%,55%)","hsl(264,64%,52%)","hsl(43,84%,65%)"]
    var svgs = ["./images/icon-work.svg","./images/icon-play.svg","./images/icon-study.svg","./images/icon-exercise.svg","./images/icon-social.svg","./images/icon-self-care.svg"]

    res.forEach((activity,idx)=>{
        var activityCard = document.createElement("div");
        console.log(activity.timeframes)
            activityCard.setAttribute("data-daily-current",activity.timeframes.daily.current)
            activityCard.setAttribute("data-daily-prev",activity.timeframes.daily.previous)
            activityCard.setAttribute("data-weekly-current",activity.timeframes.weekly.current)
            activityCard.setAttribute("data-weekly-prev",activity.timeframes.weekly.previous)
            activityCard.setAttribute("data-monthly-current",activity.timeframes.monthly.current)
            activityCard.setAttribute("data-monthly-prev",activity.timeframes.monthly.previous)
       
            activityCard.innerHTML = `<div class="activity-card-parent">
            <div class="svg-row" style="background-color:${colors[idx]}">
              <img data-svg class="svg" src=${svgs[idx]} alt="svg">
            </div>
            <div class="activity-card">
                <div class="activity-top-row flex between">
                  <small class="small ml-10" data-activity>${activity.title}</small>
                  <div class="ellipse"><small class='mr-10'>...</small></div>
                </div>
                <div class="activity-content">
                    <h1 class="activity-h1"><span data-time>${activity.timeframes.daily.current}</span>hrs</h1>
                    <div class="caption-row">
                      <small class="small fade">Last <span class='time-metric'>week</span> - <span data-caption>${activity.timeframes.daily.previous}</span>hrs</small>
                    </div>
              </div>
            </div>
          </div>`

          document.querySelector(".activity-card-container").append(activityCard)
    })


})



timeBtns.forEach((btn,idx)=>{
    btn.onclick=(e)=>{
        let time = e.target.getAttribute('data-time');
        console.log("Time: " + time)

        var cards = document.querySelectorAll(".activity-card-parent");

        cards.forEach((c,idx)=>{
            console.log(c)
            switch(time){

                case "daily":
                    c.querySelector("[data-time]").innerHTML = data[idx].timeframes.daily.current
                    c.querySelector("[data-caption]").innerHTML = data[idx].timeframes.daily.previous
                    c.querySelector(".time-metric").innerHTML = "day"
                break;

                case "weekly":
                    c.querySelector("[data-time]").innerHTML = data[idx].timeframes.weekly.current
                    c.querySelector("[data-caption]").innerHTML = data[idx].timeframes.weekly.previous
                    c.querySelector(".time-metric").innerHTML = "week"
                break;

                case "monthly":
                    c.querySelector("[data-time]").innerHTML = data[idx].timeframes.monthly.current
                    c.querySelector("[data-caption]").innerHTML = data[idx].timeframes.monthly.previous
                    c.querySelector(".time-metric").innerHTML = "month"
                break;
            }
        })
    }
})


function dummyfx(){
    console.log('dummy fx')
}