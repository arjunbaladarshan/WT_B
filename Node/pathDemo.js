const path = require("path");

filePath = "D:\\Darshan University\\Data\\BTech\\Sem-3\\WT\\2024\\Codes\\B\\WT_B\\Node\\first.js"

ans1 = path.dirname(filePath);
console.log("dirname = ",ans1);

ans2 = path.basename(filePath);
console.log("basename = ",ans2);

ans3 = path.extname(filePath);
console.log("extname = ",ans3);