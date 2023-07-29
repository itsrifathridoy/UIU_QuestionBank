document.getElementById("resetLast").addEventListener("click",(e)=> {
    location.reload();
});
document.getElementById("resetbtn").addEventListener("click",(e)=> {
    location.reload();
});
function getCalanderID(cIdKey)
{
    if(cIdKey=="Summer_22")
        return 96;
    else if(cIdKey=="Spring_22")
        return 95;
}
async function getReq()
{
    
    showLoader();
   
        const url = `https://gdriveapi.airamtafir.workers.dev/?dId=1-ON-glRZJycY6mdP7fYvtJwXg5decPI3`
        fetch(url)
        .then(d=> d.json())
        .then(d=> {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
            showResult(d.files);
            // d.files.forEach(element => {
            //     console.log(element.mimeType == "application/pdf")
            // });
        });
    
  
        const loader = document.getElementById("loader");
        loader.style.display = "none";
        document.getElementById("heading").textContent = "";
        const resultTable = document.getElementById("resultTable");
        resultTable.innerHTML="";
        // const loaderTable = document.getElementById("loaderTable");
        // loaderTable.innerHTML ="";
        // document.getElementById("heading").textContent =   Students.error;
        document.getElementById("head").style.display= "flex"
    
}
document.getElementById("btn").addEventListener("click",getReq);
function getSheetName()
{
    const batch = document.getElementById("batch").value.trim();
    const year = document.getElementById("year").value.trim();
    const seasons = document.getElementById("seasons").value.trim();
    const cIdKey = `${seasons}_${year.slice(2,4)}`;
    const CalanderID = getCalanderID(cIdKey);
    return `${CalanderID}_${batch}_${seasons}`;

}
async function getRange(sheetName)
{
    const url = `https://script.google.com/macros/s/AKfycbwcT-K_ZsDNmQO65vhGQEu04QHCzi1Q6PcSB1oFP84vEPOR_t5m254q6Jc6EFqyxXBlzg/exec?name=${sheetName}&getrange=1`
    const response = await fetch(url)
    const data =  await response.json();
    return data;
}
function showResult(d)
{
    const resetDiv = document.getElementById("reset");
    resetDiv.addEventListener("click",(e)=> {
        location.reload();
    })
    // const resetBtn = document.createElement("button");
   // document.getElementById("totalStudents").textContent =   `Total Student: ${NumOfStudents}`;
    const resultDiv = document.getElementById("results");
    const resultTable = document.getElementById("resultTable");
    //resultTable.innerHTML="";
   const tableHeading = ["File Name","Size","View","Download"];
   const tr = document.createElement("tr");
   resultTable.appendChild(tr);
   for(let i=0;i<tableHeading.length;i++)
    {
        const th = document.createElement("th");
        th.innerText = tableHeading[i];
        tr.appendChild(th);
    }
    for(i=0;i<d.length;i++)
    {
        const tr = document.createElement("tr");
        resultTable.appendChild(tr);
        const fname = document.createElement("td");
        const size = document.createElement("td");
        const view = document.createElement("td");
        const download = document.createElement("td");
        fname.innerText = d[i].name;
        tr.appendChild(fname);
        size.innerText = d[i].size;
        tr.appendChild(size);
        view.innerText = d[i].thumbnailLink;
        tr.appendChild(view);
        download.innerText = d[i].id;
        tr.appendChild(download);
    }
    // resetDiv.appendChild(resetBtn);
    resultDiv.style.display = "block";

}
function showLoader()
{
    const searchDiv = document.getElementById("container");
    searchDiv.style.display = "none";
    document.getElementById("heading").textContent = "";
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML="";
    const tableHeading = ["ID","GPA","GPA Wise Grade","CGPA","CGPA Wise Grade"];
    const loader = document.getElementById("loader");
    loader.style.display = "flex";
}


// function dataValidation()
// {
//     var message = [];
//     let j=0;
//     const inputTags = document.getElementsByTagName("input");
//     for(var i=0;i<inputTags.length;i++)
//     {
//         if(inputTags[i].id == "id")
//         {
//             if(!isNumber(inputTags[i].value))
//             {
//                 message[j] = "Invalid ID";
//                 j++;
//             }
//         }
//         else if(inputTags[i].id == "batch")
//         {
//             if(!isNumber(inputTags[i].value))
//             {
//                 message[j] ="Invalid Batch";
//                 j++;
//             }
//         }
//         else if(inputTags[i].id == "year")
//         {
//             if(!isNumber(inputTags[i].value))
//             {
//                 message[j] ="Invalid Year. Please Enter a Four Digit Year. Example - 2022";
//                 j++;
//             }
//         }
//         else if(inputTags[i].id == "seasons")
//         {
//             if(!isTrimester(inputTags[i].value))
//             {
//                 message[j] =`Invalid Trimester. Trimester Name must be "Spring","Summer" or "Fall"`;
//                 j++;
//             }
//         }
//     }
//     return message;
// }
// function isNumber(str)
// {
//     for(var i=0;str.length;i++)
//     {
//         if(str[i]!='0' || str[i]!='1' || str[i]!='2' || str[i]!='3' || str[i]!='4' || str[i]!='5' || str[i]!='6' || str[i]!='7' || str[i]!='8' || str[i]!='9')
//         {
//             return 0;
//         }
//         else
//         {
//             return 1;
//         }
//     }
// }
// function isTrimester(str)
// {
//     if(str=="Spring")
//     {
//         return 1;
//     }
//     else if(str=="Summer")
//     {
//         return 1;
//     }
//     else if(str=="Fall")
//     {
//         return 1;
//     }
//     else
//     {
//         return 0;
//     }
// }