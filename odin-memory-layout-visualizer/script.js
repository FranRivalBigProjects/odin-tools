const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('memory')) out+='- Memory layout considerations\n';
if(txt.includes('struct')) out+='- Struct packing/alignment context\n';
if(txt.includes('performance')) out+='- Performance profiling scenario\n';
if(txt.includes('game')) out+='- Game loop simulation context\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Optimize data-oriented design and performance\n';

res.innerText=out;
}