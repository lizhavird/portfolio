var el = fs.read("/path/tp/terminal.js");
var scanlines = $('.scanlines');
var tv = $('.tv');




// var scanlines = $('.scanlines');
// var tv = $('.tv');
// function exit() {
//     $('.tv').addClass('collapse');
//     term.disable();
// }

// var term = $('#term').terminal(function(command, term) {
//     if (command.match(/^\s*im\s*$/)) {
//         return
//         this.echo('hi');
//     } else if (command !== '') {
//         try {
//             var result = window.eval(command);
//             if (result && result instanceof $.fn.init) {
//                 term.echo('<#jQuery>');
//             } else if (result && typeof result === 'object') {
//                 tree(result);
//             } else if (result !== undefined) {
//                 term.echo(new String(result));
//             }
//         } catch(e) {
//             term.error(new String(e));
//         }
//     }
// }, {
//     name: 'js_demo',
//     onResize: set_size,
//     exit: false,
//     // detect iframe codepen preview
//     enabled: $('body').attr('onload') === undefined,
//     onInit: function() {
//         set_size();
//         this.echo('hi! and welcome to elizabeths website. whats your name? type [[b;#fff;]im "name"] .');
//         this.echo('Type and execute [[b;#fff;]grab()] function to get the scre' +
//                   'enshot from your camera');
//         this.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
//     },
//     onClear: function() {
//        this.state
//         });
//     },
//     prompt: 'type here> '
// });
// // for codepen preview
// if (!term.enabled()) {
//     term.find('.cursor').addClass('blink');
// }
// function set_size() {
//     // for window height of 170 it should be 2s
//     var height = $(window).height();
//     var width = $(window).width()
//     var time = (height * 2) / 170;
//     scanlines[0].style.setProperty("--time", time);
//     tv[0].style.setProperty("--width", width);
//     tv[0].style.setProperty("--height", height);
// }

// function tree(obj) {
//     term.echo(treeify.asTree(obj, true, true));
// }

// function clear() {
//     term.clear();
// }

// // github('jcubic/jquery.terminal');
// cssVars(); // ponyfill