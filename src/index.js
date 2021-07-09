let MorseSymbols = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let expToTenSym = [];

  for(let k = 0; k < expr.length; k += 10){
      expToTenSym.push(expr.slice(k, k + 10));
  };
  
  let morse = [];

  for(let string of expToTenSym) {
      let morseSym = '';
      if (string === '**********') {
          morse.push(' ');
          continue;
      }
      for (let j = 0; j < string.length; j += 2 ) {
          symb = string.slice(j, j + 2);
          if(symb != '00') {
            morseSym +=  symb === '10' ? '.' : '-';
          }
      }   
     morse.push(morseSym);
  };

  let res = '';

  for(let i of morse) {
     if(i.toString() === ' ') {
         res += ' ';
     } 
     else {
     let symb = MorseSymbols[i];
     res += symb;
     }
  };

  return res;
};

module.exports = {
    decode
}
