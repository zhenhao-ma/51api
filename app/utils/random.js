let configCharacters = require('../../config/config').app.charactersAndLink;
let uuidv4 = require('uuid/v4');
let random = {};

function randInt (min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min) + min);
}

function randItem (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randLanguage (arr) {
    return randItem(['cn', 'en'])
}

function randItems (arr, number) {
    let r = [];
    for (let k = 0; k < number; k++) {
        r.push(randItem(arr))
    }
    return r
}

function randPost () {
    // video always come at last
    let lang = randLanguage();
    if (lang === 'en') {
        // an intuitive generator
        let chars = configCharacters.en;
        let numSentences = randInt(1, 20);
        let post = '';
        for (let n = 0; n < numSentences; n++) {
            let endChar = randItem([',','.',',','.\n',',\n','.\n','!','?']); // higher chance to pickup a ',' and '.'
            let numWords = randInt(1, 30);
            let sentence = [];
            for (let w = 0; w < numWords; w++) {
                let word = randItems(chars, randInt(1, 10)).join('');
                sentence.push(word)
            }
            sentence = sentence.join(' ') + endChar + ' ';
            console.log('sentence: ', sentence);
            post += sentence
        }
        return post
    } else {
        // a tricky generator
        let chars = configCharacters.cn;
        let post = randItems(chars, randInt(10, 100)).join('');
        let numSentences = randInt(0, Math.floor(post.length/10));
        for (let k = 0; k < numSentences; k++) {
            let slicePosition = randInt(0, post.length);
            post = post.slice(0, slicePosition) + randItem(['，', '。', '！', '？']) + post.slice(slicePosition);
        }
        return post
    }
}

function randUserDescription () {
    return randItems(configCharacters[randLanguage()], randInt(2, 200)).join('');
}

function randVideo () {
    return randItem(configCharacters.video);
}

function randImage () {
    return randItem(configCharacters.pic);
}

function randAvatar () {
    return randItem(configCharacters.pic)
}

function randUsername () {
    return randItems(configCharacters[randLanguage()], randInt(2, 10)).join('')
}

function randUserId () {
    return uuidv4()
}

function randPostId () {
    return uuidv4()
}

function randCommentId () {
    return uuidv4()
}

function randPostComments (total) {
    let r = [];
    for (let k = 0; k < total; k++) {
        r.push(
            {
                commentId: randCommentId(),
                comment: randPost(),
                like: randInt(0, 500),
                dislike: randInt(0, 500),
                time: randTime()
            }
        )
    }
    return r
}

function randTime(start = new Date(2012, 0, 1), end = new Date()) {
    return (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).toLocaleString();
}

random.item = randItem;
random.int = randInt;
random.items = randItems;
random.post = randPost;
random.video = randVideo;
random.image = randImage;
random.avatar = randAvatar;
random.username = randUsername;
random.userId = randUserId;
random.postId = randPostId;
random.postComments = randPostComments;
random.time = randTime;
random.userDescription = randUserDescription;

module.exports = random;
