let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];

  for (const category of categories) {
    categoriesTotals.push([category, calculateCategoryExpenses(category)]);
  }

  let largestTotal = 0;
  let largestCategory = "";

  for (const item of categoriesTotals) {
    if (item[1] > largestTotal) {
      largestTotal = item[1];
      largestCategory = item[0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
