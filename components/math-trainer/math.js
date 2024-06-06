import importTemplate from "../../util/importTemplate.js";

export default {
  props: ["propex"],
  components: {},
  data() {
    return {
      question: "\\[5^{-3} \\]",
      //"\\[{-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\]",
      tip: "\\[a^{-b} =  1/a^b \\]",
      answers: ["1/5³", "1/125"],
      userInput: "",
      showTip: false,
      error: false,
      errorClass: "error",
      correctClass: "correct",
    };
  },
  methods: {
    checkAnswer() {
      //const x = "\\[{ 5^{-3}} \\]";
      //document.getElementById("question").innerHTML = x;
      // user digitou a resposta inteira correta
      const last = this.answers.length - 1;
      console.log(last);
      const questionCorrect = this.userInput === this.answers[last];
      if (questionCorrect) {
        //next question
        console.log("question full correct");
        this.correct = true;
        this.error = false;
      } else {
        const partialyCorrect =
          this.userInput == this.answers[0] ? true : false;
        if (partialyCorrect) {
          this.error = false;
        } else {
          console.log("error", partialyCorrect);
          console.log(this.userInput);
          this.error = true;
        }
      }
    },
  },
  mounted() {
    //make MathJax work 'sometimes cdn falls'
    //window.MathJax.typeset();
    window.MathJax.typeset();
  },
  //template: await importTemplate("../components/math-trainer/math.html"),
  //fix for githubpages
  template: await importTemplate("/components/math-trainer/math.html"),
};
