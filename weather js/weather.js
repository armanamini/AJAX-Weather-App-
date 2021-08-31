$(function () {

    
    $("[data-sent]").change(function() {
        let inputVal = $("[data-sent]").val()
        let urlKey = "https://api.openweathermap.org/data/2.5/weather?q="+inputVal+"&appid=7cb5b30952ed5f025dcd10f901794e2f&units=metric"  
    $.ajax({
      url:urlKey,
      async:"TRUE",
      success : function (data) {
         respond(data);
   
      }
    })
    function respond(data) {
//   let myShit = JSON.parse(data) 
//          console.log($(myShit).text());
console.log(data.name);
console.log(data.weather[0]["main"]);
console.log(data.weather[0]["description"]);
console.log(data.main.temp);
$(".container ").append(`
<div class="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8"><div class="content" id="${data.name}">
<h2>${data.name}</h2>
<h1>${Math.ceil(data.main.temp) }</h1>
<h3>${data.weather[0]["description"]}</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vero.</p>
</div>
`)
if(data.weather[0]["icon"] == "03d" || data.weather[0]["icon"] =="03n"){
$(".container .card .content").append(`<div class="icon_container_sunny">
<div class="hot">
  <div class="sun"></div>
</div>
</div>`)
    }
    if (data.weather[0]["icon"] == "01d" || data.weather[0]["icon"] =="01n"){
        $(".container .card .content").append(`<svg class="rain-icon icon-vgradient-sunny" viewBox="0 0 302.4 302.4" xml:space="preserve" aria-labelledby="sunny-weather-icon">
        <title id="sunny-weather-icon">Sunny Weather</title>
        <linearGradient id="gradient-vertical-sunny" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--color-stop-1)"></stop>
          <stop offset="100%" stop-color="var(--color-stop-2)"></stop>
        </linearGradient>
        <g>
          <g>
            <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
      c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4
      c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2
      S200.4,180.4,190.4,190.4z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
      C302.4,145.6,297.6,140.8,292,140.8z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
      C161.6,255.6,156.8,250.8,151.2,250.8z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4
      C161.6,4.8,156.8,0,151.2,0z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4
      C51.6,145.6,46.8,140.8,41.2,140.8z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z"></path>
          </g>
        </g>
      </svg>`
         )}


















         
     if ($(".container ").find(".card").length >= 2 ){
        $(".container").find(".card").first().remove()
     }
}














    })
})