let arr = [5,12,18,3,20];

let count = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 10){
        count++;
    }
}

console.log("Count:", count);

//Outpuut:Count: 3