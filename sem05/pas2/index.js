// import CryptoJS from "crypto-js";
// let word1 = 'word1';
// let word2 = 'word2';


// let crypt = CryptoJS.AES.encrypt(JSON.stringify(word1), 'secret key 123').toString();
// console.log(crypt);

// let bytes = CryptoJS.AES.decrypt(crypt, 'secret key 123');
// let decrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log(decrypt); 

import fs from "fs";
import path from "path";
import {rimraf} from "rimraf";

const dirPath = path.join(process.cwd(), "testDir");
const filePath = path.join(dirPath, "fisier.txt");

fs.mkdirSync(dirPath, { recursive: true });
console.log("Director creat:", dirPath);

fs.writeFileSync(filePath, "Acesta este un fișier de test.");
console.log("Fișier creat:", filePath);

await rimraf(dirPath);
console.log("Director șters:", dirPath);