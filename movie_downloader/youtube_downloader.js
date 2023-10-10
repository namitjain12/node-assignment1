const fs = require("fs");
const ytdl = require("ytdl-core");
 

ytdl('https://www.youtube.com/watch?v=YSyFSnisip0')

  .pipe(fs.createWriteStream('video.mp4'));