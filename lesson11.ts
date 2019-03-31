let displayColors = function(message:string,...colors: string[]) {
    console.log(colors)
};
let message="hello";
displayColors(message,"Red");
displayColors(message,"Red", "Green");
displayColors(message,"Red", "Green", "Blue");
