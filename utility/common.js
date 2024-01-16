exports.Common = class Common {

    generateRandomString(length) {
        let random_string = '';
        let random_ascii;
        for(let i = 0; i < length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        console.log(`generateRandomString: ${random_string}`);
        return random_string
    }
}
