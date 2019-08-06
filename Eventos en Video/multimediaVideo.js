var video = document.querySelector(".uno");
	video.addEventListener("play",function(){alert("Apreto Play");});

var video2 = document.querySelector(".uno");	
	video2.addEventListener("ended",function(){alert("Termino el video");});

var video3 = document.querySelector(".uno");	
	video3.addEventListener("seeking",function(){alert("Adelanto el video");});