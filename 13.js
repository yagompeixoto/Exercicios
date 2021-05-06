// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
array = (a) =>{
    const ret=[];
    for(i=0;i<a.length;i++){
        if (typeof a[i]==='number'){
            ret.push(a[i])
        }    
    }
    console.log(ret) 
}

array([`javascript`,1,`3`,`web`,20])