interface Input<T = any> {
    weight: number,
    value: T,
    freak: number | null
}

//use trustworthy form for data becouse i can't change main function's signature
function arrayToInput<T = any>(weightValues: Array< [number, T] >): Array<Input<T>> {
    let inputs: Array<Input<T>> = []
    for (let value of weightValues) {
        inputs.push({
            weight: value[0],
            value: value[1],
            freak: null,
        })
    }
    return inputs
}

//maybe better witout T only any
function weightFunc<T = any>(weightValues: Array< [number, T] >): () => T {
    const inputs = arrayToInput(weightValues)

    let sumWeight = 0;  //all weight for count part for every
    for (let input of inputs) {
        sumWeight += input.weight;
    }

    for (let input of inputs) { //chance part for every
        input.freak = input.weight / sumWeight;
    }

    return () => {
      let limit = 0;
      let rand = Math.random()

      for (let input of inputs) {
        limit += input.freak;

        if (limit >= rand) { //if chance around limit
            return input.value
        }
      }
    }
}

const rand = weightFunc<string>([ [100, 'A'], [150, 'B'], [300, 'C'], [200, 'D'], [50, 'B'] ]);
const counter = { A: 0, B: 0, C: 0, D: 0 }
const total = 100;
 
for(let i = 0; i < total; i++) counter[rand()]++;

// Result 
// trueCounter / total = ~0.9 
// falseCounter / total = ~0.1
console.log(counter)

// const rand = weightFunc([ [10, true], [90, false] ]); 
// let trueCounter = 0;
// let falseCounter = 0;
// const total = 1000;
 
// for(let i = 0; i < total; i++) {
//     rand() ? trueCounter++ : falseCounter++ 
// }  

// console.log(trueCounter, falseCounter)