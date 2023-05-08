function shout(str){
    return str.toUpperCase();
}

function whisper(str){
    return str.ToLowerCase();
}

function logShout(str){
    console.log(shout(str));
}

function logWhisper(str){
    console.log(whisper(str));
}

function sayHiToHeadphonedRoommate(str){
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase())
            counter++;
        if (str[i] === str[i].ToLowerCase())
            counter--;
    }
    if (counter === str.length)
        return "YES INDEED!";
    else if (counter === (0-str.length))
        return "I can't hear you!";
    else if (str = "Let's have dinner together!")
        return "I would love to!";
    else 
        return '';
}
