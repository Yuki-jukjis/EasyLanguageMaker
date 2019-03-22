var languages=[
  {
    name:"Japanese",
    rules:[
      {name:"副詞句", seq:["名詞", "格助詞"]},
      {name:"述語句", seq:["述語"]},
      {name:"述語句", seq:["副詞句","述語句"]}
    ],
    examples:[
      {rule:2, type:"述語句", children:[
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
      ]}
    ]
  }
];