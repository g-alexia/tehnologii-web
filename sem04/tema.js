const fs = require('fs');
const path = require('path');

function compressRLE(text) {
    if (text.length === 0) return '';

    let result = '';
    let count = 1;
    for (let i = 1; i <= text.length; i++) {
        if (text[i] === text[i - 1]) {
            count++;
        } else {
            result += text[i - 1] + count;
            count = 1;
        }
    }
    return result;
}


function compressFile(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Eroare la citirea fișierului:', err);
            return;
        }

        const compressed = compressRLE(data);

        fs.writeFile(outputFilePath, compressed, (err) => {
            if (err) {
                console.error('Eroare la scrierea fișierului:', err);
                return;
            }
            console.log(`Fișierul a fost comprimat cu succes în ${outputFilePath}`);
        });
    });
}

const inputPath = path.join(__dirname, 'input.txt');  
const outputPath = path.join(__dirname, 'output.txt'); 
compressFile(inputPath, outputPath);