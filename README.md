# Extending Classes
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


#### 1. Employee Class

- Create an `Employee` class which accepts 5 arguments and sets the following properties:

  - `id` of the employee as a number
  - `firstName` of the employee as a string
  - `lastName` of the employee as as string
  - `taxId` as a number
  - `salary` as a number

- The `Employee` class should have a `generatePaySlip` method which returns a string in the format:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary
```

#### 2. Manager Class

- Create a `Manager` class which extends the `Employee` class

- The `Manager` class will need the addition of a `managedEmployees` array property

- The `Manager` class will need two methods:
  - `addManagedEmployee` to add a managed employee to the `managedEmployees` array
  - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Employee Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Employee` class exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Should have a constructor |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Should have `id` property the value of which is set by the constructor |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Should have `firstName` property the value of which is set by the constructor |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Should have `lastName` property the value of which is set by the constructor |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Should have `socialSecurityNumber` property the value of which is set by the constructor |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Should have `salary` property the value of which is set by the constructor |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Should have `generatePayslip` method |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `generatePayslip` method should return all employee information as string |

### 2. Manager Class`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | class `Manager` exists |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | should extend the `Employee` class |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | should have `managedEmployees` property |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | Should have a `addManagedEmployee` method |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `addManagedEmployee` method should add an employee to `managedEmployees` array |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | Should have method `removeManagedEmployee` |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | `removeManagedEmployee` should remove an employee from `managedEmployees` array |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Classes-Exc-2)


[//]: # (autograding info end)