const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let answer = "";
  for (let i = 0; i < expr.length; i += 10) {
    let subString = expr.slice(i, i + 10);
    if (subString === "**********") {
      answer += " ";
    } else {
      subString = subString
        .replace(/00/g, "")
        .replace(/10/g, ".")
        .replace(/11/g, "-");
      answer += MORSE_TABLE[subString];
    }
  }
  return answer;
}

module.exports = {
  decode,
};
