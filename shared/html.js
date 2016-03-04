export default (Component) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <title>My React Boilerplate</title>
      <link rel="stylesheet" type="text/css" href="/static/style.css" >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">



    </head>
    <body>
      <div id="react-app" className="container">${Component}</div>
      <script type="text/javascript" src="/static/bundle.js"></script>
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
      <script src="http://localhost:3000/socket.io/socket.io.js"> </script>
      <script>
        var bandera = 0;
        var websocket = io.connect("http://localhost:3000");
        websocket.on('noticias', function (data) {
          console.log(data);
        });
        var websocketStream = io.connect("http://localhost:3000/stream");
        websocketStream.on('setFrame', proc);
        function proc (img) {
          try {
            console.log(img);
            document.querySelector('#miImg').src = src;
          } catch (err) {

          }
        };
        navigator.webkitGetUserMedia({audio: true, video: true}, function (video) {
          bandera = 1;
          try {
            document.querySelector('video').src = window.URL.createObjectURL(video);
          } catch (err) {

          }
        },
        function (error) {
          console.error(error);
        }
        )
        window.requestAnimFrame = (function (callback) {
          return window.requestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 100);
          }
        })();
        function dFrame (ctx, video, canvas) {
          ctx.drawImage(video, 0,0);
          var dataUrl = canvas.toDataURL('image/jpeg', 0.2);
          if (bandera != 0) websocket.emit('newFrame', dataUrl);
          requestAnimFrame(function(){
            dFrame(ctx, video, canvas);
          })
        }
        window.addEventListener('load', init);
        function init () {
          try {
            var canvas = document.querySelector('#miCanvas');
            var video = document.querySelector('video');
            var ctx = canvas.getContext('2d');
            dFrame(ctx, video, canvas)
          } catch (error) {

          }
        }
      </script>
    </body>
  </html>
`
