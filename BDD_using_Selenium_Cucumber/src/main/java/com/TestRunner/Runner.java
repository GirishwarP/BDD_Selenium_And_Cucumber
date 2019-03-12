package com.TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features= "Features", 
				 glue= {"com.StepDefinitions"},
				 plugin= {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json","junit:target/cucumber-xml-report.xml"})//,
				 //monochrome=true,//to display console output in proper readable format
				 //strict=true,//it will check for any undefined step definition:: mapping of steps with feature file scenario
				 //dryRun=false)//to check the mapping is proper between feature file and step definition file)


public class Runner {

	
}
