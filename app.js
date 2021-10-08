const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require('fs');
const { Console } = require('console');

var filename = "";

var createWizard = () => {
    console.log("File system Assignment");
    rl.question("Name of the Directory? ", (ans) => {
        dirName = ans;
        fs.mkdir(dirName, { recursive: true }, err => {
            if (err) throw Console.log(err);
            else console.log("Directory Created");
        })
        repeat();
    })
}

var removeDir = () => {
    rl.question("Enter directory name to remove?", ans => {
        fs.rmdir(ans, () => {
                console.log("Directory Removed");
            repeat()
        })
    })
}

var writeToFile = () => {
    rl.question("Enter the file name for write: ", ans => {
        filename = ans + ".txt";
        rl.question("Enter the content for file: ", data => {
            fs.writeFile(filename, data, (err) => {
                if (err) throw console.log(err);
                console.log("File created and written successfully");
                repeat();
            })
        })
    })
}

var readToFile = () => {
    rl.question("Enter the filename for read operation?", ans => {
        filename = ans + ".txt";
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) throw err;
            else console.log(data);
            repeat();
        })
    })
}

var deleteFile = () => {
    rl.question("Enter filename for delete: ", ans => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if (err) throw err;
            else console.log("File deleted successfully");
            repeat();
        })
    })
}
 
var AppendTOFile = () => {
    rl.question("Enter the file name for write: ", ans => {
        filename = ans + ".txt";
        rl.question("Enter the content for file: ", data => {
            fs.appendFile(filename, data, (err) => {
                if (err) throw console.log(err);
                console.log("Data appended");
                repeat();
            })
        })
    })  
}

var updateFile = () => {
    rl.question("Enter the file name for write: ", ans => {
        filename = ans + ".txt";
        rl.question("Enter the content for file: ", data => {
            fs.writeFile(filename, data, (err) => {
                if (err) throw console.log(err);
                console.log("File updated successfully");
                repeat();
            })
        })
    })
}

var renameFile = () => {
    rl.question("Enter the file name you want to rename: ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter the new name for file: ", (newAns) => {
            newFileName = newAns + ".txt";
            fs.rename(filename,newAns,(err)=>
            {
                if(err) throw err;
                console.log("Rename succesfully!!");
                repeat();
            });
        });
    });
}

var instruction = () => {
    console.log("\n1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write File");
    console.log("4.Read File");
    console.log("5.Delete File");
    console.log("6.Append data to File");
    console.log("7.Update / Replace file with new data");
    console.log("8.Rename File");
    console.log("9.Exit");
}

var start = () => {
    rl.question("\nPlease enter your choice: ", ans => {
        if (ans === "1") createWizard();
        else if (ans === "2") removeDir();
        else if (ans === "3") writeToFile();
        else if (ans === "4") readToFile();
        else if (ans === "5") deleteFile();
        else if (ans === "6") AppendTOFile();
        else if (ans === "7") updateFile();
        else if (ans === "8") renameFile();
        else if (ans === "9") rl.close();   
        else console.log("Wrong choice"); start();
    })    
}

var repeat = () => {
    instruction()
    start()
}

repeat();


