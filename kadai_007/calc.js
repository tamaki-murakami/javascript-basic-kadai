// 最大値の設定（非常に大きな数を設定）
let max = Number.MAX_SAFE_INTEGER;

// 1からmaxまでのランダムな数を生成
let num = Math.floor(Math.random() * max) + 1;

if (num % 3 === 0 && num % 5 === 0) {
  console.log(num);
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log(num);
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log(num);
  console.log("5の倍数です");
} else {
  console.log(num);
  console.log("3の倍数でも5の倍数でもありません");
}