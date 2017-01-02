var Nightmare = require('nightmare');
var expect = require('chai').expect;
var fork = require('child_process').fork;

describe('test index.html', function() {
  var child;

  before(function (done) {
    child = fork('./server.js');
    child.on('message', function (msg) {
      if (msg === 'listening') {
        done();
      }
    });
  });

  after(function () {
    child.kill();
  });

  // still kind of confusing for this part
  it('the color should be red', function (done) {
    var nightmare = Nightmare({ show: true });
    nightmare
      .goto('http://127.0.0.1:8080/index.html')
      .click('h1')
      .wait(1000)
      .evaluate(function () {
        var ele = document.querySelector('h1'),
        // var ele = document.getElementById('title')
            // color = getComputedStyle(ele, 'color').content;
            color = getComputedStyle(ele).color;
        console.log(color);
        return color;
        // return document.querySelector('h1').textContent;
      })
      .end()
      .then(function(color) {
        expect(color).to.equal('rgb(255, 0, 0)');
        done();
      })
  });

  it('title changes after clicked', function (done) {
    var nightmare = Nightmare({ show: true });
    nightmare
      .goto('http://127.0.0.1:8080/index.html')
      .click('h1')
      .wait(1000)
      .evaluate(function () {
        return document.querySelector('h1').textContent;
      })
      .end()
      .then(function(text) {
        expect(text).to.equal('Hello Clicked');
        done();
      })
  });

});
