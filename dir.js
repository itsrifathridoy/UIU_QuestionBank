// var fs = require('fs');
// var files = fs.readdirSync('D:/Questions');
// files.forEach(file=>{


//     const mid = `D:/Questions/${file}/MID`
//     fs.access(mid, (error) => {

//         // To check if the given directory
//         // already exists or not
//         if (error) {
//             // If current directory does not exist
//             // then create it
//             fs.mkdir(mid, (error) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("New Directory created successfully !!");
//             }
            
//             });
        
//         } else {
//             console.log("Given Directory already exists !!");
//         }
//         });
        

//         const final = `D:/Questions/${file}/FINAL`
//         fs.access(final, (error) => {

//             // To check if the given directory
//             // already exists or not
//             if (error) {
//                 // If current directory does not exist
//                 // then create it
//                 fs.mkdir(final, (error) => {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log("New Directory created successfully !!");
//                 }
                
//                 });
            
//             } else {
//                 console.log("Given Directory already exists !!");
//             }
//             });

//             const assignment = `D:/Questions/${file}/Assignment`
//             fs.access(assignment, (error) => {
    
//                 // To check if the given directory
//                 // already exists or not
//                 if (error) {
//                     // If current directory does not exist
//                     // then create it
//                     fs.mkdir(assignment, (error) => {
//                     if (error) {
//                         console.log(error);
//                     } else {
//                         console.log("New Directory created successfully !!");
//                     }
                    
//                     });
                
//                 } else {
//                     console.log("Given Directory already exists !!");
//                 }
//                 });
        

//                 const ct = `D:/Questions/${file}/CT`
//                 fs.access(ct, (error) => {
        
//                     // To check if the given directory
//                     // already exists or not
//                     if (error) {
//                         // If current directory does not exist
//                         // then create it
//                         fs.mkdir(ct, (error) => {
//                         if (error) {
//                             console.log(error);
//                         } else {
//                             console.log("New Directory created successfully !!");
//                         }
                        
//                         });
                    
//                     } else {
//                         console.log("Given Directory already exists !!");
//                     }
//                     });



//                     const others = `D:/Questions/${file}/Others`
//                     fs.access(others, (error) => {
            
//                         // To check if the given directory
//                         // already exists or not
//                         if (error) {
//                             // If current directory does not exist
//                             // then create it
//                             fs.mkdir(others, (error) => {
//                             if (error) {
//                                 console.log(error);
//                             } else {
//                                 console.log("New Directory created successfully !!");
//                             }
                            
//                             });
                        
//                         } else {
//                             console.log("Given Directory already exists !!");
//                         }
//                         });




// })

const fs = require("fs");
const courseJson = JSON.parse(fs.readFileSync("./courses.json", "utf8"));
console.log(courseJson.length)

// var k=0;
// fetch("https://gdriveapi.airamtafir.workers.dev/?dId=1-0KKEprqbEhhz_8ppKuLVnq63Zoex91j")
//     .then(res=>res.json())
//     .then(res=>{
//         for(var i=0;i<res.files.length;i++)
//         {
//             // console.log(res.files[i].name.split("-")[0].trim())
//             for(var j=0;j<courseJson.length;j++)
//             {
//                 if(courseJson[j].courseCode==res.files[i].name.split("-")[0].trim())
//                 {
//                     fetch(`https://gdriveapi.airamtafir.workers.dev/?dId=${res.files[i].id}`)
//                         .then(res=>res.json())
//                         .then(res=>{

//                             res.files.forEach(d=>{
//                                 if(d.mimeType=="application/vnd.google-apps.folder")
//                                 {
//                                     console.log(j)
//                                     // if(d.name=="Assignment")
//                                     // {
//                                     //     courseJson[j].assignment = d.id;
//                                     // }
//                                     // else if(d.name=="CT")
//                                     // {
//                                     //     courseJson[j].ct = d.id;
//                                     // }
//                                     // else if(d.name=="MID")
//                                     // {
//                                     //     courseJson[j].mid = d.id;
//                                     // }
//                                     // else if(d.name=="FINAL")
//                                     // {
//                                     //     courseJson[j].final = d.id;
//                                     // }
//                                     // else if(d.name=="Others")
//                                     // {
//                                     //     courseJson[j].others = d.id;
//                                     // }
//                                     //console.log(courseJson[j]);
                                    
//                                 }
//                             })
                            
//                         })
//                 }
//             }
          
           
//         }
     
//     })


    async function fetchJSON(url) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      }

async function test()
{
    let course = [];
    const data = await fetchJSON("https://gdriveapi.airamtafir.workers.dev/?dId=1-0KKEprqbEhhz_8ppKuLVnq63Zoex91j");
    await data.files.forEach(async e=>{

        const d = courseJson.find(c=>c.courseCode==e.name.split("-")[0].trim())
        const inner = await fetchJSON(`https://gdriveapi.airamtafir.workers.dev/?dId=${e.id}`);
        const assignment = inner.files.find(f=>f.name=="Assignment");
        const ct = inner.files.find(f=>f.name=="CT");
        const mid = inner.files.find(f=>f.name=="MID");
        const final = inner.files.find(f=>f.name=="FINAL");
        const others = inner.files.find(f=>f.name=="Others");
        if(d!=undefined)
        {
            d.assignment = assignment.id;
            d.ct = ct.id;
            d.mid = mid.id;
            d.final = final.id;
            d.others = others.id;
        }
       // console.log(d)
       course.push(d);
        
    })
    setTimeout(e=>{
        console.log(course);
        fs.writeFileSync("./courses.json", JSON.stringify(course, null, 4));
    },10000);

    
}

    

 