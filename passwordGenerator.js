/**
	v0.1
*/
function Password (len=8, ws) {
  this.length = len;
  this.words = ws;
  this.key = '';
}

Password.prototype.internal_generate = function () {
   const t=this.length,r=this.words,e=true,a=Math.floor(t/2),l=t=>t||"lol,xdd,uwu,012,123,666,212,akira,akame,yago,wtf".split(","),o=t=>{let r=0;return t.forEach(t=>r=r>t.length?r:t.length),r},h=(t,r,e)=>{let l=r.split(""),o=l.length,h=t.split(""),n=h.length,s=Math.floor(Math.random()*o),u=s-n,p=Math.floor(Math.random()*n),f=btoa(r[0]).split("")[0];u=u<=2?2:u,l.splice(u,n);let M="",i=0;o=l.length,s=Math.floor(Math.random()*o);for(let t=0;t<n;t++)M+=t==p?0==t?h[t]+f:f+h[t]:h[t];let g=[];for(let t=0;t<o;t++)t==s?0==t?(g.push(l[t]),g.push(M)):(g.push(M),g.push(l[t])):t%Math.floor(o/3)==0&&i<a&&t>0?(g.push(e),i++):g.push(l[t]);return g.join("")};if(t<o(l(r)))return Error(`Minimum password length is ${o(l(r))}`);let n=(t=>{let r="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length;for(let l=0;l<t;l++)r+=e.charAt(Math.floor(Math.random()*a));return r})(t),s=btoa(n),u=l(r),p=u.length,f=u[Math.floor(Math.random()*p)],M=(()=>{let t='!"$%&/()=?';return t.substr(Math.floor(t.length*Math.random()),1)})();return e?{password:h(f,s,M).substr(0,t).replace(" ","-").replace(" ","_"),key:btoa(JSON.stringify({ncs:n,w:f,s:M}))}:h(f,s,M).substr(0,t).replace(" ","-").replace(" ","_")
}
Password.prototype.generate = function () {
  let password = this.internal_generate();
  this.key = password.key;
  return password.password;
}

Password.prototype.check = function (password, key) {
    const params = JSON.parse(atob(key));
    return params;    
}

p = new Password();
p.generate();

