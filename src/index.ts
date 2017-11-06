function twice(num: number) {
  return num * 2
}

function pTwice(num: number): Promise<number>{
  return Promise.resolve(num * 2)
}

async function main() {
  console.log(`twice(2) = ${twice(2)}`);
  console.log(`pTwice(2) = ${await pTwice(2)}`);
}

main().catch(console.error);
