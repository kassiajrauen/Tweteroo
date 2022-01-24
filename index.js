import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json())

const user = [];
const tweet = [];
const allTweets = [];

server.post('/sign-up', (req, res) => {
    const signUp = req.body;
    user.push(signUp);
    
    res.send('OK');
})

server.post('/tweets', (req, res) => {
    const tweets = req.body;
    tweet.push(tweets);

    res.send('OK');

    allTweets = [];

    for(let i = 0; i < user.length; i++){
        for(let j = 0; j < tweet.length; j++){
            if(user[i].username === tweet[j].username){
                post= {
                    username: user[i].username,
                    avatar: user[i].avatar,
                    tweet: tweet[j].tweet,
                }; 
                allTweets.push(post);
            }
        }
    }
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