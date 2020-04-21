
let greet = function(){
    console.log('hi');
}
greet();

{
    let greet = function(){
        console.log('hello');
    }
    greet();
    
    {
        let greet = function(){
            console.log('hi there');
        }
    }

}
greet();

{
    let greet = function(){
        console.log('hi hello');
    }
}
greet();

    
