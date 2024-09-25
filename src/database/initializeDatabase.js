export async function initializeDatabase(database) {
    try {
        // Criação da tabela
       
        await database.execAsync(`
            DROP TABLE IF EXISTS payments;

            DROP TABLE IF EXISTS users;
           

            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                curso TEXT,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL DEFAULT 'gui123',
                role TEXT NOT NULL DEFAULT 'user',
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE
            );
            CREATE TABLE IF NOT EXISTS payments (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              user_cadastro INTERGER NOT NULL,
              valor_pago REAL NOT NULL,
                valor_total REAL NOT NULL,
                data_pagamento DATE NOT NULL,
                observacao TEXT,
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE,
                FOREIGN KEY(user_id) REFERENCES users(id),
                FOREIGN KEY(user_cadastro) REFERENCES users(id)

            );
        `);

        // Inserção de dados
        await database.execAsync(`
            INSERT OR REPLACE INTO users (name, email, senha, role) VALUES ('Super', 'guisuper@gmail.com', 'gui123', 'SUPER');
        `);

        await database.execAsync(`
            INSERT OR REPLACE INTO users (name, email, senha, role) VALUES ('Adm', 'guiadm@gmail.com', 'gui123', 'ADM');
        `);

        await database.execAsync(`
            INSERT OR REPLACE INTO users (name, email, senha, role) VALUES ('User', 'guiuser@gmail.com', 'gui123', 'USER');
        `);

        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}
