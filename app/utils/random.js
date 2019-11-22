let configCharacters = require('../../config/config').app.charactersAndLink;
let random = {};

function randInt (min, max) {
    // [min, max)
    return Math.random() * (max - min) + min;
}

function randItem (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
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
    let lang = randItem(['cn', 'en']);
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

function randVideo () {
    return randItem(configCharacters.video);
}

function randImage () {
    return randItem(configCharacters.pic);
}

function randAvatar () {
    return randItem(configCharacters.pic)
}

random.item = randItem;
random.int = randInt;
random.items = randItems;
random.post = randPost;
random.video = randVideo;
random.image = randImage;
random.avatar = randAvatar;

module.exports = random;
