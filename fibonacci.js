function getFibonacci(number, algorythm)
{
  /*
  var isInteger = function (n){
    return (n === ""+parseInt(n));
  };

  if (!isInteger(number) || (number<1 || number>99))
  {
    return;
  } */
  switch (algorythm) {
      case "cycle": {return getFibCycle(number); break;}
      case "recursion": {return getFibRecursive(number); break;}
      default: { return;}
  }
}

function getFibCycle(number)
{
  var seq = [];
  var aver = 0.0;
  for (var i = 0; i < number; i++)
  {
    if (i == 0 || i == 1){
      seq.push(1);
    } 
    else {
      seq.push(seq[i-1] + seq[i-2]);  
    }
    aver += seq[i];
  }
  aver = aver / number;    
  return {sequence: seq, average: aver};
}

function getFibRecursive(number)
{    
  var seq = [];
  var aver = 0.0;
  var fibFunc = function (i, prev1, prev2){
    if (i > 0){
      seq.push(prev1);
      aver += prev1;
    }
    if (i > 1) {
      fibFunc(i - 1, prev2, prev1 + prev2)
    }
  }
  fibFunc(number, 1, 1);
  aver = aver / number;    
  return {sequence: seq, average: aver};
}

function isValid(number)
{
  var isInteger = function (n){
    return (n === ""+parseInt(n));
  };

  if (!isInteger(number) || (number<1 || number>99))
  {
    return false;
  }
  return true;
}