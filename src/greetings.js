function greeting(name = "my friend") {
  let answer = `Hello`
  if (isMoreThanOneName(name)) {
    let processedName = filterComma(name)
    answer = handleMultipleName(answer, processedName);
  } else if (isAllUppercase(name)) {
    answer = `${answer.toUpperCase()}, ${name}.`
  }
  else {
    answer = `${answer}, ${name}.`
  }
  return answer
}

function filterComma(array) {
  let processedName = array.slice()
  processedName.forEach((x, i) => {
    if (x.includes(", ") && !(x.includes("\""))) {
      let split = x.split(", ");
      processedName.push(split[1])
      return processedName[i] = split[0]
    }
    processedName[i] = x.replace(/\"/gi, "")
  })
  return processedName
}
function isAllUppercase(name) {
  return name == name.toUpperCase()
}
function NameArrayReducer(array) {
  return array.reduce((string, x, i, array) => {
    if (i == array.length - 1) return string += ` and ${x}.`;
    else return string += `, ${x}`;
  }, "")
}
function isMoreThanOneName(array) {
  return (array.length > 1 && typeof array == "object")
}
function handleMultipleName(answer, array) {
  let shoutingAnswer = ""
  let shouting = array.filter(x => {
    return isAllUppercase(x)
  })
  if (array.includes(shouting[0])) {
    array.splice(array.indexOf(shouting[0]), 1)
    shoutingAnswer = ` AND HELLO ${shouting[0]}!`
  }
  let string = NameArrayReducer(array)
  return `${answer}${string}${shoutingAnswer}`
}

export default greeting