(function() {
    // ReSharper disable once InconsistentNaming
    function Personnummer() {
        var self = this;

        self.isValid = function (data) {
            var regex = /^([0-9]{2}|[0-9]{4})([0-9]{2})([0-9]{2})(-|\+)([0-9]{3})([0-9])$/;
            var match = regex.exec(data);
            if (!match) return false;

            var year = match[1];
            var month = match[2];
            var day = match[3];
            var separator = match[4];
            var number = match[5];
            var checksum = match[6];

            // Ignore century; not used for validation...
            if (year.length == 4) {
                year = year.substr(2);
            }

            return mod10(year + month + day + number + checksum);
        };

        function mod10(number) {
            var total = 0;
            for (var i = 0; i < number.length; i++) {
                var num = ((i % 2 == 0) ? (2 * number[i]) : number[i]).toString();
                for (var j = 0; j < num.length; j++) {
                    total += parseInt(num[j]);
                }
            }

            return total % 10 == 0;
        }
    }

    var personnummer = new Personnummer();
    window.personnummer = personnummer;
    return personnummer;
})();
