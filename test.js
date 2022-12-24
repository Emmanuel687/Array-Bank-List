function hasPosNeg(array){
  let hasPos = false;
  let hasNeg = false;

  array.forEadch(num=>{
   hasPos = num>0
   hasNeg=num<0

  })
  return [hasPos, hasNeg]
}

