const funcManu = manu =>{
    manu.map(man => {
        man*6
     const post = man<=6 ?`Small`:`Large`;
     console.log(post)
        
    });
}

console.log(funcManu([3,4,5,6,78]))
