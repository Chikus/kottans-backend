var h =  0;
for (i=2; i < process.argv.length; i++){
  h += Number(process.argv[i]);
}
console.log(h);
