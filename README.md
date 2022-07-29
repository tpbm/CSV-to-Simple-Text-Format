# CSV-to-Simple-Text-Format
Application to transform CSV text into simple text format, through CLI or browser.
Through CLI, the application behavior was tested using NodeJS v16.15.0 API only.

CONTEXT
At the beginning, the application was created to allow simple conversion processes, from CSV into XML.
But, after some tests, I conclude it can be used not only for conversions from CSV into XML, but from CSV to all desired simple text format (plain text) which is a set of repeatable categorized data.

THE PHILOSOPHY
Convert the repeatable CSV data, into a desired repeatable simple text format, like XML.

HOW TO USE
Can be used through CLI and Webpage.
Using through the Webpage is the easiest way.
Using through the CLI requires NodeJS, and the required inputs are passed to the application through files.
The required input data are:
1. CSV data (required - CLI and browser)
2. Desired repeatable template (required - CLI and browser)
3. Header text, which is a non repeatable text that occurs before the repeatable ones (required - CLI)
4. Footer text, which is a non repeatable text that occurs after the repeatable ones (required - CLI)
