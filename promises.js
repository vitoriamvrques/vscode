git remote add origin https://github.com/vitoriamvrques/vscode.git
git branch -M main
git push -u origin main
//1 + 2 + ... + n-1 + n
function calculoDemorado(n){
    let p = new Promise(function(resolve,reject){
    let res = 0
    for(let i = 1; i<=; i++) res +=i
    resolve(res)
    })
return p
}

const minhaPrimeiraPromise = calculoDemorado(10)
//then/catch
minhaPrimeiraPromise.then((resultado)=> {
    console.log('Resultado: ${resultado')