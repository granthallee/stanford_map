//###DECLARATION OF GLOBALS###




//###DECLARATION OF FUNCTIONS###




//runs when html is loaded
$(document).ready(function(){

  //creates map
  var mymap = L.map('mapid').setView([37.427489, -122.170378], 15);

  //adds carto base layer to the map
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a> | <a href="http://www.antievictionmap.com/">Anti-Eviction Mapping Project</a>'
  }).addTo(mymap);

  L.marker([37.426907, -122.170670]).addTo(mymap);
//###ADDS LAYERS TO THE MAP###

  mymap.spin(true); //starts loading symbol



  mymap.spin(false); //stops the loading symbol
//###DECLARATION OF EVENT LISTENERS###

  //adds interactivity to the flyTo buttons
  $("#vida_button").click(function() {
      mymap.flyTo(Vida.latLng, 16);
  });
  $("#vara_button").click(function() {
      mymap.flyTo(Vara.latLng, 16);
  });
  // $("#shvn_button").click(function() {
  //     mymap.flyTo(SixHundred_VN.latLng, 16);
  // });


  //adds functionality to the before/after slider
  $(".slider").click(function(){
      mymap.spin(true);
      if($('#timebox').is(':checked')){
        $(".yearSpan").html("Since");
        $("#after").css( "font-weight", "bold" );
        $("#before").css( "font-weight", "normal" );
        timeHelper(mymap, Vida, true);
        timeHelper(mymap, Vara, true);
      }else{
        $(".yearSpan").html("Before");
        $("#before").css( "font-weight", "bold" );
        $("#after").css( "font-weight", "normal" );
        timeHelper(mymap, Vida, false);
        timeHelper(mymap, Vara, false);
      }
      mymap.spin(false);
  })
});
