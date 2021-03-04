let names = ["Paulo", "Enrique", "Jorge", "Luisa", "Maria", "Dulce"];
let cards = document.getElementById("cards");

for(let i=0; i<names.length; i++){ 
    
    let template = `<div id="name${i}" class="col-12 col-sm-12 col-md-6 col-lg-3" onClick="removeElement(${i})">
                        <div class="card">
                            <div class="card-body">
                                ${names[i]}
                            </div>
                        </div>
                    </div>`;
    cards.innerHTML += template;

}

const removeElement = (id) => {
    let element = document.getElementById(`name${id}`);
    element.remove();
}

const addElement = () => {
    
    let newName = prompt("Ingrese el nuevo usuario");
    names.push(newName);

    addInternal(names.length-1);

    function addInternal(value){
        
        let template = `<div id="name${value}" class="col-12 col-sm-12 col-md-6 col-lg-3" onClick="removeElement(${value})">
                            <div class="card">
                                <div class="card-body">
                                    ${names[value]}
                                </div>
                            </div>
                        </div>`;
        cards.innerHTML += template;

    }

}
