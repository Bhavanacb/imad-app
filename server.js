var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article one | Bhavana',
    heading: 'Article one',
    date: '21 aug,2017',
    content: `
        <p>
             I am now working on my web develpoing skills.
         </p>
         <p>
             I know i should have started it before but atleast I am not giving up.
         </p>`
    },
    'article-two': {
        title: 'Article two | Bhavana',
    heading: 'Article two',
    date: '24 aug,2017',
    content: `
     <p>
             in friends tv show there are 6 main characters chandler,joey,ross,monica,rachel,pheoble the show was first aired in 1994 and had entire 10 seasons for 10 years.
         </p>
         <p>
             chandler-sarcasm,monica-ocd,pheobe-weirdness,ross-expressions,rachel-fashion,joey-innocence are the things i like most in the show.
         </p>`
        
    },
    
    'article-three': {
        title: 'Article three | Bhavana',
    heading: 'Article three',
    date: '24 aug,2017',
    content: ` <p>
             Now i have to work on my voice and communication skills.But i am doing nothing for that what should be done then again i am expecting the result,which is pathetic by the way.
         </p>
         <p>
            people think this is good and that is bad but there is no such this called good or bad its just persepction.
         </p>`
        }     
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
   var htmlTemplate=`
   <html>
     <head>
     <title>
         ${title}
     </title>
     <meta name="viewport" contents="width=device-width,initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
     <body>
     <div class="container">
       <div>
         <a href='/'>Home</a>
      </div>
      <hr/>
      <h3>
         ${heading}
     </h3>
     <div>
        ${date} 
     </div>
     <div>
         ${content}
     </div>
     </div>
    </body>
  </html>
  `;
  return htmlTemplate;
} 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req, res){ 
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
      res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
