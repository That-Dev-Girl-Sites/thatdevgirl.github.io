$(document).ready(function(){$("a.scroll").click(function(t){t.preventDefault();var o=$(this).attr("href"),e=$(window).width()>640?50:86;$("html, body").animate({scrollTop:$(o).offset().top-e},1e3)})});