export
    function weeksToBeServed(duration: string) {
    let weeks: number = 0
    switch (duration) {

        default: {
            weeks = 0;
            console.log("User input is invalid");

        }
        // service duration 1 to 6 months
        case "scenario_0": {
            weeks = 0
            break;
        }
        // service duration 1 to 6 months
        case "scenario_1": {
            weeks = 1
            break;
        }
        // service duration 6 to 24 months
        case "scenario_2": {

            weeks = 2
            break;
        }

        // service duration 24 to 48 months
        case "scenario_3": {
            weeks = 4
            break;
        }
        // service duration 48 to 84 months
        case "scenario_4": {
            weeks = 8
            break;
        }
        // service duration 84 to 96 months
        case "scenario_5": {
            weeks = 9
            break;
        }
        // service duration 96 to 108 months
        case "scenario_6": {
            weeks = 10
            break;
        }
        // service duration 108 to 120 months
        case "scenario_7": {
            weeks = 11
            break;
        }
        // service duration more than 120 months
        case "scenario_8": {
            weeks = 12
            break;
        }

    }
    return weeks
}



export const testCases = [
    {
        //service duration less than 1 month 
        EngagementDate: new Date('2022-0-0'),
        ResignationDate: new Date('2022-1-1'),

    },
    // service duration 1 to 6 months
    {
        EngagementDate: new Date('2022-1-1'),
        ResignationDate: new Date('2022-5-31'),

    },
    // service duration 6 to 24 months
    {
        EngagementDate: new Date('2021-1-1'),
        ResignationDate: new Date('2022-9-4'),

    },
    // service duration 24 to 48 months
    {
        EngagementDate: new Date('2018-1-1'),
        ResignationDate: new Date('2021-4-4'),

    },
    // service duration 48 to 84 months
    {
        EngagementDate: new Date('2010-9-4'),
        ResignationDate: new Date('2016-9-4'),

    },
    // service duration 84 to 96 months
    {
        EngagementDate: new Date('2010-1-1'),
        ResignationDate: new Date('2018-1-1'),

    },
    // service duration 96 to 108 months
    {
        EngagementDate: new Date('2000-1-1'),
        ResignationDate: new Date('2008-12-31'),

    },
    // service duration 108 to 120 months
    {
        EngagementDate: new Date('2000-1-1'),
        ResignationDate: new Date('2009-12-31'),

    },

    // service duration more than 120 months
    {
        EngagementDate: new Date('2000-1-1'),
        ResignationDate: new Date('2012-1-1'),

    },

    // negative test cases
    {
        EngagementDate: new Date(''),
        ResignationDate: new Date(''),

    },
    {
        EngagementDate: new Date('*$72-*-*'),
        ResignationDate: new Date('*$72-*-*'),

    },
    {
        EngagementDate: new Date('-------'),
        ResignationDate: new Date('-------'),

    },


]
