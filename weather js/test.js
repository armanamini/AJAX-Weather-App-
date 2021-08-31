$(function () {
  $("[data-box]").css("display","none")

    
    $("[data-sent]").change(function() {
       let inputVal = $("[data-sent]").val() 
        let urlKey = "https://api.openweathermap.org/data/2.5/weather?q="+inputVal+"&appid=7cb5b30952ed5f025dcd10f901794e2f&units=metric" 
    $.ajax({
      url:urlKey,
      async:"TRUE",
    // setTimeout :3000,
    beforeSend : function () {
     $("body").append(`<div class="wait"><img src="images/wait.gif"></div>` )
          
    },
      success : function (data) {
        setTimeout(() => {
         respond(data); 
        }, 1000);
        
      }
  
    })
    
    

    function respond(data) {

  $(".dark-mode").click(function () {
    $("div .app-container").toggleClass("data-theme")
  
  })


    
    // $(".dark-mode").click(function () {
    //   $("div .app-container").attr("data-theme","dark")
    //  })
$("body .wait").remove()
// console.log(data.name);
// console.log(data.weather[0]["main"]);
// console.log(data.weather[0]["description"]);
// console.log(data.main.temp);
$(".container ").append(`
<div class="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8"><div class="content"  id="${data.name}">
<div class="app-container " style="
padding-top: 15px;
padding-bottom: 15px;
">
    <div class="app-top-bar" style="margin-bottom: 0px;display: flex;justify-content: center;align-items: center;">
      <h1 class="app-heading">${data.name}</h1>
    </div>
    <div class="app-content">
    <button class="button button-block" style="
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 5px;
">
<span class="subtle" style="margin: auto;"><span>${data.weather[0]["description"]} </span></span> 
</button>
      <div class="button button-dial">
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <span class="button-dial-spoke"></span>
        <div class="button-dial-top"></div>
        <div class="button-dial-label">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M60.333,68.349V11.111C60.333,4.984,55.349,0,49.222,0c-6.126,0-11.111,4.984-11.111,11.111v57.237   c-4.15,3.323-6.667,8.397-6.667,13.874c0,9.802,7.975,17.777,17.777,17.777C59.024,100,67,92.024,67,82.223   C67,76.746,64.482,71.672,60.333,68.349z M44.778,48.363h4.444v-4.444h-4.444V35.03h4.444v-4.444h-4.444v-8.889h4.444v-4.444   h-4.444v-6.142c0-2.455,1.99-4.444,4.444-4.444c2.455,0,4.445,1.989,4.445,4.444v41.111h-8.889V48.363z"/></g></svg>
          ${Math.ceil(data.main.temp)}°C
        </div>
      </div>  
      <button class="button button-link" style="height: 137px;">       
        <div class="additional">
        <div class="additional-data">
        <img width="25" height="25" src="images/icons8-windsock.gif"/><h5 class="speed">${Math.ceil(data.wind.speed) * 2}km</h5>
        </div> 
        <div class="additional-data"> 
        <img width="25" height="25" src="https://img.icons8.com/color/500/000000/dew-point.png"/>
        <h5 class="speed">  ${data.main.humidity}%</h5>
        </div>
      <div class="additional-data">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="15" height="15"
      viewBox="0 0 172 172"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M86,143.33333l-68.08333,-114.66667h136.16667z"></path><path d="M86,150.5c-2.52983,0 -4.86975,-1.333 -6.16333,-3.50808l-68.08333,-114.66667c-1.31508,-2.2145 -1.34017,-4.96292 -0.0645,-7.2025c1.27567,-2.23958 3.65142,-3.62275 6.22783,-3.62275h136.16667c2.57642,0 4.95575,1.38317 6.22783,3.62275c1.27208,2.23958 1.25058,4.99158 -0.06808,7.20608l-68.08333,114.66667c-1.29,2.1715 -3.62992,3.5045 -6.15975,3.5045zM30.5085,35.83333l55.4915,93.46408l55.4915,-93.46408z"></path></g></g></svg>
<h5 class="speed" style='margin-left:20px'>  ${Math.ceil(data.main.temp_min)}°C</h5>
      </div>
      <div class="additional-data">
      <svg class="svg-rotate" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="15" height="15"
      viewBox="0 0 172 172"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,143.33333l-68.08333,-114.66667h136.16667z"></path><path d="M86,150.5c-2.52983,0 -4.86975,-1.333 -6.16333,-3.50808l-68.08333,-114.66667c-1.31508,-2.2145 -1.34017,-4.96292 -0.0645,-7.2025c1.27567,-2.23958 3.65142,-3.62275 6.22783,-3.62275h136.16667c2.57642,0 4.95575,1.38317 6.22783,3.62275c1.27208,2.23958 1.25058,4.99158 -0.06808,7.20608l-68.08333,114.66667c-1.29,2.1715 -3.62992,3.5045 -6.15975,3.5045zM30.5085,35.83333l55.4915,93.46408l55.4915,-93.46408z"></path></g></g></svg>
<h5 class="speed" style='margin-left:20px'>${Math.ceil(data.main.temp_max)}°C</h5>
      </div>
        </div>
      </button>
    </div>
  </div>
  </div>
`)
if (data.weather[0]["icon"] == "01d"){
    $(".container .button-link").append(`
    <img class="weather-gif" src="images/icons8-sun-unscreen.gif"/>
 
    `
     )}
     else if(data.weather[0]["icon"] == "01n"){
        $(".container .button-link").append(`
        <img class="weather-gif" src="https://img.icons8.com/color/500/000000/moon.png"/>
      
      
        `)
     }
if(data.weather[0]["icon"] == "02d" ){
$(".container .button-link ").append(`
<img class="weather-gif" src="images/icons8-partly-cloudy-day-unscreen.gif"/>
`)
    }else if(data.weather[0]["icon"] =="02n"){
        $(".app-content  .button-link ").append(`<svg class="weather-gif" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M21.5,35.83333c0,-7.91558 6.41775,-14.33333 14.33333,-14.33333h100.33333c7.91558,0 14.33333,6.41775 14.33333,14.33333v100.33333c0,7.91558 -6.41775,14.33333 -14.33333,14.33333h-100.33333c-7.91558,0 -14.33333,-6.41775 -14.33333,-14.33333z" fill="#000000"></path><path d="M77.61142,32.25c6.65425,5.96983 10.86467,14.60925 10.86467,24.25558c0,18.00625 -14.60567,32.6155 -32.6155,32.6155c-9.63917,0 -18.28217,-4.21042 -24.252,-10.86467c5.15642,13.29058 18.0385,22.7255 33.14583,22.7255c19.64742,0 35.57892,-15.92792 35.57892,-35.5825c0,-15.11092 -9.43492,-27.993 -22.72192,-33.14942zM123.66442,68.08333l-3.5475,-14.33333l3.5475,-14.33333l3.61917,14.33333z" fill="#f1c40f"></path><path d="M111.66383,61.533l10.0835,-10.78583l13.94992,-4.84108l-10.04408,10.84675z" fill="#f1c40f"></path><path d="M111.26608,46.61917l14.20792,4.0205l10.69267,10.18025l-14.24375,-3.95958z" fill="#f1c40f"></path><g fill="#3498db"><path d="M100.33333,75.25c-11.87412,0 -21.5,9.62588 -21.5,21.5c0,11.87412 9.62588,21.5 21.5,21.5c11.87412,0 21.5,-9.62588 21.5,-21.5c0,-11.87412 -9.62588,-21.5 -21.5,-21.5z"></path><path d="M118.25,100.33333c-9.8951,0 -17.91667,8.02156 -17.91667,17.91667c0,9.8951 8.02156,17.91667 17.91667,17.91667c9.8951,0 17.91667,-8.02156 17.91667,-17.91667c0,-9.8951 -8.02156,-17.91667 -17.91667,-17.91667zM53.75,100.33333c-9.8951,0 -17.91667,8.02156 -17.91667,17.91667c0,9.8951 8.02156,17.91667 17.91667,17.91667c9.8951,0 17.91667,-8.02156 17.91667,-17.91667c0,-9.8951 -8.02156,-17.91667 -17.91667,-17.91667z"></path><path d="M69.875,82.41667c-8.90559,0 -16.125,7.21941 -16.125,16.125c0,8.90559 7.21941,16.125 16.125,16.125c8.90559,0 16.125,-7.21941 16.125,-16.125c0,-8.90559 -7.21941,-16.125 -16.125,-16.125z"></path><path d="M88.50833,95.0515c-9.6972,0 -17.55833,7.86113 -17.55833,17.55833c0,9.6972 7.86113,17.55833 17.55833,17.55833c9.6972,0 17.55833,-7.86113 17.55833,-17.55833c0,-9.6972 -7.86113,-17.55833 -17.55833,-17.55833z"></path><path d="M43,126.12975c0,5.54342 4.48992,10.03692 10.03333,10.03692h62.70833c5.53983,0 10.03333,-4.4935 10.03333,-10.03692v-2.50475c0,-5.53983 -4.4935,-10.03692 -10.03333,-10.03692h-62.70833c-5.53983,0 -10.03333,4.49708 -10.03333,10.03692z"></path></g></g></g></svg>`)
    }
    if((data.weather[0]["icon"] == "03d") || (data.weather[0]["icon"] == "03n")){
        $(".container .button-link").append(`
        <svg class="weather-gif" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48"
style=" fill:#000000;"><path fill="#BBDEFB" d="M29.5 12A8.5 8.5 0 1 0 29.5 29A8.5 8.5 0 1 0 29.5 12Z"></path><path fill="#BBDEFB" d="M37 21.893A7 7 0 1 0 37 35.893 7 7 0 1 0 37 21.893zM11 22A7 7 0 1 0 11 36 7 7 0 1 0 11 22z"></path><path fill="#BBDEFB" d="M17.5 15A6.5 6.5 0 1 0 17.5 28A6.5 6.5 0 1 0 17.5 15Z"></path><path fill="#BBDEFB" d="M25 19.893A7 7 0 1 0 25 33.893A7 7 0 1 0 25 19.893Z"></path><path fill="#BBDEFB" d="M7,32c0,2.209,1.791,4,4,4h25c2.209,0,4-1.791,4-4v-1c0-2.209-1.791-4-4-4H11c-2.209,0-4,1.791-4,4V32z"></path></svg>
`)
    }
    if((data.weather[0]["icon"] == "04d") || (data.weather[0]["icon"] == "04n")){
        $(".container .button-link").append(`
        <svg class="weather-gif" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M59.36646,34.9375c-18.62437,0 -34.02165,13.57229 -36.81665,31.33667c5.375,-0.99438 10.18206,-0.94272 14.48206,-0.13647l-1.69018,5.05481c-18.40938,2.31125 -32.65418,17.95124 -32.65418,37.00562c0,8.89563 3.11645,17.06625 8.3302,23.48938h48.15979c0.61813,-11.98625 9.43229,-26.90397 23.32666,-29.0271c1.23625,-12.92688 13.09022,-22.0354 26.3396,-22.0354c5.88562,0 11.55751,2.04481 16.07251,5.72668c3.89687,-2.98313 7.49728,-4.73462 11.23291,-5.40649c0.59125,-2.23063 0.91333,-4.59332 0.91333,-7.03894c0,-15.5875 -12.63125,-28.21875 -28.21875,-28.21875c-6.85312,0 -13.14376,2.44479 -18.06189,6.52979c-6.61125,-10.37375 -18.1929,-17.27979 -31.4154,-17.27979zM108.84375,86c-11.13163,0 -20.15625,9.02462 -20.15625,20.15625c0,0.57244 0.03561,1.13643 0.08398,1.69543h-0.00525c-10.72312,1.88125 -18.89124,11.23144 -18.89124,22.49207c0,4.56875 1.34144,8.83957 3.67957,12.41394h31.25793h7.07043h4.10999h7.63208h39.88208c5.2675,-5.72438 8.49292,-13.38144 8.49292,-21.82019c0,-17.81813 -14.43187,-32.25 -32.25,-32.25c-3.52062,0 -6.90625,0.56332 -10.10437,1.61145c2.12312,4.13875 1.98644,8.70813 1.66394,11.39563l-2.76624,0.21521c-0.16394,-0.76863 -0.38519,-1.51814 -0.63513,-2.25183c-0.06988,-0.20425 -0.14521,-0.40207 -0.22046,-0.60364c-0.215,-0.56975 -0.45305,-1.12363 -0.71912,-1.66919c-0.08331,-0.16931 -0.1607,-0.34253 -0.2467,-0.50915c-0.74175,-1.42706 -1.64987,-2.7512 -2.698,-3.95251c-0.02688,-0.03225 -0.05186,-0.06492 -0.07874,-0.09448h-0.0105c-3.69263,-4.17906 -9.07632,-6.82898 -15.09094,-6.82898z"></path></g></g></svg>
`)
    }
    if((data.weather[0]["icon"] == "09d") || (data.weather[0]["icon"] == "09n")){
        $(".container .button-link").append(`
        <img class="weather-gif" src="images/icons8-rainfall-unscreen.gif"/>

`)
    }
    if((data.weather[0]["icon"] == "10d") || (data.weather[0]["icon"] == "10n")){
        $(".container .button-link").append(`
        <img class="weather-gif" src="images/icons8-heavy-rain-unscreen.gif"/>

`)
    }
    if((data.weather[0]["icon"] == "11d") || (data.weather[0]["icon"] == "11n")){
        $(".container .button-link").append(`
        <img class="weather-gif" src="images/icons8-cloud-lightning-unscreen.gif"/>

`)
    }
    if((data.weather[0]["icon"] == "13d") || (data.weather[0]["icon"] == "13n")){
        $(".container .button-link").append(`
        <img class="weather-gif" src="images/icons8-snow-storm-unscreen.gif"/>

`)
    }
    if((data.weather[0]["icon"] == "50d") || (data.weather[0]["icon"] == "50n")){
        $(".container .button-link").append(`
        <img class="weather-gif" src="https://img.icons8.com/color/500/000000/moisture.png"/>

`)
    }

     if ($(".container ").find(".card").length >= 2 ){
        $(".container").find(".card").first().remove()
       

     }
    
}
  


 })






































 
})