import { differenceInMonths } from "date-fns";
import { NoticePeriodRules } from "../noticePeriodRules";

export function getNoticePeriod(engagement: Date, resignation: Date): number | undefined {
    const dateDiffMonths = differenceInMonths(resignation, engagement);
    return findNoticePeriod(dateDiffMonths)?.weeks;
}

function findNoticePeriod(monthsEmployed: number) {
    const matchingRules = NoticePeriodRules.filter(
        (y) => monthsEmployed > y.monthsMin && monthsEmployed <= y.monthsMax,
    );
    if (matchingRules.length) {
        return matchingRules[0];
    }
}
