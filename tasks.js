let tasks = ["wokeup","freshup","lunch","evening Walk","Dinner"];
let n = tasks.length;
for(let i=0;i<n-1;i++){
    tasks[i] = tasks[i+1];
}
n--;
let hightasks1 = "Revision";
let hightasks2 = "Sleep";
n+=2;
for(let i=n-1;i>=2;i--){
    tasks[i] = tasks[i-2];
}
tasks[0] = hightasks1
tasks[1] = hightasks2
tasks[n-1] =  "rest";
console.log(tasks);
