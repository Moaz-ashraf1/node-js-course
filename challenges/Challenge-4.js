const add = (x, y, callbak) => {
  setTimeout(() => {
    const sum = x + y

    callbak(sum)
  }, 2000)
}
add(2, 3, (data) => {
  console.log(data);
})