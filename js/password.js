var password = {
    //Rules are executed in order of appearance and their callbacks
    //are passed the output string for further processing
    rules: [
        {
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
            max: 10
        },
        {
            characters: '!@#$%^&()+={}[]:;<>?,',
            max: 2,
            callback: function (s) {
                var a = s.split(""),
                    n = a.length;

                for (var i = n - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = a[i];
                    a[i] = a[j];
                    a[j] = tmp;
                }
                return a.join("");
            }
        }
    ],
    generate: function () {
        var g = '';

        $.each(password.rules, function (k, v) {
            var m = v.max;
            for (var i = 1; i <= m; i++) {
                g = g + v.characters[Math.floor(Math.random() * (v.characters.length))];
            }
            if (v.callback) {
                g = v.callback(g);
            }
        });
        return g;
    }
}
