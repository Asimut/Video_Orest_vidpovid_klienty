function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qrOkbFTsqU":
        Script1();
        break;
      case "6Ze4JVVxOY5":
        Script2();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

script.src = '//code.jquery.com/jquery-1.11.0.min.js';

script.type = 'text/javascript';

head.appendChild(script);
}

function Script2()
{
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbwCh3XJAbXt7540J98v44GVsDwGyq2vX_AeZkrQ9-jhZZeKtLk/exec";  

storyline =

{

 "UserName" : player.GetVar("UserName"),

  "Region" : player.GetVar("Region"),

  "Video_pass" : player.GetVar("Video_pass")
 }

//Не вносить изменений

$.ajax(

 {

  url: WEB_APP_URL,

  type: "POST",

  data: storyline,

  success: function(data)

  {

   console.log(data);

  },

  error: function(err)

  {

   console.log('Error:', err);

  }

 });

 return false;
}

