let audio = document.getElementById("audio");
let songs = ["thunder", "linkin", "homicide"];
function play(){
      audio.play();
}

function pause(){
      audio.pause();
}

function marked(){
      let active = on('click','.playlist', play());
      $('playlist').click(active);
}





$( "li" ).eq( 2 ).css( "background-color", "#FF8066" );


$( "li" ).eq( -2 ).css( "background-color", "#FF8066" );


$( "li" ).eq( 5 ).css( "background-color", "#FF8066" );


$( "body" ).find( "div" ).eq( 2 ).addClass( "grey" );