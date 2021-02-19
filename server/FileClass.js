

const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
app.use(cors())
const uid = require('uid');

class usersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Eroare: Nu ai specificat un nume de fisier.');
        }
        this.filename = filename;
        
        try {
            fs.accessSync(this.filename); 
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            })
        );
    }

  
    async writeAll(users) {
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(users, null, 2)
        );

    }

    
    async addUser(user) {

        user.id = uid(10);
        let users = await this.getAll();
        users.push(user);
        await this.writeAll(users);
    }



}


export default usersRepository;
