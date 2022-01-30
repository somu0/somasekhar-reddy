alert("please wait for data to be fetched after each query")
let tableCreator=(arr)=>{
    let tbody=document.getElementById('tbody')
    // arr=arr.slice(0,100)
    if(arr.length===0){
        tbody.innerText="loading...."
        tbody.style.width="100%"
        tbody.style.textAlign="center"

    }else{
        arr.forEach((university,index)=>{
            let newrow=document.createElement('tr')
            let child=`<td>${university.name}</td>
                       <td>${university.country}</td>
                       <td><a href="${university.web_pages[0]}" target="_blank" rel="noopener noreferrer">${university.web_pages[0]}</a></td>
                       <td>${university.alpha_two_code}</td>
                       <td>null</td>
                       <td>${university.domains[0]}</td>`
            newrow.innerHTML=child
            tbody.appendChild(newrow)           
            
        })
    }
    

}




let searchField=document.querySelector('.searchContainer input')
searchField.addEventListener('input',()=>{
    let query=searchField.value
    console.log('====================================');
    console.log(query);
    console.log('====================================');
    fetch(`http://universities.hipolabs.com/search?country=${query}`).then((obj)=>{
    return obj.json()
    }).then((data)=>{
        let tbody=document.getElementById('tbody')
        tbody.innerHTML=""
    tableCreator(data)
    
    }).catch((err)=>{
        let tbody=document.getElementById('tbody')
        tbody.innerText="No Universities found for given Country"
        tbody.style.width="100%"
        tbody.style.textAlign="center"
    })
})
