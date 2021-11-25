const dataUsage = [
  {
    "deviceId": "AAA-AAA-AAA",
    "counters": [
      {
        "date": "2021-05-22T00:00:00Z",
        "impressionsCompleted": 10,
        "impressionsCompletedColor": 5,
        "mediaSheetsCompleted": 0,
        "duplexSheetCompleted": 2,
        "impressionsCompletedMono": 5,
        "simplexSheetCompleted": 8
      },
      {
        "date": "2021-05-23T00:00:00Z",
        "impressionsCompleted": 6,
        "impressionsCompletedColor": 4,
        "mediaSheetsCompleted": 0,
        "duplexSheetCompleted": 5,
        "impressionsCompletedMono": 2,
        "simplexSheetCompleted": 1
      }
    ]
  },
  {
    "deviceId": "BBB-BBB-BBB",
    "counters": [
      {
        "date": "2021-05-22T00:00:00Z",
        "impressionsCompleted": 10,
        "impressionsCompletedColor": 5,
        "mediaSheetsCompleted": 0,
        "duplexSheetCompleted": 2,
        "impressionsCompletedMono": 5,
        "simplexSheetCompleted": 8
      },
      {
        "date": "2021-05-23T00:00:00Z",
        "impressionsCompleted": 6,
        "impressionsCompletedColor": 4,
        "mediaSheetsCompleted": 0,
        "duplexSheetCompleted": 5,
        "impressionsCompletedMono": 2,
        "simplexSheetCompleted": 1
      }
    ]
  }
];


const calculateUsage = data => {
  console.log('-- ', data);

  const totals = {
    impressionsCompleted: 0,
    impressionsCompletedColor: 0,
    impressionsCompletedMono: 0,
    simplexSheetCompleted: 0,
    duplexSheetCompleted: 0,
  };

  data.map(printer => printer.counters.map(counter => {
    totals.impressionsCompleted += counter.impressionsCompleted || 0;
    totals.impressionsCompletedColor += counter.impressionsCompletedColor || 0;
    totals.impressionsCompletedMono += counter.impressionsCompletedMono || 0;
    totals.simplexSheetCompleted += counter.simplexSheetCompleted || 0;
    totals.duplexSheetCompleted += counter.duplexSheetCompleted || 0;
    return totals;
  }));

  return totals;

};

console.log('TOTALS:', calculateUsage(dataUsage));
