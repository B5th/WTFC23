const PareNt = document.getElementById('parent')
console.log(PareNt)

const Children = PareNt.children
console.log(Children) - /*selects ALL children without their parent*/

const achild = PareNt.lastElementChild
console.log(achild) - /*to select a child*/

const child= PareNt.firstElementChild
const sibling = child.nextElementSibling;
console.log(sibling)
         /*Moving b/w siblings*/
const child$ = PareNt.lastElementChild
const sibs = child$.previousElementSibling;
console.log(sibs)

const firstchild = document.querySelector('#firstchild')
const pArEnt = firstchild.parentNode
console.log(pArEnt)  /*Moving from child to parent*/ 
