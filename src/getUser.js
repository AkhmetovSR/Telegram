class User {
    static async getData(login, reqGetUserData) {
        if (!login || login === "undefined" || login == null) return [];                                            // Если логина нет, то не делаем запрос в бд, просто возвращаем пустой массив
        if (login) {                                                                                                // Если логина есть, делаем запрос в бд, получаем инфу о пользователе
            const obj = await fetch("http://localhost:8880/", reqGetUserData);
            const result = obj.json();
            return (result);
        }
    }
}
module.exports = User;