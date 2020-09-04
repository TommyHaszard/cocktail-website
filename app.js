const cocktail = new Cocktail;

const ui = new UI;

const searchCocktail = document.getElementById('searchCocktail');
const randomButton = document.getElementById('randomButton')

let index = 0;
searchCocktail.addEventListener('keypress', (e) => {
    const recipeText = e.target.value;
    if(e.key === 'Enter'){
        cocktail.getCocktail(recipeText).then(data =>{
           if(data.cocktails.message === 'Not Found'){
               ui.showAlert('Recipe not found', 'alert alert-danger')
                }else{
                    ui.showRecipe(data.cocktails.drinks, index)
                }
            }
        )

    }
})

randomButton.addEventListener('click', () => {
    cocktail.getCocktailRandom().then(data =>{
        ui.getRandomCocktail(data.cocktails.drinks[0])
    })
})