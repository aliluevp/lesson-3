let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("add expenses");
            appData.expenses[a] = b;
        } else {
            console.log("!!!bad expenses");
            i--;
        }

    }
}

chooseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    alert("Ваш бюджет на 1 день - " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка определения остатка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита - " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    let i = 0;
    while (i < 3) {
        appData.expenses[i] = prompt("Статья необязательных расходов?");
        console.log(i + " - " + appData.expenses[i]);
        i++;
    }
}

chooseOptExpenses();