const chunkArray = (arr, len) => {
    if (!arr || !len)
        return null;
    
    let chunkedArr = [];
    let chunkArr = [];
    let index = 1;

    arr.forEach(num => {
        chunkArr.push(num);
        
        if (index % len == 0) {
            if (chunkArr.length > 0) {
                chunkedArr.push(chunkArr);
            }

            chunkArr = [];
        }

        index++;
    });

    return chunkedArr;
};

module.exports = chunkArray;