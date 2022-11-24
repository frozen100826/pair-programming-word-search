const transpose = require("/Users/mingunchoi/lighthouse/async/matrix_transposition.js");
const eqArrays = require("/Users/mingunchoi/lighthouse/lotide/eqArrays.js")

const wordSearch = (letters, word) => { 

    if (eqArrays(letters, [])) {

        return false;
    
    }

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
       
        if (l.includes(word)) return true
    }

    let newLetters = transpose(letters);

    const verticalJoin = newLetters.map(rs => rs.join(''))

    for (r of verticalJoin) {
       
        if (r.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch