function permutationSort(a) {
  let counter = 0;
  if (sorted(a)){
   return counter;
  }
  permutation(a,0,a.length-1,counter);
  return counter
}

function permutation(a,l,r,counter){
  if (l == r){
    counter = counter + 1;
    if (sorted(a)){
      return true;
    }
    return false;
}
  for (let i = l; i <= r; i++){
    change(a,l,i);
    if (permutation(a,l+1,r,counter)){
      return true;
    }
    change(a,l,i);
  }
  return false;
}

function sorted(a){
  for (let i = 0; i < a.length-1; i++){
    if (a[i] > a[i + 1]){
      return false;
    }
  }
  return true;
}

function change(a,b,c){
  const temp = a[b];
  a[b] = a[c];
  a[c] = temp;
}
