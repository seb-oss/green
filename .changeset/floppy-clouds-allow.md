---
'@sebgroup/green-angular': major
---

Datepicker: Calendar dates shift by one day in negative UTC offset timezones

## Problem:
In  [`generateDateMatrix()`](https://github.com/tdelay/green/blob/69322ed6aeb77771f8a6adc85f4e0534387d37de/libs/angular/src/v-angular/datepicker/datepicker.utils.ts#L58), the first day of the month is constructed using an ISO 8601 date string: `const date = new Date('${year}-${monthStr}-01')`

As stated in [ECMAScript specification](https://tc39.es/ecma262/#sec-date-time-string-format), date-only strings in ISO 8601 format ("YYYY-MM-DD") are interpreted as UTC midnight. In timezones with a negative UTC offset (e.g., US Eastern UTC-5, US Pacific UTC-8), this UTC midnight rolls back to the previous day in local time.

For example, in UTC-5:

```
new Date("2026-02-01") results in 2026-01-31T19:00:00 local time
date.getMonth() returns 0 (January) instead of 1 (February)
date.getDate() returns 31 instead of 1
```
For example, if `firstValid` is today's date, the entire date matrix is ​​shifted, causing the date to be displayed incorrectly and unexpected dates to be marked as disabled.


## Steps To Reproduce:
1. Change to time zone with a negative UTC 
2. Reload web page 
3. Navigate to datepicker

## Fix:
Replace the string-based constructor with the numeric constructor, which interprets arguments in local time: `const date = new Date(year, month, 1)`