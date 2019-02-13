let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let front = document.getElementsByClassName("front");
let back = document.getElementsByClassName("back");

const flipMe = (id)=>{
	id.className = "flipper";
	const flipBack = ()=>{
	id.className = "flipback";
	};
	setTimeout(flipBack, 3000);
};

container.addEventListener("click", ()=>flipMe(container));
container2.addEventListener("click", ()=>flipMe(container2));
