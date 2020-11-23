const anagrams = (stringA, stringB) => {

  ////Fonctions////

   //Fonction pour transformer une chaine de caractère en tableau de caractère alphabétiques trié (et en minuscules)
   const stringFormat = (str) => {
     //On enlève les caractère speciaux
     str = str.replace(/[^a-zA-Z]/g, '')
     //Tous en minuscules
     str = str.toLowerCase();
     //On crée un tableau à partir de la chaine de caractère
     let ar = str.split('');
     //On trie le tableau par ordre alphabétique
     ar = ar.sort();

     return ar
   }

   //Fonction qui compare l'égalité de deux tableaux
   const compare = (ar1, ar2) => {
    if(ar1.length != ar2.length)
      return false;
    for(let i=0; i<ar1.length; i++) {
      if(ar1[i] != ar2[i])
        //Faux si éléments différents
        return false
    }
    //Les deux tableaux sont identiques
    return true;
   }

   ////Execution////
   let arA, arB;

   arA = stringFormat(stringA);
   arB = stringFormat(stringB);

  return compare(arA,arB);
};


class Stack {

  constructor() {
    this.stack = [];
    this.index = 0;
  }

  push(element) {
    this.stack[this.index] = element
    this.index++
  }

  pop() {
    this.index--
    return this.stack[this.index]

  peek() {
    if(this.stack.length > 0)
      return this.stack[0];
  }

};


const fizzBuzz = (n) => {
  let string = "";
  for(let i=1; i<n+1; i++) {
    string = "";

    if(i % 3 != 0 && i % 5 != 0)
      string = i;
      else {
        if(i % 3 == 0)
          string += "fizz";
        if(i % 5 == 0)
          string += "buzz";
      }

      console.log(string);
  }
};

const spirale = (n) => {
  let result = new Array(n).fill().map(() => new Array(n).fill(''));
  let counter = 1;
  let startCol = 0;
  let endCol = n-1;
  let startRow = 0;
  let endRow = n-1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }
    return result
};


const puissance4 = (grid) => {

//...

/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */

}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrams,
  Stack
}
