import { getNoticePeriod } from "./getNoticePeriod"

import { weeksToBeServed,testCases } from "./testData"


for (let index = 0; index < testCases.length; index++) {
    test("Notice Duration Scenario " + (index), () => {
        expect(getNoticePeriod(testCases[index].EngagementDate, 
            testCases[index].ResignationDate)).toEqual(weeksToBeServed("scenario_"+[index]))

    })
}
