// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html


function calculaterandomnumber () {

  const ageNumber = parseInt(document.getElementById('usernumber').value)
  const day= document.getElementById('option-friday').checked
  const day1= document.getElementById('option-saturday').checked
  
  if (((day || day1)||(ageNumber > 6 || ageNumber < 18 ))  == true )  {
    document.getElementById('answer1').innerHTML =
      "<p>You can get a discount for the playplace</p>" 
  }
  else {
    document.getElementById('answer1').innerHTML =
      "<p>The Normal Price It Is</p>" 
  }

}
