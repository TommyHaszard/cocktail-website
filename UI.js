class UI{
    constructor(){
        this.board = document.getElementById('recipeReturn');
    }

    showRecipe(recipe, number){
        
        let input = recipe[number];
        const entries = Object.entries(recipe[number]);
        let ingredient = '';
        let size = '';
            for(let k=21; k< 35; ++k ){
            if(entries[k][1] !== null){
                ingredient += '<li class="list-group-item">'+ entries[k][1]+ '</li>';
                }
             }
            
             for(let j=36; j< 50; ++j ){
                if(entries[j][1] !== null){
                    size += '<li class="list-group-item">'+ entries[j][1]+ '</li>';
                }
                
            }

        this.board.innerHTML = `
        <div class ="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${input.strDrinkThumb}">
                    <button type="button" class="col btn btn-success recipeButton">Next Type</button>
                </div>
                <div class="col">
                    <h2>${input.strDrink}</h2>
                    <h5>Ingredients:</h5>
                    <div class="row">
                        <ul class="list-group-flush col">
                        ${ingredient}
                        </ul>
                        <ul class="list-group-flush col">
                        ${size}
                        </ul>
                    </div>
                <h5>Instructions:</h5>
                <p>${input.strInstructions}</p>
                </div>
            </div>
        </div>
        `
        const buttonPress = document.querySelector('.recipeButton');
        buttonPress.addEventListener('click', () => {
                if (number < recipe.length-1){
                number = number + 1;
                this.showRecipe(recipe, number)
                }
                else{
                    number = 0;
                    this.showRecipe(recipe, number);
                     }
        })
    }

    getRandomCocktail(recipe){
        const entries = Object.entries(recipe);
        let ingredient = '';
        let size = '';
            for(let k=21; k< 35; ++k ){
            if(entries[k][1] !== null){
                ingredient += '<li class="list-group-item">'+ entries[k][1]+ '</li>';
                }
             }
            
             for(let j=36; j< 50; ++j ){
                if(entries[j][1] !== null){
                    size += '<li class="list-group-item">'+ entries[j][1]+ '</li>';
                }
                
            }

        this.board.innerHTML = `
        <div class ="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${recipe.strDrinkThumb}">
                </div>
                <div class="col">
                    <h2>${recipe.strDrink}</h2>
                    <h5>Ingredients:</h5>
                    <div class="row">
                        <ul class="list-group-flush col">
                        ${ingredient}
                        </ul>
                        <ul class="list-group-flush col">
                        ${size}
                        </ul>
                    </div>
                <h5>Instructions:</h5>
                <p>${recipe.strInstructions}</p>
                </div>
            </div>
        </div>
        `
    }
        

    clearRecipe(){
        this.board.innerHTML = '';
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}