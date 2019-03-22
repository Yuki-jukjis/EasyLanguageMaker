var language;
var shuffle;

function $(id){return document.getElementById(id);}

function init(){
  language = languages[0];
  shuffle = [];

  for(var i=0; i<language.rules.length; i++) {
    shuffle[i]=[];
    for(var j=0; j<language.rules[i].seq.length; j++)
      shuffle[i][j]=j;
  }

  update();
}

function showRules(){
  $("rules").innerHTML = "";
  language.rules.forEach((x, i)=>{
    let li = $("rules").appendChild(document.createElement("li"));
    li.appendChild(document.createTextNode(x.name));
    li.appendChild(document.createTextNode("="));
    for(let j=0; j<x.seq.length; j++) {
      if(j!=0) {
        let button = li.appendChild(document.createElement("span"));
        button.innerHTML = "⇔";
        let a = i, b = j;
        button.onclick=()=>{
          let temp = shuffle[a][b-1];
          shuffle[a][b-1] = shuffle[a][b];
          shuffle[a][b] = temp;
          update();
        }
      }
      li.appendChild(document.createTextNode(x.seq[shuffle[i][j]]));
    }
  });
}

function showResult(tree){
  if(tree.rule==-1) {
    $("result").appendChild(document.createTextNode(tree.literal));
    return;
  }
  shuffle[tree.rule].forEach(x=>{
    showResult(tree.children[x]);
  });
}

function update(){
  showRules();
  $("result").innerHTML = "";
  showResult(language.examples[0]);
}

window.onload=()=>{
  init()
};
