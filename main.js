let audio = document.getElementById("audio")
function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

function marked(){
    let active = on('click','.playlist', play());
    $('playlist').click();
}

$( "li" ).eq( 2 ).css( "background-color", "#FF8066" );

$( "li" ).eq( -2 ).css( "background-color", "#FF8066" );

$( "li" ).eq( 5 ).css( "background-color", "#FF8066" );

$( "body" ).find( "div" ).eq( 2 ).addClass( "grey");

$(this).find(".playlist");

$('.playlist').on('click', '.fa-play-circle', showSong)

function showSong(){
    let image = $(this).closest('.playlist').find('img').attr('src')
    $('.musicPlayer img').attr('src', image)

    let name = $(this).closest('.playlist').find('h4').text()
    $('.musicPlayer h4').text(name)

    let songs = $(this).closest('.playlist').find('audio').attr('src')

    $('.musicPlayer audio').attr('src', songs)
    play()
}
