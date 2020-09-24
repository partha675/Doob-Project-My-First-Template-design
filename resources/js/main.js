$(document).ready(function(){

	// STICKU MENU
	 
	$(".js--sticky-menu").waypoint(function(direction){
		if (direction == "down"){
	            $("nav").addClass("sticky");
		} else {
				$("nav").removeClass("sticky");
		}
	});
});

function openNav() {
	document.getElementById("mbl-menu").style.width = "100%";
}
function closeNav() {
	document.getElementById("mbl-menu").style.width = "0%";
}