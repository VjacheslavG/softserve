const dayMessage = function (name) {
    let myDate = new Date();
    switch (true) {
        case (myDate.getHours() >= 23 || myDate.getHours() < 5): return `<p> Good night, ${name} </p>`;
        case (myDate.getHours() >= 5 && myDate.getHours() < 11): return `<p> Good morning, ${name} </p>`;
        case (myDate.getHours() >= 11 && myDate.getHours() < 17): return `<p> Good day, ${name} </p>`;
        case (myDate.getHours() >= 17 && myDate.getHours() < 23): return `<p> Good evening, ${name} </p>`;
    }
}

module.exports.dayMessage = dayMessage;