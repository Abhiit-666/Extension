const fs=require('fs');
const readline=require('readline');

async function processlbl(){
const stream=fs.createReadStream('adblocking.txt');

const rl = readline.createInterface({
    input:stream,
    crlfDelay: Infinity
  });
  
  var wrstream=fs.createWriteStream('url.js');
  wrstream.once('open',async function(fd) {
      wrstream.write("var blocked_sites_v2 = [")  
if(rl.eventNames()==='close'){
    wrstream.write("]")
}
    
    os=require('os');
    for await (var line of rl){
    line=line.slice(2,line.length-1);
    if(os.EOF){
        line="'*//:*."+line+"/*']";
        wrstream.write(line+'\r\n');
    }
    else{
            line="'*//:*."+line+"/*',";
            wrstream.write(line+"\r\n");
    }
    

}
wrstream.write(']');
wrstream.end();
});
}

processlbl();