//faca uma funcao para verificar se uma numero n inteiro e primo

function isPrime(n){
    if(n<=1){
        return false;
    }
    else{
        let prime = true
        for(let i=2; i<=Math.floor(Math.sqrt(n)); i++){
            console.log(i)
            if(n % i === 0){
                prime = false
                console.log("Dividiu por " + i)
                break;
            }
        }
        return prime
    }
}