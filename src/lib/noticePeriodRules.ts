export const NoticePeriodRules = [
    {
        monthsMin: -1,
        monthsMax: 0,
        weeks: 0,
    },
    {
        monthsMin: 0,
        monthsMax: 6,
        weeks: 1,
    },
    {
        monthsMin: 6,
        monthsMax: 24,
        weeks: 2,
    },
    {
        monthsMin: 24,
        monthsMax: 48,
        weeks: 4,
    },
    {
        monthsMin: 48,
        monthsMax: 84,
        weeks: 3,   // weeks should be 8 for 4 to 7 years
    },
    // notice duration between 84 -96 months is undefined
    {
        monthsMin: 96,
        monthsMax: 108,
        weeks: 10,
    },
    {
        monthsMin: 108,
        monthsMax: 120,
        weeks: 11,
    },
    {
        monthsMin: 120,
        monthsMax: 99999,
        weeks: 12,
    },
];
