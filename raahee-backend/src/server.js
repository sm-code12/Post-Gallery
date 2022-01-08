import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';




const app = express();


app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('raahee-backend');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/posts/:name', async (req, res) => {
    withDB(async (db) => {
        const postName = req.params.name;

        const postInfo = await db.collection('post').findOne({ name: postName })
        res.status(200).json(postInfo);
    }, res);
})

app.post('/api/posts/:name/likes', async (req, res) => {
    withDB(async (db) => {
        const postName = req.params.name;
    
        const postInfo = await db.collection('post').findOne({ name: postName });
        await db.collection('post').updateOne({ name: postName }, {
            '$set': {
                likes: postInfo.likes + 1,
            },
        });
        const updatedPostInfo = await db.collection('post').findOne({ name: postName });
    
        res.status(200).json(updatedPostInfo);
    }, res);
});

app.post('/api/posts/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const postName = req.params.name;

    withDB(async (db) => {
        const postInfo = await db.collection('post').findOne({ name: postName });
        await db.collection('post').updateOne({ name: postName }, {
            '$set': {
                comments: postInfo.comments.concat({ username, text }),
            },
        });
        const updatedPostInfo = await db.collection('post').findOne({ name: postName });

        res.status(200).json(updatedPostInfo);
    }, res);
});



app.listen(8000, () => console.log('Listening on port 8000'));