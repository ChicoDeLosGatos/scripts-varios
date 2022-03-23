/*
  v0.1
*/

function Password(t=8,r){this.length=t,this.words=r,this.key="",this.realkey="",this.fingerprint=Math.random()}Password.prototype.internal_generate=function(){const t=this.length,r=this.words,e=Math.floor(t/2),n=t=>t||"lol,xdd,uwu,012,123,666,212,akira,akame,yago,wtf".split(","),s=t=>{let r=0;return t.forEach(t=>r=r>t.length?r:t.length),r};if(t<s(n(r)))return Error(`Minimum password length is ${s(n(r))}`);let i=(t=>{let r="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e.length;for(let s=0;s<t;s++)r+=e.charAt(Math.floor(this.fingerprint*n));return r})(t),o=btoa(i),h=n(r),a=h.length,l=h[Math.floor(this.fingerprint*a)],p=(()=>{let t='!"$%&/()=?';return t.substr(Math.floor(t.length*this.fingerprint),1)})();return{password:((t,r,n)=>{let s=r.split(""),i=s.length,o=t.split(""),h=o.length,a=Math.floor(this.fingerprint*i),l=a-h,p=Math.floor(this.fingerprint*h),f=btoa(r[0]).split("")[0];l=l<=2?2:l,s.splice(l,h);let g="",u=0;i=s.length,a=Math.floor(this.fingerprint*i);for(let t=0;t<h;t++)g+=t==p?0==t?o[t]+f:f+o[t]:o[t];let c=[];for(let t=0;t<i;t++)t==a?0==t?(c.push(s[t]),c.push(g)):(c.push(g),c.push(s[t])):t%Math.floor(i/3)==0&&u<e&&t>0?(c.push(n),u++):c.push(s[t]);return c.join("")})(l,o,p).substr(0,t).replace(" ","-").replace(" ","_"),key:btoa(JSON.stringify({ncs:i,w:l,s:p}))}},Password.prototype.generate=function(){let t=this.internal_generate();return this.realkey=t.key,this.key=btoa(JSON.stringify({p:t.password,k:t.key})),this.key,t.password},Password.prototype.check=function(t,r){const e=JSON.parse(atob(r));return t===e.p&&this.internal_check(e.p,e.k)},Password.prototype.internal_check=function(t,r){const e=this.internal_generate();return t===e.password&&r===e.key};

p = new Password(12);
pass = p.generate();
key = p.key;
p.check(pass, key)
