

const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];

// loop anidado

function anidado(value, value2, value3) {
    for(i in value) {
        for(j in value2) {
            for(k in value3) {
                console.log(`${value[i]}${value2[j]}${value3[k]}.com`);
            }
        }
    }
}

anidado(pronoun, adj, noun);

// 8 valores