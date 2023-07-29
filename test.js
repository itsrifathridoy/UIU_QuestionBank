const fs = require("fs");

const course = [
    {
        "CourseCode": "MATH 1151",
        "CourseTitle": "Fundamental Calculus",
        "Faculty": "Mr. Jashodhan Saha",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1LWOn3NE-jq_pIcoBE0FhCg",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 1151",
        "CourseTitle": "Fundamental Calculus  ",
        "Faculty": "Mahtab sir",
        "Trimester": "Spring-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/10KBMlmgh-X4X32ctLesLcQ",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2183",
        "CourseTitle": "Calculus and Linear Algebra",
        "Faculty": "Adnan Sir ",
        "Trimester": "Spring-2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": " https://terabox.com/s/1RI7gytAYNXfzDBsbE0enQg",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2183",
        "CourseTitle": "Calculus and Linear Algebra",
        "Faculty": "maliha mam",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1MbIi6ByD9g1VuynYZGwlWQ",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2201",
        "CourseTitle": "Coordinate geometry and Vector Analysis",
        "Faculty": "Adnan Sir",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1X2FbhhWDUpRuODq7qLHhhQ",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2201",
        "CourseTitle": "Coordinate geometry and Vector Analysis",
        "Faculty": "Adnan Sir",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1X2FbhhWDUpRuODq7qLHhhQ",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2201",
        "CourseTitle": "Coordinate geometry and Vector Analysis",
        "Faculty": "Maliha Tabassum ",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1iLn8VDYpisWrllyD2QBgBw Password:961h",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2201",
        "CourseTitle": "Coordinate geometry and Vector Analysis",
        "Faculty": "Maliha Tabassum ",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1tewVQLMhXhIyjaQi8hWvTw",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 2205",
        "CourseTitle": "Probability and Statistics (PS)",
        "Faculty": "Mahtab Sir",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1k_3D-3DLkiOM_pTkZYQLPA",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2213",
        "CourseTitle": "Discrete Mathematics (DM)",
        "Faculty": "Minhajul Bashir",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1_93v2FOkF7TWkprAozDQwA",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2213",
        "CourseTitle": "Discrete Mathematics (DM)",
        "Faculty": "Shoumik saha sir",
        "Trimester": "Summer ",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1KRTCqwKFUG7T0uecG4gV2Q",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2213",
        "CourseTitle": "Discrete Mathematics (DM)",
        "Faculty": "Shashata swamya",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1MtzH33rZwYcR0e4nMQEsUA",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2215",
        "CourseTitle": "Data Structure & Algorithm 1 (DSA1)",
        "Faculty": "Dr. Mohammad Nurul Huda",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1xzXCEVhKwVeQTHQyXAOLFQ",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2215",
        "CourseTitle": "Data Structure & Algorithm 1 (DSA1)",
        "Faculty": "Arman Ashakari",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1CPjDMNggzJSRYbWEdtq0cw",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2215",
        "CourseTitle": "Data Structure & Algorithm 1 (DSA1)",
        "Faculty": "Rafi-ul-Rashid",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1SPuvBynAems5bqwDzJqW9Q",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2216",
        "CourseTitle": "Data Structure & Algorithm 1 Lab (DSA1 Lab)",
        "Faculty": "Arman Ashkari",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/130Rb5ArlccA7Y0YyABYQyQ",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2217",
        "CourseTitle": "Data Structure & Algorithm 2 (DSA2)",
        "Faculty": "Fariha Tabassum Islam",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1INd4zP1-a3Bdy8Ain9lCTA",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2233",
        "CourseTitle": "Theory of Computation (TOC)",
        "Faculty": "Imam sir",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1DZrfttMBwIuHeuGui61Ncg",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2233",
        "CourseTitle": "Theory of Computation (TOC)",
        "Faculty": "Nabila sabrin ",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/12ce4vBji5bY_IGVrAOmFgA",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1325",
        "CourseTitle": "Digital Logic Design (DLD)",
        "Faculty": "Rafid Sir",
        "Trimester": "Spring-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1VDsBgQvtqF3iWMi9MXkAiA ",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1325",
        "CourseTitle": "Digital Logic Design (DLD)",
        "Faculty": "Abir Sir",
        "Trimester": "Summer 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1S6UTX1XNTJTrQCWuNrb4Rg",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1326",
        "CourseTitle": "Digital Logic Design Lab (DLD Lab)",
        "Faculty": "Shoumik Sir",
        "Trimester": "Spring 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1e6-aZXoOQFwH-yc5NbnHgQ",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3313",
        "CourseTitle": "Computer Architecture (CA)",
        "Faculty": "Nabila sabrin",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/16Wa2jsy0__rOh2qygcfCCA",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4325",
        "CourseTitle": "Microprocessors and Microcontrollers",
        "Faculty": "Mahbub Hossain Raton",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1q5E2epiPelKmTrvUcCvOIA",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4325",
        "CourseTitle": "Microprocessors and Microcontrollers",
        "Faculty": "Anik Mazumder",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1b0P6xxt9Ba7cQFUJju8nZQ",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4326",
        "CourseTitle": "Microprocessors and Microcontrollers Laboratory",
        "Faculty": "Anik Mazumdar",
        "Trimester": "Fall-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1vpuZ7gUODbvI5K4GfXAV0w",
        "Category": "Hardware",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1111",
        "CourseTitle": "Structured Programming Language (SPL)",
        "Faculty": "Fahmin Sir",
        "Trimester": "Summer 2020",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1hH-GRpa-4N86mDhjVDj3xg",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "FahimShariarSir",
        "Trimester": "Summer-20",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1pe7ZNb1g8pnEVWungML1vQ",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "Fahim Sir",
        "Trimester": "Spring-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/12bAGTioB533vB1_YgMiRQJZ9oJZivGAH?usp=sharing",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "Fahim sir",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1RIUUe7dzMMMn39ee0xEIP39q4mnrf3ll?usp=sharing",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "Dewan farid",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/folderview?id=1Ej_pK8NNKkgB2GApBVMLZT8dQhauwVJA",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "Dr. Swakkhar Shatabda",
        "Trimester": "Spring-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1lorrKmv4FX8ZnZgZnK7z7cNFWkSLTtqG?usp=sharing",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1116",
        "CourseTitle": "Object Oriented Programming Lab (OOP Lab)",
        "Faculty": "Fahim sir",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1oaH9L3TXNCAC4RaONuzr_w",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 2118",
        "CourseTitle": "Advanced Object Oriented Programming Laboratory (AOOP Lab)",
        "Faculty": "Fahim sir",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1P0Ca5gGjI8WdaqzJcAYKfw",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "EEE 2113",
        "CourseTitle": "Electrical Circuit (EC)",
        "Faculty": "Sajeed Mehrab",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1rtcA0tyBw-gvIw2UQzOP1A#Password:hyi7",
        "Category": "Other Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "EEE 2113",
        "CourseTitle": "Electrical Circuit (EC)",
        "Faculty": "Akib Zaman",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1LolBgsFdtIzpjru5xNSQzw",
        "Category": "Other Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "EEE 2113",
        "CourseTitle": "Electrical Circuit (EC)",
        "Faculty": "Qauzi Farah Nawaz",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/10WJUBKnOj9OU_9uSpQou7A#Password:ajx4",
        "Category": "Other Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "EEE 2123",
        "CourseTitle": "Electronics",
        "Faculty": "Abir Hossian ",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1RyvfmpnAAIMMojjGbKM74A",
        "Category": "Other Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "SOC 2101",
        "CourseTitle": "Society, Environment and Engineering Ethics",
        "Faculty": "Tirtho oliver",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1tt8M_l01DJvVrvSwJ_C-ZA",
        "Category": "Non-Departmental",
        "Keywords": null
    },
    {
        "CourseCode": "SOC 2101",
        "CourseTitle": "Society, Environment and Engineering Ethics",
        "Faculty": "Oliver Sir ",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1Wju5e88x7wwdep2WZUcpeg",
        "Category": "Non-Departmental",
        "Keywords": null
    },
    {
        "CourseCode": "SOC 2101",
        "CourseTitle": "Society, Environment and Engineering Ethics",
        "Faculty": "Jemima Ma'am & Fariha Ma'am",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1atgIQxGFYQzFTeM9hkc4Ug",
        "Category": "Non-Departmental",
        "Keywords": null
    },
    {
        "CourseCode": "ACT 2111",
        "CourseTitle": "Financial and Managerial Accounting",
        "Faculty": "Lamia Alam",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1UHazYmg1NB6h2jJRLzw6sQ",
        "Category": "Non-Departmental",
        "Keywords": null
    },
    {
        "CourseCode": "IPE 3401",
        "CourseTitle": "Industrial and Operational Management",
        "Faculty": "Gourav ",
        "Trimester": "Summer 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1FalqhCpeQC6LSBJTeyUrgA",
        "Category": "Non-Departmental",
        "Keywords": null
    },
    {
        "CourseCode": "ECO 4101",
        "CourseTitle": "Economics",
        "Faculty": "Tanjila miss",
        "Trimester": "fall-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1OtLy1aQHBi0uLP6omSVd2A",
        "Category": "General Education",
        "Keywords": null
    },
    {
        "CourseCode": "PHY 2105",
        "CourseTitle": "Physics",
        "Faculty": "Asad Sir",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1CnjWTZ2XOUvjHcq4S8Litj5-PGwe47yz?usp=sharing",
        "Category": "Basic Science",
        "Keywords": null
    },
    {
        "CourseCode": "PHY 2105",
        "CourseTitle": "Physics",
        "Faculty": "Ms. Nipa Roy",
        "Trimester": "Spring-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/0B3JUSFpmdFnpfk5GY2FfMnBGblFfeFhWR1RmYlBodEJwZ0ZDLU1PbU42WjNwZGtKamd4RWc?resourcekey=0-tQl2EcM4K2ykpo3x81-6rA&usp=sharing",
        "Category": "Basic Science",
        "Keywords": null
    },
    {
        "CourseCode": "PHY 2105",
        "CourseTitle": "Physics",
        "Faculty": "Tuhin",
        "Trimester": "Spring 21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1iybVdwX90pEpGYIZWO9lNRofWfQzZFph?usp=sharing",
        "Category": "Basic Science",
        "Keywords": null
    },
    {
        "CourseCode": "BIO 3105",
        "CourseTitle": "Biology for Engineers",
        "Faculty": "Nipa Roy",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1Qz7PP2Gv0qlPUwOpXSCJqQ",
        "Category": "Basic Science",
        "Keywords": null
    },
    {
        "CourseCode": "BIO 3105",
        "CourseTitle": "Biology for Engineers",
        "Faculty": "Nipa roy",
        "Trimester": "Seven",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/15LmVLC5dSFOWJRbT5xDkQQ",
        "Category": "Basic Science",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3411",
        "CourseTitle": "System Analysis and Design",
        "Faculty": "Farhanaz Farheen",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1EDdj3q3W7s25xnvttbvlng",
        "Category": "Software Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3412",
        "CourseTitle": "System Analysis and Design Laboratory",
        "Faculty": ".",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1YsPAWbgr0GeVH4S1sILshg",
        "Category": "Software Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3421",
        "CourseTitle": "Software Engineering ",
        "Faculty": "Rafi-ul-Rashid",
        "Trimester": "Spring 2021",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1wpWyXfeboA__VOzLarlB3Q",
        "Category": "Software Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3421",
        "CourseTitle": "Software Engineering",
        "Faculty": "Md. Rafi-ur Rashid",
        "Trimester": "Spring-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1wpWyXfeboA__VOzLarlB3Q",
        "Category": "Software Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3521",
        "CourseTitle": "Database Management Systems",
        "Faculty": "Imam Sir",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1nG9D1f3QQpcJTo5e3NntNg",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3522",
        "CourseTitle": "Database Management Systems Laboratory",
        "Faculty": "Imam sir",
        "Trimester": "summer-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/162NYs_wqEE2YSoeDI0_Cmelzb1L10dNA?usp=sharing",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3522",
        "CourseTitle": "Database Management Systems Laboratory",
        "Faculty": "Md. Salman Shamil",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1Py-cCJIZXBpAPghth8wTag",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4509",
        "CourseTitle": "Operating Systems",
        "Faculty": ".",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1O4hIDPyL-fum0c_N121lvQ",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4509",
        "CourseTitle": "Operating Systems",
        "Faculty": "Md. Rayhan Ahmed",
        "Trimester": "Summer-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1TRgVNTI0u8xIE0BrjBBXmwwVTYz3Pn8I?usp=sharing",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4510",
        "CourseTitle": "Operating Systems Laboratory",
        "Faculty": "Md. Salman Shamil",
        "Trimester": "Summer-21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1WdZywjhZIXuawQj37JLSepystWn5dUWM?usp=sharing",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3711",
        "CourseTitle": "Computer Network",
        "Faculty": "Rayhan Ahmed",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1DVOR3AmHb8quq18eL-KRjQ",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3711",
        "CourseTitle": "Computer Network",
        "Faculty": "Salekhul Sir",
        "Trimester": "Summr-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1ekr7jfh6w9OzY7ZtHUfBjw",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3711",
        "CourseTitle": "Computer Network",
        "Faculty": "Azim Uddin Chowdhury",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1YfMP2pPOd-A-F6T6OCLkRw",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3712",
        "CourseTitle": "Computer Networks Laboratory",
        "Faculty": "Rayhan ahmed",
        "Trimester": "Spring - 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1e-t4w6U2u0JW1nISrSiVDA",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3712",
        "CourseTitle": "Computer Networks Laboratory",
        "Faculty": "Azim Sir",
        "Trimester": "Unknown",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1SiiNcphrYlmEeEiWWQo59Y9zrXUmcMid?usp=sharing",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3841",
        "CourseTitle": "Artificial Intelligence",
        "Faculty": ".",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/10cSvtcEvYSwNv2eU_Xbn3PUdkGo8JM8G?usp=sharing",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3842",
        "CourseTitle": "Artificial Intelligence Laboratory",
        "Faculty": "Mr. Imam Hossain",
        "Trimester": "Summer 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1Z1vCQiS0b-mYB5A5tf1DGg",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3842",
        "CourseTitle": "Artificial Intelligence Laboratory",
        "Faculty": "Chowdhury Rafeed Rahman",
        "Trimester": "Spring - 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1wK4471_jB2yHw3rP_Npv_w",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4889",
        "CourseTitle": "Machine Learning",
        "Faculty": "Chowdhury Rafeed Rahman",
        "Trimester": "Spring 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1-GlDPurRWOlYYsGMKy7wEw",
        "Category": "Data Science",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4891",
        "CourseTitle": "Data Mining",
        "Faculty": ".",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1xzjFIK1J_90vIpRVr28_rg",
        "Category": "Data Science",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4893",
        "CourseTitle": "Introduction to Bioinformatics",
        "Faculty": "Chowdhury Rafeed Rahman",
        "Trimester": "Spring 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/18-Aj3DpNRldz41imF5OpkA",
        "Category": "Data Science",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4523",
        "CourseTitle": "Simulation And Modeling",
        "Faculty": "Tomal Majumdar",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1o4xbmdmTgAglRnXj1Ef4lQ",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4524",
        "CourseTitle": "Simulation And Modeling Lab",
        "Faculty": "Tomal Majumdar",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/u/0/folders/1mzSMK7KtpXzEfVTF9o6N3yKs5zVDiMl1?fbclid=IwAR2hTrBqDD5KdRQ0YB_7_hV3czSLZzXz1QB_xeCfqt-I2Jx5VdSwNZpn5WI",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4621",
        "CourseTitle": "Computer Graphics ",
        "Faculty": ".",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1lgpRwUO_qZFMGvQSHrb3TA",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4587",
        "CourseTitle": "Cloud Computing ",
        "Faculty": ".",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1qlzDDLAPJjUwWdY5Ok8lkg",
        "Category": "Systems",
        "Keywords": null
    },
    {
        "CourseCode": "ENG 101",
        "CourseTitle": "Intensive English I",
        "Faculty": "Sofia mam",
        "Trimester": "Summer ",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1W_8z7qwIY6svvF7qOxqK-A",
        "Category": "Language",
        "Keywords": null
    },
    {
        "CourseCode": "MATH 187",
        "CourseTitle": "Fourier and Laplace Transformations and Complex Variables",
        "Faculty": "Nasrina Parvin",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1o4XxzAScZdCdBigOiJXWlA",
        "Category": "Mathematics",
        "Keywords": null
    },
    {
        "CourseCode": null,
        "CourseTitle": "Numerical Methods (NM)",
        "Faculty": "Rafid sir, Amar sir",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1zhnv7Xx-bRToGxIGBDREtigWKLXvDWPc?usp=sharing",
        "Category": "Systems ",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4165",
        "CourseTitle": "Web Programming (Web)",
        "Faculty": "Md. Saidul Hoque Anik",
        "Trimester": "Spring 2021",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/folderview?id=11V1DVji7FUrxlPKwr1QneO9vqcRCzKnW",
        "Category": "Programming Optional",
        "Keywords": null
    },
    {
        "CourseCode": null,
        "CourseTitle": "Numerical Methods (NM)",
        "Faculty": "C.Rafeed Rahman",
        "Trimester": null,
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/18mBAv5g8bVXkJNn_z-34OQ",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": null,
        "CourseTitle": "Numerical Methods (NM)",
        "Faculty": "Chowdhury Rafeed Rahman",
        "Trimester": "Spring 21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1ZifER_y0liNpYwiMyh8kvw",
        "Category": "Logics and Algorithms",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4611",
        "CourseTitle": "Compiler",
        "Faculty": "Nahid Hossain",
        "Trimester": "Summer-21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1O-UFdwTBj-vX7H49UJcrmQ",
        "Category": "Computational Theory",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 3715",
        "CourseTitle": "Data Communication (DC)",
        "Faculty": "Rokibul Islam",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1jAv10zhzJXN-VuC1xU2MDo-HG4fuOTKI?usp=sharing",
        "Category": "Network and Communications",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4165",
        "CourseTitle": "Web Programming (Web)",
        "Faculty": ".",
        "Trimester": null,
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1NJBS9deGXVZptHGBnTNi-aM84TQRqs1-?usp=sharing",
        "Category": "Programming Optional",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 1115",
        "CourseTitle": "Object Oriented Programming (OOP)",
        "Faculty": "Shubhangkar Karmakar Shanto",
        "Trimester": "Fall 21",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/u/0/folders/19QkvnAlXm2l3Q_YoPC3sd3U5_prJPkgA?fbclid=IwAR3n0Vn_kakdvEX02EoKpiOxJ-B2FvcQdtMFDZabpClfZXciEgjNT0holOE",
        "Category": "Programming Compulsory",
        "Keywords": null
    },
    {
        "CourseCode": "EEE 2113",
        "CourseTitle": "Electrical Circuit (EC)",
        "Faculty": "Abir mahmud",
        "Trimester": "6th",
        "Verified": null,
        "Contents": "Recording",
        "Link": "https://drive.google.com/drive/folders/1aC3Pk4dkbTx_bKCeTpHzApkwTFrxqpDm",
        "Category": "Other Engineering",
        "Keywords": null
    },
    {
        "CourseCode": "CSE 4329",
        "CourseTitle": "Digital System Design (DSD)",
        "Faculty": "Irtesam Mahmud Khan",
        "Trimester": "Summer -21",
        "Verified": "Yes",
        "Contents": "Recording",
        "Link": "https://terabox.com/s/1Zs0DIHy1YfG3GmTa7bIOqw",
        "Category": "Hardware",
        "Keywords": null
    }
]

var list = [];
for(var i=0;i<course.length;i++)
    {
        const obj = {}
                    obj.courseCode = course[i].CourseCode
                    obj.courseTitle = course[i].CourseTitle
                    obj.mid = ""
                    obj.final = ""
                    obj.assignment = ""
                    obj.ct = ""
                    obj.others = ""
                    obj.video = ""
                    list[i] = obj;
        
    }

    const result = list.filter(
        (c, index, self) =>
          index ===
          self.findIndex((t) => t.courseCode === c.courseCode)
      );

      console.log(result.length);

    

   // fs.writeFileSync("./courses.json", JSON.stringify(result, null, 4));



// const fs = require("fs");
// const carsFromFile = JSON.parse(fs.readFileSync("./courses.json", "utf8"));
// console.log("Cars from file:", carsFromFile);



// const path = "./new-Directory";

result.forEach(d=>{
    const path = `./new-Directory/${d.courseCode} - ${d.courseTitle}`
    fs.access(path, (error) => {

        // To check if the given directory
        // already exists or not
        if (error) {
            // If current directory does not exist
            // then create it
            fs.mkdir(path, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("New Directory created successfully !!");
            }
            });
        } else {
            console.log("Given Directory already exists !!");
        }
        });

})




