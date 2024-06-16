class Frens {
    static async getFrens(login, reqGetFrens) {
        // if (!login || login === "undefined" || login == null) return [];                                            // Если логина нет, то не делаем запрос в бд, просто возвращаем пустой массив
        // if (login) {                                                                                                // Если логина есть, делаем запрос в бд, получаем инфу о пользователе
        //     const obj = await fetch("http://localhost:8888/getFrens", reqGetFrens);
        //     const result = obj.json();
        //     return (result);
        // }
    }
}
module.exports = Frens;