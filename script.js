$('#search-page,#podcast-page,#sign-page,#login-page,#language-page').hide()





$("a").on("click",function(){
    $("#home-search,#search-page,#podcast-page,#sign-page,#login-page,#language-page").hide();
  $($(this).attr("href")).show();
  console.log($(this).attr("href"));
})