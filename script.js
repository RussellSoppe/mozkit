let container = document.getElementById("container");
let front = document.getElementsByClassName("front");
let back = document.getElementsByClassName("back");

const flipMe = ()=>{
	container.className = "flipper";
	const flipBack = ()=>{
		container.className = "flipback";
	};
	setTimeout(flipBack, 3000);
};

container.addEventListener("click", flipMe);
