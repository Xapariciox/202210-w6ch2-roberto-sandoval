import { program } from 'commander';
import * as dotenv from 'dotenv';
dotenv.config();

const key = process.env.KEY as string;
const port = process.env.PORT;
console.log(key, port);

program.option('-u, --user <char>').option('-h, ---help');
program.parse();

const { user, help } = program.opts();
console.log({ user }, { help });
