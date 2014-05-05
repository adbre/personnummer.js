personnummer.js
===============

Small JS library to help validate Swedish personnummer and co-ordination numbers.

## Features
* 'Regular' personnummer, e.g. 640823-3234
* Leading century, e.g. 19640823-3234
* Plus-sign separator, e.g. 640823+3234
* Co-ordination numbers, e.g. 640883-3231

## Usage

    personnummer.isValid("640823-3234")

Possible return values are true on success, and false otherwise.
