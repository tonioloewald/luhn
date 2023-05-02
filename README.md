# luhn

A simple function to allow you to check whether a credit card number's 
checksum digit (or the trailing luhn checksum digit of any similar number
such as a phone's IMEI) is correct.

Usage:

    import {luhn} from 'luhn-tiny'

    luhn('4111 1111 1111 1111')   // returns true
    luhn('4111-1111-1111-1112')   // returns true
    luhn(4111111111111)           // returns true
    luhn(4111111111112)           // returns false

As you can see, it accepts a number or a string and ignores non-numeric
characters in strings (e.g. spaces or dashes).

There's a ton of these functions out there, but I'm pretty sure this is the
smallest and probably the fastest.
