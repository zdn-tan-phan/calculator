class Calculator {
	constructor() {
		this.input = document.querySelector(".screen-result")
		this.button = document.querySelectorAll(".btn")
	}

	init() 
	{
		for(let i = 0; i < this.button.length;i++)
		{
			this.button[i].addEventListener('click', function(e) {
				switch(e.target.innerText){
					case "C" :
						input.innerHTML = "";
						break;
					case "=":
						input.innerHTML = eval(input.innerHTML);
						break;
					default : 
						input.innerHTML += e.target.innerHTML;
				}
			});
		}
	}
}

const calculate = new Calculator();
calculate.init();