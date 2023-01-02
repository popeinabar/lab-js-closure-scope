const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 9;

// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

function createPop() {
  // Progression 2: add 3 variables: title, currIndex, check

  let title = document.createElement('h3');
  let currIndex = NEG_INF;
  let assign = false;

  // Progression 3: create a function "find" (inside createPop function only).
  let find = (arr, item) => {
    let index = arr.findIndex((elt) => {
      return elt == item;
    });
    if (index > -1) {
      currIndex = index;
    }
  };

  // Progression 4: return a function (can be anonymous).
  return () => {
    find(arrayOfNumbers, itemToSearch);
    if (currIndex == NEG_INF) {
      title.innerText = `The item is not present and is at index ${currIndex}`;
    } else {
      title.innerText = `The item is present and is at index ${currIndex}`;
    }
    document.body.append(title);
  };
}

createPop()();
