'use strict';

class DataFakeService{

  async getDataModel(){
    const data = [
      {
        title: 'Revenue',
        total: '200.000€',
        smartphone: '80.000 €',
        perCentSmartphone: '40%',
        tablet: '120.000 €',
        perCentTablet: '60%',
        dataTable: {a:80000, b:120000},
        colors: ["#3b6b09", "#8ed43d"],
      }
      ,
      {
        title: 'Impresions',
        total: '50.000.000',
        smartphone: '30.000.000',
        perCentSmartphone: '60%',
        tablet: '20.000.000',
        perCentTablet: '40%',
        dataTable: {a:30000000, b:20000000},
        colors: ["#2d546a", "#79c6e1"],

      }
      ,
      {
        title: 'Visits',
        total: '600.000.000',
        smartphone: '120.000.000',
        perCentSmartphone: '20%',
        tablet: '480.000.000',
        perCentTablet: '80%',
        dataTable: {a:120000000, b:480000000},
        colors: ["#c85e1e", "#f8c323"],

      }
    ]
    return data;
  }
}

const dataServiceInstance = new DataFakeService();