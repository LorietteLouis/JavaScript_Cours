const users = getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        console.log(data.results)
        if (!response.ok) {
            throw new Error (`Fetch data issue`)
        }
        getLastElement(data.results)
        getOldAge(data.results)
        getNumberUsersGender(data.results)
        getNewDataOne(data.results)
        getBoomer(data.results)
        helloGuys(data.results)
    } catch (error) {
        console.log(error);
    }
}

// a. afficher le dernier élément du tableau
function getLastElement(arr){
    console.log(arr[arr.length - 1])
}
// b. afficher l'age le plus élevé
function getOldAge(arr){
arr.sort(function(a,b){
    return b.dob.age - a.dob.age;
});
console.log(arr[0])
}
// c. afficher le nombre d'homme et le nombre de femmes

function getNumberUsersGender(arr){
    let maleCount =0
    let femaleCount = 0

    arr.forEach(el => {
        el.gender === "female"? femaleCount++ : maleCount++;
    //     if(el.gender == "male"){
    //     maleCount++
    //     } else {
    //         femaleCount++
    //     }
    })
    console.log(maleCount,femaleCount)
}
// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}

function getNewDataOne(arr){
    const result = arr.map(obj =>{

        return {name: `${obj.name.first} ${obj.name.last}` , age: `${obj.dob.age}`}
    });
    console.log(result)
}

// 2. afficher un tableau d'objet au format {name : Daphne Durand, ageInferiorThirty: true}

function getBoomer(arr){
    const result = arr.map(obj =>{
        return {name: `${obj.name.first} ${obj.name.last}` ,ageInferiorThirty: `${obj.dob.age > 30}`}
    })
    console.log(result)
}


// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}

function helloGuys(arr){
    const result = arr.map(obj =>{
        return {mail: `${obj.email}`, message: `Bonjour ${obj.name.first}, votre adresse "${obj.location.street.number}${obj.location.street.name},${obj.location.postcode}" est-elle correcte ?`}
    })
    console.log(result)
}