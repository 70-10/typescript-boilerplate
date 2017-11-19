async function main() {
  console.log(twice(2));
}

function twice(num: number) {
  return num * 2;
}

main().catch(console.error);
