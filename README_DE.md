# Erweitern von Klassen

#### 1. Mitarbeiter-Klasse

- Erstelle eine Klasse `Employee`, die 5 Argumente akzeptiert und die folgenden Eigenschaften setzt:

  - `id` des Mitarbeiters als Zahl
  - `firstName` des Mitarbeiters als String
  - `lastName` des Mitarbeiters als String
  - `taxId` als Zahl
  - `salary` als Zahl

- Die Klasse `Employee` sollte eine Methode `generatePaySlip` haben, die einen String in dem Format zurückgibt:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> muss auf Basis des Gehalts berechnet werden
```

#### 2. Manager Klasse

- Erstelle eine `Manager` Klasse, die die `Employee` Klasse erweitert

- Der Klasse `Manager` muss eine Array-Eigenschaft ´ManagedEmployees´ hinzugefügt werden.

- Die Klasse `Manager` benötigt zwei Methoden:
  - `addManagedEmployee`, um einen verwalteten Mitarbeiter zum Array `managedEmployees` hinzuzufügen
  - `removeManagedEmployee`, um einen verwalteten Mitarbeiter aus dem Array `managedEmployees` zu entfernen
