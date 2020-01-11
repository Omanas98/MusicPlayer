$('#people').on('click', 'button', showProfile)

play

function showProfile(){
     let image = $(this).parent().find('#myImage').attr('src')
     $('#allSongs img').attr('src', image)
}









