let materials = [
                    'Hydrogen',
                    'Helium',
                    'Lithium',
                    'Beryllium'
                ];

let materialsLength = materials.map(material => material.length);

console.log(materialsLength);

var Test

Test = () => {
    let a = 100;
    let b = 200;
    return (a + b);
}

// console.log(Test);

let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrTest.length);
arrTest.splice(5, 1);
console.log(arrTest);

let arrMap = arrTest.map(x => x*3);
console.log(arrMap);