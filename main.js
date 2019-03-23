var language;
var shuffle;

function $(id){return document.getElementById(id);}

function init(){
  language = languages[$("languageSelect").value];
  shuffle = [];

  for(var i=0; i<language.rules.length; i++) {
    shuffle[i]=[];
    for(var j=0; j<language.rules[i].seq.length; j++)
      shuffle[i][j]=j;
  }

  language.examples.forEach((x, i)=>{
    var o = $("exampleSelect").appendChild(document.createElement("option"));
    o.innerText = x.name;
    o.value = i;
  });
  $("exampleSelect").onchange=()=>update();

  update();
}

function showRules(){
  $("rules").innerHTML = "";
  language.rules.forEach((x, i)=>{
    let li = $("rules").appendChild(document.createElement("li"));
    li.appendChild(document.createTextNode(x.type));
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

function showExample(tree){
  if(tree.rule==-1) {
    $("result").appendChild(document.createTextNode(tree.literal));
    return;
  }
  shuffle[tree.rule].forEach(x=>{
    showExample(tree.children[x]);
  });
}

function update(){
  showRules();
  $("result").innerHTML = "";
  showExample(language.examples[$("exampleSelect").value]);
}

window.onload=()=>{
  languages.forEach((x, i)=>{
    var o = $("languageSelect").appendChild(document.createElement("option"));
    o.innerText = x.name;
    o.value = i;
  });
  $("languageSelect").onchange=()=>init();
  init();
};
