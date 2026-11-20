console.log('1 sync start');

setTimeout(() => console.log('6 macrotask: setTimeout 0'), 0);
setImmediate(() => console.log('7 macrotask: setImmediate'));

Promise.resolve().then(() => console.log('4 microtask: promise.then'));
queueMicrotask(() => console.log('5 microtask: queueMicrotask'));
process.nextTick(() => console.log('3 nextTick'));

(async () => {
  console.log('2 sync inside async fn (before first await)');
  await null;
  console.log('5b microtask: after await');
})();

console.log('2b sync end');

let n = 0;
setTimeout(() => console.log('timer never fires while microtasks recurse'), 0);
function spin() { if (n++ < 1e5) queueMicrotask(spin); else console.log('microtasks done'); }
spin();