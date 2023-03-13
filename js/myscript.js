const lista=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}

];

const allIconsDom = document.getElementById('all-icons');

const selectorDom = document.getElementById('selector');

lista.forEach(lista => {
    allIconsDom.append(createBox(lista));
});

const arraySelector=[];

createSelectorOption();

console.log(arraySelector);


selectorDom.addEventListener('change', function() {

    console.log(this.value);

    allIconsDom.innerHTML="";

    if(this.value == selectorDom.value){
        lista.filter(elemento =>{
            if(elemento.type == selectorDom.value){
                allIconsDom.append(createBox(elemento));
            }
        });

    }
	if(this.value == 'all'){
		
		allIconsDom.innerHTML="";
        lista.forEach(lista => {
			allIconsDom.append(createBox(lista));
		});

    }
    
});

function createBox(lista){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const box =document.createElement('div');
    box.classList.add('box');
    box.innerHTML=`<div class="inner-box">
                    <i style="color:#${randomColor};" class="${lista.prefix}solid ${lista.prefix}${lista.name}"></i>
                    <h5>${lista.name}</h5>
                </div>`;
    return box;
}



function createSelectorOption (){

    selectorDom.innerHTML+=`<option value="all" selected>all</option>`

    lista.forEach(elemento => {
        if(!arraySelector.includes(elemento.type)){
            arraySelector.push(elemento.type);
            selectorDom.innerHTML+=`<option value="${elemento.type}">${elemento.type}</option>`;
        }
    })
}