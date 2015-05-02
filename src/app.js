/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var url = "http://cb.kanata-jp.com/cbof65/k.cgi?_System=login&_Login=1&p=scPW&a=MGvrjYEauNbcuZQkiXqBiStD";
var id = "akitoshi";
var pw = "ykorik0";
var basicAuth = "YWtpdG9zaGk6eWtvcmlrMA==";
var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

console.log('Start Ajax');
ajax(
  {
    url: url+'&_Name='+id+'&Password='+pw,
    type: 'json',
    headers: { Authorization: 'Basic '+basicAuth}
  },
  function(data, status, request){
    console.log(data);
    console.log(JSON.stringify(data));
    console.log('Ajax Ok ' + data);
  },
  function(error, status, reques){
    console.log('ajax error: ' + error);
  }
);
console.log('End Ajax');


main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [
        {
          title: '05/01',
          icon: 'images/calendar_icon.png',
        }, {
          title: '16:00-17:00',
          subtitle: 'Schedule Body'
        }, {
          title: '18:00-18:30',
          subtitle: 'Schedule Body2'
        }, {
          title: '19:00-20:30',
          subtitle: 'Schedule Body3'
        }
      ]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
