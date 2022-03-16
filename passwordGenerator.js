function generatePassword(length=8, wds){
  const maxSyms = Math.floor(length/2),
	   str = len => {
      let res = '', 
          chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          charLen = chars.length;
      for(let i = 0; i < len; i++)
        res += chars.charAt(Math.floor(Math.random()*charLen));
      return res;
    },
    ww = w => {
      if(w) return w;
      return 'lol,xdd,uwu,012,123,666,212,akira,akame,yago,wtf'.split(',')
    },
  	maxLen = ww => {
      let max = 0;
      ww.forEach(w => max = (max > w.length) ? max : w.length)
      return max;
   },
   randomSymbol = () => {
  		let s = "!\"$%&/()=?";
  		return s.substr(Math.floor(s.length*Math.random()), 1);
	},
   	mix = (word, pass, symfunc) => {
      let passwArr = pass.split(''), 
          passwLen = passwArr.length,
          wordArr = word.split(''),
          wordLen = wordArr.length,
          passwIdx = Math.floor(Math.random()*passwLen),
          passwCarry = passwIdx - wordLen,
          wordIdx = Math.floor(Math.random()*wordLen),
          firstChar = btoa(pass[0]).split('')[0];
      
      passwCarry = (passwCarry <= 2) ? 2 : passwCarry;
      passwArr.splice(passwCarry, wordLen);
      
      let wordLett = '', times = 0;
      
      passwLen = passwArr.length,
      passwIdx = Math.floor(Math.random()*passwLen);
      
      for (let i = 0; i < wordLen; i++)
        wordLett += (i == wordIdx) ? ((i == 0) ? wordArr[i]+firstChar : firstChar+wordArr[i]) : wordArr[i];
      
      let result = [];
      
      for (let i = 0; i < passwLen; i++)
        if(i == passwIdx) {
           if(i==0) {
            result.push(passwArr[i]);
            result.push(wordLett);
          } else {
             result.push(wordLett);
             result.push(passwArr[i]);
          }
        } else if (i%(Math.floor(passwLen/3)) == 0 && times < maxSyms && i>0) {
             result.push(symfunc()); times++;
         } else result.push(passwArr[i]);
       
      return result.join('');     
    }
    
    if(length < maxLen(ww(wds))) return Error(`Minimum password length is ${maxLen(ww(wds))}`);
    
    let nonCryptedStr = str(length),
        cryptedStr = btoa(nonCryptedStr),
        words = ww(wds),
        wLen = words.length,
        wIdx = Math.floor(Math.random()*wLen),
        word = words[wIdx];
  
  return mix(word, cryptedStr, randomSymbol).substr(0, length); 
}

generatePassword(64)
