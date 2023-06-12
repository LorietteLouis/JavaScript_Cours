const mainContainerTag = document.querySelector(".main-container");

let firstPart = `j3 m'4pp3113`;
const firstName = `10ui5`;
const age = 26;
const brotherName = `X314-`;
const brotherAge = Math.floor(Math.random()*20)+10;

let result = `80nj0ur5, ${firstPart} ${firstName} 37 j'4i ${age} 4n5. M0n frèr3 ${brotherName+64} 4 ${age+16} 4n5.`;

if(brotherAge % 2 == 0){
    result = `1'463 d3 m0n fr3r3 357 p4ir3. I1 4 ${brotherAge} 4n5.`
} else {
    result = `l'463 d3 m0n fr3r3 357 imp4ir3. I1 4 ${brotherAge} 4n5.`
}

const myArray = ['Jimmy','Cyri1','D4mi3n','R3mi','L4uri3n','S4lim','10ui5']
const idOne = {
    name: 'Gork',
    age: 34,
    size: 2.25,
    weight: (Math.floor(Math.random()*100)+200),
    town: {name: 'NeoPolis', population: (Math.floor(Math.random()*10000000)+20000000), superficy:(Math.floor(Math.random()*100)+50) },
}
const idTwo = {
    name: 'Bork',
    age: 29,
    size: 2.30,
    weight: (Math.floor(Math.random()*100)+200),
    town: {name:'NightCity',population: (Math.floor(Math.random()*10000000)+20000000), superficy:(Math.floor(Math.random()*100)+50) },
}




let res1 = calculDensity(idOne), res2 = calculDensity(idTwo), densityBig, densitySmall;

if (res1 > res2){
    densityBig = idOne
    densitySmall = idTwo
} else {
    densityBig = idTwo
    densitySmall = idOne
}

mainContainerTag.textContent = `La ville ${densityBig.town.name} est la plus avec une population de ${calculDensity(densitySmall)} au kilomètre carré. Sachant que la population est de ${densityBig.town.population} d'habitant sur une superficie de ${densityBig.town.superficy} kilomètre carré.`;

function calculDensity(density){
    return Math.round(density.town.population / density.town.superficy)
}