const bcrypt = require('bcrypt');

export default async function hashPass(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}