document.getElementById("resetLast").addEventListener("click",(e)=> {
    location.reload();
});
document.getElementById("reset").addEventListener("click",(e)=> {
    location.reload();
});
document.getElementById("resetbtn").addEventListener("click",(e)=> {
    location.reload();
});
const searchBtn = document.getElementById("search");
let courseList;
searchBtn.addEventListener("click",(e)=>{
    console.log(courseList);
    const course = document.getElementById("course").value.toUpperCase();
    let exam = document.getElementById("exam").value.toLowerCase().trim();
    if(exam=="")
    {
        exam = "ALL"
    }
    fetch("./courses.json")
        .then(d=>d.json())
        .then(d=>{
            for(var i=0;i<d.length;i++)
            {
                const courseTitle = d[i].courseTitle;
                const courseCode = d[i].courseCode;
                const mid = d[i].mid;
                const final = d[i].final;
                const courseName = courseCode+" - "+ courseTitle
                if(courseName.toUpperCase().search(course)!=-1 && (mid!="" || final!=""))
                {
                    
                    // data = fetchData(d[i][exam]);
                    // console.log(data)
                    // displayResult(data);
                    const url = `https://gdriveapi.airamtafir.workers.dev/?dId=${d[i][exam]}`
                    return fetch(url)
                   
                }
            }
        })
        .then(d=> 
            {
                if (!d.ok) {
                    throw new Error("HTTP status " + d.status);
                }
                DisplayLoader();
                return d.json()
            })
        .then(d=> {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
             console.log(d.files)
            // return d.files;
            displayResult(d.files);
            // if(d.status==200 && d.result.length>0)
            // {
            //     displayResult(d,id);
            // }
            // else
            // {
            //     document.getElementById("heading").textContent = "";
            //     const resultTable = document.getElementById("resultTable");
            //     resultTable.innerHTML="";
            //     document.getElementById("heading").textContent =   "Result Not Found";
            //     document.getElementById("head").style.display= "flex";
            // }
            
        });
});
// function fetchData(id)
// {
//     const url = `https://gdriveapi.airamtafir.workers.dev/?dId=${id}`
//     fetch(url)
//         .then(d=> 
//             {
//                 if (!d.ok) {
//                     throw new Error("HTTP status " + d.status);
//                 }
//                 DisplayLoader();
//                 return d.json()
//             })
//         .then(d=> {
//             const loader = document.getElementById("loader");
//             loader.style.display = "none";
//             // console.log(d.files)
//             return d.files;
//            // displayResult(d.files);
//             // if(d.status==200 && d.result.length>0)
//             // {
//             //     displayResult(d,id);
//             // }
//             // else
//             // {
//             //     document.getElementById("heading").textContent = "";
//             //     const resultTable = document.getElementById("resultTable");
//             //     resultTable.innerHTML="";
//             //     document.getElementById("heading").textContent =   "Result Not Found";
//             //     document.getElementById("head").style.display= "flex";
//             // }
            
//         });
// }
function displayResult(data)
{
    const resultDiv = document.getElementById("results");
    const resultTable = document.getElementById("resultTable");
    const tableHeading = ["Exam","Season","Year","View","Download","Size"];
   const tr = document.createElement("tr");
   resultTable.appendChild(tr);
   for(let i=0;i<tableHeading.length;i++)
    {
        const th = document.createElement("th");
        th.innerText = tableHeading[i];
        tr.appendChild(th);
    }
    for(i=0;i<data.length;i++)
    {
        const tr = document.createElement("tr");
        resultTable.appendChild(tr);

        const exam = document.createElement("td");
        tr.appendChild(exam);

        const season = document.createElement("td");
        tr.appendChild(season);

        const year = document.createElement("td");
        tr.appendChild(year);

        const view = document.createElement("td");
        tr.appendChild(view); 

        const download = document.createElement("td");
        tr.appendChild(download);

        

        const size = document.createElement("td");
        tr.appendChild(size);


        year.innerText = data[i].name.split("_")[0];
        exam.innerText = data[i].name.split("_")[2];
        season.innerText = data[i].name.split("_")[1];
        download.innerHTML = `<a href="https://gdriveapi.airamtafir.workers.dev/?id=${data[i].id}&download=true"><img src="724933.png"  height="30"></a>`;
        view.innerHTML = `<a id="${data[i].id}"><img src="72647.png"  height="30"></a>` ;
        size.innerText = formatBytes(data[i].size);
        view.childNodes[0].className = "popup-btn";
    }

    document.querySelectorAll(".popup-btn").forEach(view=>{
        view.addEventListener("click",(e)=>{
            
            const url = `https://gdriveapi.airamtafir.workers.dev/?id=${view.id}&download=true`
            fetch(url)
                .then(res=>res.blob())
                .then(res=>{
                    var popupWrap = document.querySelector('.popup-wrap');
                    var popupBox = document.createElement("Object");
                    popupWrap.appendChild(popupBox);
                    popupBox.className = "popup-box";
                    popupBox.id = "pdf";
                    
                    // var popupBox = document.querySelector('.popup-box');
                    // var popupClose = document.querySelector('.popup-close');

                    const mime = res.type;
                    const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);
                    // Gets blob MIME type (e.g. image/png) and extracts extension
                    
                    const file = new File([res], `filename.${ext}`, {
                    type: mime,
                    })

                    popupBox.data = window.URL.createObjectURL(res);
                    console.log(popupBox)
                    popupWrap.style.display = 'block';
                    popupBox.classList.remove('transform-out');
                    popupBox.classList.add('transform-in');
                    console.log(res)
                })
            
            
        })
    })
    resultDiv.style.display = "block";
}

document.querySelector(".popup-close").addEventListener("click",(e)=>{
    var popupWrap = document.querySelector('.popup-wrap');
    popupWrap.innerHTML = "";
    var popupBox = document.querySelector('.popup-box');
    popupWrap.style.display = 'none';
      popupBox.classList.remove('transform-in');
      popupBox.classList.add('transform-out');

      e.preventDefault();
})

function DisplayLoader()
{
    document.getElementById("heading").textContent = "";
    const searchDiv = document.getElementById("container");
    searchDiv.style.display = "none";
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML="";
    const loader = document.getElementById("loader");
    loader.style.display = "flex";
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}



async function URLtoFile() {
    let blob;
    const url = 'https://gdriveapi.airamtafir.workers.dev/?id=13owl96tqNAjxMSZL43aFlVIjupxhmyqN&download=true'
    fetch(url)
        .then(res=>res.blob())
        .then(res=>{
            blob = res;
        })

// Gets URL data and read to blob

console.log(blob);

const mime = blob.type;
const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);
// Gets blob MIME type (e.g. image/png) and extracts extension
  
const file = new File([blob], `filename.${ext}`, {
  type: mime,
})
//const a = document.createElement('a');
//   a.href = window.URL.createObjectURL(file);
//   a.download = file.name;
//   a.click();
// Creates new File object using blob data, extension and MIME type
document.getElementById("pdf").data = window.URL.createObjectURL(file);

}

async function fetchJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
async function getCourseList()
{
    courseList = await fetchJSON("https://gdriveapi.airamtafir.workers.dev/?dId=1-0KKEprqbEhhz_8ppKuLVnq63Zoex91j");
}