import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke.'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'This is second joke.'
        },
        {
            id: 3,
            title: 'A joke',
            content: 'This is third joke.'
        },
        {
            id: 4,
            title: 'A joke',
            content: 'This is fourth joke.'
        },
        {
            id: 5,
            title: 'A joke',
            content: 'This is fifth joke.'
        },
    ];

    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


// There are two ways to import files in javascript - common js, module js
// Common js: "require" statement. Synchronous code

// module js: "import" syntax. Code kai sari files se import karni hoti kv synchronously kv asynchronously. Asynchronous code import. To solve error go to package.json file and 
//             type "type": "module" 

