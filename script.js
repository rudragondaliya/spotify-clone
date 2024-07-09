$('#search-page,#podcast-page,#sign-page,#login-page,#language-page').hide()





$("a").on("click",function(){
    $("#home-page,#search-page,#podcast-page,#sign-page,#login-page,#language-page").hide();
  $($(this).attr("href")).show();
  console.log($(this).attr("href"));
})


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))