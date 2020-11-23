# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests 
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**
```javascript 
const { anagrammes, Stack, spirale, puissance4, fizzBuzz } = require('./javascript.js');
```
Cette ligne permet d'importer des variables depuis le fichier javascript cité dans la fonction require. 
Ces variables doivent d'abord être exportées à l'interieur du fichier d'origine comme ceci:
```javascript
module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
```

**2. Expliquez le rôle de la fonction `expect`.**
La fonction expect permet de tester la validité d'un résultat en comparant le resultat réelle par rapport au résultat attendu d'une ligne de code.
Il est possible de tester la valeur de retour d'une fonction, la valeur d'une chaine de caractère, le nombre d'appels sur une fonction et bien d'autres encore... 

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**
toEqual est une fonction de la fonction expect qui permet de comparer l'égalité des attributs primitifs de manière recursive.
Elle peut être utilisé sur les objets mais aussi sur les fonctions.

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**
les fonctions beforeEach et AfterEach executent un bloc d'instructions avant et après chaque test. 
La fonction describe permet de créer un bloc de test à plusieurs niveaux, elle permet de décomposer les tests ou de les regrouper pour tester une fonction sous plusieurs conditions par exemple.

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**
Une fonction "mocké" est une fonction dont on a modifié l'execution en créent des liens avec le code pour récuperer des informations sur l'execution.
Cette méthode permet de tester comment une fonction à été appelé, avec quels argument...


**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**
Dans le cas par exemple, où une même fonction peut-être appelé de plusieurs manières différentes ou avec différents arguments dans une méthode pour verifier qu'elle l'est de la bonne façon

