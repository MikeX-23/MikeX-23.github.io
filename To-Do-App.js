$("ul").on("click", "li", function(){
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");
	} else {
		//turn it gray
		$(this).css("color", "gray");
	$(this).css("text-decoration", "line-through");
	//adding "this" targets the li that is clicked, instead of all lis//
	//can make function one line by defining it as an object//
	//note: in js, cant have property names that have hyphens; use camelCase instead//
	//note: can replace all this code by adding class to css and using toggle
	}
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	//can also use fadeOut() instead of remove() but content will still be there
	//to make it fade out and actually remove it, put function in fadeout(), which should have $(this).remove()
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
	//grabbing a new todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});