const readline = require('readline-sync');

async function start(){

  const content = {}
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  function askAndReturnSearchTerm(){
    return readline.question("Qual sua pergunta para os robos? ");
  }	

  function askAndReturnPrefix(){
    const prefixes            = ['Who is', "What is", "The history of"];
    const selectedPrefixIndex = readline.keyInSelect( prefixes, "Choose one option: ");
    const selectedPrefixText  = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }

  console.log(content)
}
 
  start()

