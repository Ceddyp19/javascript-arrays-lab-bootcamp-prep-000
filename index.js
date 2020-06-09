var kittens = [ 'Milo', 'Otis', 'Garfield' ] //define your array here

  function destructivelyAppendKitten(){
      kittens = [ 'Milo', 'Otis', 'Garfield', ];
      kittens.push("Ralph");
      
}


function destructivelyPrependKitten(){
   kittens = ['Milo', 'Otis', 'Garfield' ];
   kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift();
}

function appendKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  return 
}

function prependKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittenName = 'Broom';
  return kittenName.concat(kittens);
}

function removeLastKitten(){
   kittens = ['Milo', 'Otis', 'Garfield'];
   return kittens.slice(-1);
}

function removeFirstKitten(){
   kittens = ['Milo', 'Otis', 'Garfield'];
   return kittens.slice(1);
   
}