const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    let totalTotalTime = 0

    for (let i = 0; i < arr.length; i++) {
        let speedLimitList = arr[i].speedLimits
        let segmentTotalTime = 0
        let avgSpeedNumerator = 0
        let avgSpeedDenominator = 0

        for (let k = 0; k < speedLimitList.length; k++) {
            let speedLimitObj = speedLimitList[k]

            let time = speedLimitObj.distance / speedLimitObj.speedLimit

            segmentTotalTime += time

            totalTotalTime += time

            avgSpeedNumerator += speedLimitObj.distance * speedLimitObj.speedLimit

            avgSpeedDenominator += speedLimitObj.distance
        }
        result.segmentTimes.push(Math.round(segmentTotalTime))
        result.avgSpeedLimits.push(avgSpeedNumerator/avgSpeedDenominator)
    }

    result.totalTime = totalTotalTime

    return result
}


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


console.log(tripTime(stops))