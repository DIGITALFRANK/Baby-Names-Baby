// const parse_json = require(fs);

// parse_json.readFile('./baby-names.json', function (err, data) {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//     console.log(data)
// });

// const data = JSON.parse(baby-names.json);

const fs =  require('fs');

fs.readFile('./baby-names.csv', function (err, data) {
    if (err) {
        console.log(err)
        throw err
    }
    // console.log(data.toString('utf-8'));
    var parsedData = data.toString('utf-8');
    console.log(parsedData);

    // fs.writeFile('baby-name-copy.cvs', parseData, function (err) {
    //     if (err) {
    //         console.log(err)
    //     }
    // })
});