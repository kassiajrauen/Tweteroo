import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json())

const user = [];

server.post('/sign-up', (req, res) => {
    const signUp = req.body;
    user.push(signUp);

    res.send('OK');
})

server.post('/tweets', (req, res) => {
    const tweets = {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }

    res.send(tweets);
})

server.get('/tweets', (req, res) => {
    const tweets = [
        {
            username: "bobesponja",
            avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
            tweet: "eu amo o hub"
        }
    ]

    res.send(tweets);
})

server.listen(5000);