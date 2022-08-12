let n = 1000;

nextPrime:
for (let i = 3; i <= n; i++) { // Для всех i...

  for (let j = 3; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}
