// let returnValor = sum2args (6 , 8);

// returnValor +=" car la somme consiste à additionner plusieurs nombres pour en faires qu'un !"

// console.log(returnValor)



// function sum2args(arg1, arg2){
//     const sum = arg1 + arg2;
//     const result = `La somme de ${arg1} avec ${arg2} est égale à ${sum}`;
//     return result;
  
// }

// let returnValor = 50
// returnValor -= 50
// returnValor += 50
// returnValor *= 50
// returnValor /= 50
// returnValor %= 50
// console.log(returnValor)

// let valorReturn  = sum2arg(8,7);
// let returnValor = substract(valorReturn,15);
// logMessage(returnValor);

// // console.log(valorReturn, returnValor);

// function sum2arg(arg1, arg2) {
//     return arg1 + arg2;
// }

// function substract(a1, a2){
//     return a1 - a2;


// }

// function logMessage(arg){
//     console.log(`Le résultat des 2 fonctions précédentes est ${arg} .`)
// }

// const myNumbers = [1, 2, 4, 8, 16, 32, 64, 128]

// const result = sumElements(myNumbers)
    
// function sumElements() {

//     let result = 0
//     for (let i=0; i< myNumbers.length; i++){
//         if (i < (myNumbers.length- 3)){
//         result += myNumbers[i];
//             }
//         }
//         return result
//     }
//     console.log(result)

// const myNumbers = [1, 2, 5, 8, 15, 33, 65, 128]

// const result = sumElements(myNumbers)
    
// function sumElements() {

//     let result = 0
//     for (let i=0; i< myNumbers.length; i++){
//         if (myNumbers[i]%2 == 0)
//             result += myNumbers[i]
//         }
//         return result
//     }
//     console.log(result)

// const myNumbers = [128, 64, 32, 16, 8, 4, 2, 1]

// const result = subsElement(myNumbers)

// function subsElement(){
//     let result = myNumbers[0]
//     for (let i = 1; i < myNumbers.length; i++){
//         result -= myNumbers[i]
//     }return result
// }console.log(result)

// const myNumbers = [1, 2, 5, 8, 15, 33, 65, 128]

// const result = sumElements(myNumbers)
    
// function sumElements() {

//     let result = 0
//     for (let i=0; i< myNumbers.length; i++){
//         if (myNumbers[i]%2 !== 0)
//             result += myNumbers[i]
//         }
//         return result
//     }
//     console.log(result)

// const myNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]

// const result = strangeSum(myNumbers)
    
// function strangeSum() {
//     let result =0
//     for (let i=0; i< myNumbers.length; i++){
//         if (i % 3 == 0)continue;
//         result += myNumbers[i]
//         }
//         return result
//     }
//     console.log(result)

// const myNumbers = [1,64,8,2,4,32,16]

// const res1 = getMinimum(myNumbers)

// function getMinimum(){
//     let res1 = myNumbers[0]
//     for (let i = 1; i < myNumbers.length; i++){
//     if (myNumbers[i] < res1){
//     res1 = myNumbers[i]
//        }
//     }return res1
// }console.log(res1)


// const res2 = getMaximum(myNumbers)

// function getMaximum(){
//     let res2 = myNumbers[0]
//     for (let i = 1; i < myNumbers.length; i++){
//         if (myNumbers[i] > res2){
//         res2 = myNumbers[i]
//         }
//     }return res2
// }console.log(res2)


// const res3 = getMean(myNumbers)
// const tab = getSupMeanTab(myNumbers)

// function getMean(){
//     let res3 = 0
//     for (let i = 0; i < myNumbers.length; i++){
//         res3 += myNumbers[i]
//     }
//     res3 /= myNumbers.length
//     return res3


        
// }console.log(res3)

// function getSupMeanTab(){
//     let tab = []
//     for (let i = 0; i < myNumbers.length; i++){
//         if (myNumbers[i] > res3){
//             tab.push(myNumbers[i])
//         }
//     }return tab
// }console.log(tab)


// const res3 = getMean(myNumbers)
// const tab = getMean(myNumbers)

// function getMean(){
//     let res3 = 0
//     for (let i = 0; i < myNumbers.length; i++){
//         res3 += myNumbers[i]
//     }
//     res3 /= myNumbers.length
//     console.log(res3)
//     let tab = []
//     for (let i = 0; i < myNumbers.length; i++){
//         if (myNumbers[i] > res3){
//             tab.push(myNumbers[i])
//         }
//     }
//     return tab



        
// }
// console.log(tab)

// ----------------------------------------------------------------------------//

const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

// # 1. écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]

// # 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas

// # 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza

// # 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques

// # 5. Ecrire une fonction qui prend en parametre un ingredient et qui retourne un tableau des noms des pizzas qui ont cet ingredient

// console.log(pizzaName(pizzas))

// function pizzaName(tab){
//     let pizzaNames =[]   
//     for (i = 0 ; i < tab.length ; i++){
//         pizzaNames.push(tab[i].name)
//     }return pizzaNames
// }
// /-----------------------------------------------------------------/
// console.log(pizzaPrices(pizzas))

// function pizzaPrices(price){
//     let pizzaMeanPrices = 0
//     for (i = 0 ; i < price.length ; i++){
//         pizzaMeanPrices += price[i].price
//     }
//     pizzaMeanPrices /= price.length
//     return pizzaMeanPrices.toFixed(2)
// }
// -------------------------------------------------------------------------
// console.log(getIngredientsByPizzaName ('Regina',pizzas));

// function getIngredientsByPizzaName(name, arr){
//     let targetPizza
//     for (i = 0 ; i < arr.length ; i++){
//         if (arr[i].name === name){
//             targetPizza = arr[i];
//             break;
//         }
//     }

//     let ingredients = []
//     if(targetPizza){
//         ingredients = targetPizza.ingredients
//     }

//     return targetPizza.ingredients
// }
// ----------------------------------------------------------------------------
// const res1 = getAllIngredients(pizzas)
// console.log(res1);
// function getAllIngredients(array){
//     let allIngredients = []

//     for (let i = 0; i < array.length; i++){
//         const currentPizza = array[i]
//         for(let j = 0; j < currentPizza.ingredients.length; j++){
//             allIngredients.push(currentPizza.ingredients[j])

//         }
//     }

//     return allIngredients
// }
// ------------------------------------------------------------------------------
const res2 = chooseIngredient('miel',pizzas)
console.log(res2);
function chooseIngredient(ingredientName,arr){
    let pizzasName = []; 
    for (i = 0 ; i < arr.length ; i++){
        const currentPizza = arr[i]
        if(currentPizza.ingredients.includes(ingredientName)){
            pizzasName.push(currentPizza.name)
        }

        }
        return pizzasName
    }




