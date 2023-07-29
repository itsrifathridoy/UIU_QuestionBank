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
searchBtn.addEventListener("click",async (e)=>{
    const course = document.getElementById("course").value.toUpperCase();
    const courseJSON = courseList.files.find(c=>c.name.includes(course));
    console.log(courseJSON)
    if(course!="" && courseJSON!=undefined){
        
    let exam = document.getElementById("exam").value.toLowerCase().trim();
    let year = document.getElementById("year").value;
    
    DisplayLoader();
    const courseData = await fetchJSON(`https://gdriveapi.airamtafir.workers.dev/?dId=${courseJSON.id}`)
    console.log(courseData);
    const loader = document.getElementById("loader");
            loader.style.display = "none";
            const mid = courseData.files.find(f=>f.name=="MID");
            const final = courseData.files.find(f=>f.name=="FINAL");
            const midData = await fetchJSON(`https://gdriveapi.airamtafir.workers.dev/?dId=${mid.id}`)
            const finalData = await fetchJSON(`https://gdriveapi.airamtafir.workers.dev/?dId=${final.id}`)
            const midFinalData = midData.files.concat(finalData.files);

    if(exam=="mid")
    {
        displayResult(midData.files,courseJSON.name,year);
    }
    else if(exam=="final")
    {
        displayResult(finalData.files,courseJSON.name,year);

    }
    else
    {
        displayResult(midFinalData,courseJSON.name,year)
    }

}
});

function displayResult(data,course,year)
{
    if(year!="")
    {
        data = data.filter(e=>e.name.split("_")[0]==year);
    }
    document.getElementById("totalStudents").textContent =   course;
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

        
        download.innerHTML = `<a  download="${data[i].id}"><img src="724933.png"  height="30"></a>`;
        view.innerHTML = `<a id="${data[i].id}"><img src="72647.png"  height="30" download="${data[i].name}"></a>` ;
        size.innerText = formatBytes(data[i].size);
        view.childNodes[0].className = "popup-btn";
        download.childNodes[0].className = "download-btn";
    }

    document.querySelectorAll(".download-btn").forEach(download=>{
        download.addEventListener("click",async e=>{
            const url = `https://gdriveapi.airamtafir.workers.dev/?id=${download.download}&download=true`
            const response = await fetch(url);
            const blob = await response.blob();
            const a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);

            a.download = (await fetchJSON(`https://gdriveapi.airamtafir.workers.dev/?id=${download.download}`)).name;
            a.click();
        })
    })

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
                    location.href = "#results"
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
    
    var popupBox = document.querySelector('.popup-box');
    popupWrap.style.display = 'none';
      popupBox.classList.remove('transform-in');
      popupBox.classList.add('transform-out');
      popupWrap.innerHTML = "";

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