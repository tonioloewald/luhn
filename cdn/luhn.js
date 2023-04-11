const e=e=>{const r=String(e).match(/\d/g)?.map((e=>Number(e))).reverse();return null!=r&&r.map(((e,r)=>(e=r%2!=0?2*e:e)>9?e%10+1:e)).reduce(((e,r)=>e+r),0)%10==0};export{e as luhn};
//# sourceMappingURL=luhn.js.map
