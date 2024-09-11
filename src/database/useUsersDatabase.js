import { useSQLiteContext } from "expo-sqlite";

export function useUsersDatabase() {
    const database = useSQLiteContext();

    async function authUser({ email, password }) {
        console.log("authUser email:", email, " - password:", password);

        try {
            // Corrigido: Consulta SQL com a sintaxe correta e parâmetros de consulta
            const result = await database.getFirstAsync(
                `SELECT id, name, email, role FROM users WHERE email = ? AND senha = ?`,
                [email, password]
            );
            return result;
        } catch (error) {
            console.error("useUsersDatabase authUser error:", error);
            throw error;
        }
    }

    return {
        authUser,
    };
}
