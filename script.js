let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);

while(a<=b){
    if(a%2!=0){
        console.log(a);
    }
    a++;
}