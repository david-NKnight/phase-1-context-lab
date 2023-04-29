/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(function(array) {
      return createEmployeeRecord(array);
    });
  }

  function createTimeInEvent(dateTimeStr) {
    const timeInEvent = {
      type: "TimeIn",
      date: dateTimeStr.split(" ")[0],
      hour: parseInt(dateTimeStr.split(" ")[1])
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  }

  function createTimeOutEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const hour = parseInt(time);
    this.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour,
    });
    return this;
  }

  function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }

  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const payRate = this.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  }

  let sTimeData = [
    ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
    ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
  ]
  let rTimeData = [
    ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
    ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 30 ===> 70 total ||=> 770
  ]
  sTimeData.forEach(function (d) {
    let [dIn, dOut] = d
    createTimeInEvent.call(sRecord, dIn)
    createTimeOutEvent.call(sRecord, dOut)
  })
  rTimeData.forEach(function (d, i) {
    let [dIn, dOut] = d
    createTimeInEvent.call(rRecord, dIn)
    createTimeOutEvent.call(rRecord, dOut)
  })
  let grandTotalOwed = [sRecord, rRecord].reduce((m, e) => m + aggregateAllWages(e), 0)
  expect(grandTotalOwed).to.equal(770)

  function createEmployeeRecords(csvData) {
    return csvData.map(row => ({
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3]
    }))
  }
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
  }
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + employee.payrollExpense(), 0)
  }

  function calculatePayroll(employeeRecords) {
    const totalPayrollExpense = employeeRecords.reduce((acc, employee) => {
      return acc + employee.payrollExpense();
    }, 0);
    return totalPayrollExpense;
  }
   
  function createEmployeeRecords(csvData) {
    return csvData.map(row => ({
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
    }))
  }

  const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]
  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
   ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
   ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
   ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
   ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
   ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
]

const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
   ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
   ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
   ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
   ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
   ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
]

function aggregateAllWages(employee) {
  return allWagesFor.call(employee);
}