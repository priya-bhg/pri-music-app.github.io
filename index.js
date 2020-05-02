window.addEventListener("load",()=>{
	const sounds=document.queryselectorAll(".sounds");
	const pads= document.queryselectorAll(".pads div");
	pads.forEach(pad,index)=>{
		pad.addEventListener("click",function()
		{ sounds[index].play();

		});
	});
});