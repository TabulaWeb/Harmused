// function openbox(box){
//       display = document.getElementById(box).style.display;
//       if(display=='none'){
//             document.getElementById(box).style.display='block';
//       }else{
//             document.getElementById(box).style.display='none';
//       }
// }
// $(document).ready(function(){
// 	$(".stringG").mouseover(function(){
// 		var audio=new Audio();
// 		audio.src="/static/assets/media/G.mp3";
// 		audio.autoplay=true;
// 	});
// 	$(".stringD").mouseover(function(){
// 		var audio=new Audio();
// 		audio.src="/static/assets/media/D.mp3";
// 		audio.autoplay=true;
// 	});
// 	$(".stringA").mouseover(function(){
// 		var audio=new Audio();
// 		audio.src="/static/assets/media/A.mp3";
// 		audio.autoplay=true;
// 	});
// 	$(".stringE").mouseover(function(){
// 		var audio=new Audio();
// 		audio.src="/static/assets/media/E.mp3";
// 		audio.autoplay=true;
// 	});
// })

$(document).ready(function(){
	$(".menu-mobile").click(function(){
		if ($(".menu-block").hasClass("open")==false){
			$(".menu-block").addClass("open");
		}
		else{
			$(".menu-block").removeClass("open");			
		}
	});
})