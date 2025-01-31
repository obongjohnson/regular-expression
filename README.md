# DESCRIPTION:

### This program efficiently checks if a credit card number is valid and identifies its type based on common industry standards.


# Regex Pattern Breakdown:

1. Visa (/^4[0-9]{12}(?:[0-9]{3})?$/)

Starts with 4.

Followed by 12 digits ([0-9]{12}), plus an optional extra 3 digits ((?:[0-9]{3})?).

Card length: 13 or 16 digits.



2. MasterCard (/^5[1-5][0-9]{14}$/)

Starts with 5, followed by a digit from 1-5 (5[1-5]).

Followed by 14 more digits ([0-9]{14}).

Card length: 16 digits.



3. American Express (/^3[47][0-9]{13}$/)

Starts with 3, followed by 4 or 7 (3[47]).

Followed by 13 digits ([0-9]{13}).

Card length: 15 digits.



4. Discover (/^6(?:011|5[0-9]{2})[0-9]{12}$/)

Starts with 6, followed by 011 or 5xx.

Followed by 12 digits ([0-9]{12}).

Card length: 16 digits.



