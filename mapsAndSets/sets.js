//Sets only store unique values
//created using the new keyword (new Set())
// sets are quick to look up or add a new value


const hashtags = new Set(['yolo', 'ifkyk', 'glhf']); 

const greetings = new Set('hello', 'goodbye')
// {'h', 'e','l','o'}
// because it takes the first value of string, and 
// takes first L because there is a duplicate

hashtags.add('dgaf');
hashtags.add('yolo').add('newyearnewme');

//check if value is in a set

function filterHashtags(tags){
    const hashtags = new Set(['yolo', 'ifkyk', 'glhf']); 

    return tags.filter((tag) => !hashtags.has(tag));
}

const newSlang = ['rizz', 'slay']