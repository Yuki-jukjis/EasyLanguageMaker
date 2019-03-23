var languages=[
  {
    name:"Japanese",
    rules:[
      {type:"副詞句", seq:["名詞", "格助詞"]},
      {type:"述語句", seq:["述語"]},
      {type:"述語句", seq:["副詞句","述語句"]}
    ],
    examples:[
      {name:"リンゴ", rule:2, type:"述語句", children:[
        {rule:0, type:"副詞句", children:[
          {rule:-1, type:"名詞", literal:"私"},
          {rule:-1, type:"格助詞", literal:"は"}
        ]},
        {rule:2, type:"述語句", children:[
          {rule:0, type:"副詞句", children:[
            {rule:-1, type:"名詞", literal:"りんご"},
            {rule:-1, type:"格助詞", literal:"を"}
          ]},
          {rule:1, type:"述語句", children:[
            {rule:-1, type:"述語", literal:"食べます"}
          ]}
        ]}
      ]},
      { name:"fizz" }
    ]
  },
  {name:"foo", rules:[], examples:[]},
  {name:"bar", rules:[], examples:[]},
];
