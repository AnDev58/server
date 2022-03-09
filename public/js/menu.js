$(function() {
	$("nav li.menu").on("click", function (event){
		$(this).children("ul").slideToggle();
		event.stopPropagation()
	}
	)
});
