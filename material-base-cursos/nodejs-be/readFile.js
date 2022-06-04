import { readFile } from 'fs';

readFile('test.txt', 'utf8', (err, data) => {
    console.log(data);
});
