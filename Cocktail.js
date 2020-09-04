class Cocktail{
    async getCocktail(recipe){
        const cocktailResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipe}`)
        
        const cocktails = await cocktailResponse.json()

        return{
            cocktails
        }
    }
    async getCocktailRandom(){
        const cocktailResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        
        const cocktails = await cocktailResponse.json()

        return{
            cocktails
        }
    }
}