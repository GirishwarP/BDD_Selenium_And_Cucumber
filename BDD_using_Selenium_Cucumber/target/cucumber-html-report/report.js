$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AnagramChecker.feature");
formatter.feature({
  "line": 1,
  "name": "String anagram checking",
  "description": "\t\t As user I want to check that, both given Strings are anagram or not",
  "id": "string-anagram-checking",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "check whether the Silent and Listen are anagrams or not",
  "description": "",
  "id": "string-anagram-checking;check-whether-the-silent-and-listen-are-anagrams-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i give Silent and Listen to anagram checker",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result should be true",
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 104248414,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Silent_and_Listen_to_anagram_checker()"
});
formatter.result({
  "duration": 134388,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 1086336,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "check whether the Girish and Patil are anagrams or not",
  "description": "",
  "id": "string-anagram-checking;check-whether-the-girish-and-patil-are-anagrams-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "i give Girish and Patil to anagram checker",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the result should be false",
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 21490,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Girish_and_Patil_to_anagram_checker()"
});
formatter.result({
  "duration": 34639,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_false()"
});
formatter.result({
  "duration": 17640,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "check whether the Dirty Room and Dormitory are anagrams or not",
  "description": "",
  "id": "string-anagram-checking;check-whether-the-dirty-room-and-dormitory-are-anagrams-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "i give Dirty Room and Dormitory to anagram checker",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the result should be true",
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 22452,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Dirty_Room_and_Dormitory_to_anagram_checker()"
});
formatter.result({
  "duration": 61903,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 15075,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Check Anagram functionality using scenario outline",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i give \"\u003cString1\u003e\" and \"\u003cString2\u003e\" to anagram checker",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the result should be \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "String1",
        "String2",
        "Result"
      ],
      "line": 24,
      "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;1"
    },
    {
      "cells": [
        "Act",
        "Cat",
        "true"
      ],
      "line": 25,
      "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;2"
    },
    {
      "cells": [
        "Girish",
        "Yash",
        "false"
      ],
      "line": 26,
      "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;3"
    },
    {
      "cells": [
        "God",
        "Dog",
        "true"
      ],
      "line": 27,
      "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;4"
    },
    {
      "cells": [
        "sink",
        "skin",
        "true"
      ],
      "line": 28,
      "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Check Anagram functionality using scenario outline",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i give \"Act\" and \"Cat\" to anagram checker",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the result should be \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 22451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Act",
      "offset": 8
    },
    {
      "val": "Cat",
      "offset": 18
    }
  ],
  "location": "AnagramCheckerSteps.i_give_String1_and_String2_to_anagram_checker(String,String)"
});
formatter.result({
  "duration": 2274986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 22
    }
  ],
  "location": "AnagramCheckerSteps.the_result_should_be(boolean)"
});
formatter.result({
  "duration": 2570704,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Check Anagram functionality using scenario outline",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i give \"Girish\" and \"Yash\" to anagram checker",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the result should be \"false\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 24055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Girish",
      "offset": 8
    },
    {
      "val": "Yash",
      "offset": 21
    }
  ],
  "location": "AnagramCheckerSteps.i_give_String1_and_String2_to_anagram_checker(String,String)"
});
formatter.result({
  "duration": 108409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 22
    }
  ],
  "location": "AnagramCheckerSteps.the_result_should_be(boolean)"
});
formatter.result({
  "duration": 43941,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Check Anagram functionality using scenario outline",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i give \"God\" and \"Dog\" to anagram checker",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the result should be \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 30150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "God",
      "offset": 8
    },
    {
      "val": "Dog",
      "offset": 18
    }
  ],
  "location": "AnagramCheckerSteps.i_give_String1_and_String2_to_anagram_checker(String,String)"
});
formatter.result({
  "duration": 376545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 22
    }
  ],
  "location": "AnagramCheckerSteps.the_result_should_be(boolean)"
});
formatter.result({
  "duration": 62543,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Check Anagram functionality using scenario outline",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-scenario-outline;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i give \"sink\" and \"skin\" to anagram checker",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the result should be \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 31112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sink",
      "offset": 8
    },
    {
      "val": "skin",
      "offset": 19
    }
  ],
  "location": "AnagramCheckerSteps.i_give_String1_and_String2_to_anagram_checker(String,String)"
});
formatter.result({
  "duration": 90128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 22
    }
  ],
  "location": "AnagramCheckerSteps.the_result_should_be(boolean)"
});
formatter.result({
  "duration": 41695,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Check Anagram functionality using Data Table without header with valid data",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-data-table-without-header-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "i give valid data to anagram checker",
  "rows": [
    {
      "cells": [
        "Act",
        "Cat"
      ],
      "line": 33
    },
    {
      "cells": [
        "God",
        "Dog"
      ],
      "line": 34
    },
    {
      "cells": [
        "sink",
        "skin"
      ],
      "line": 35
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the result should be true",
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_valid_data_to_anagram_checker(DataTable)"
});
formatter.result({
  "duration": 1202121,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 17320,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Check Anagram functionality using Data Table without header with invalid data",
  "description": "",
  "id": "string-anagram-checking;check-anagram-functionality-using-data-table-without-header-with-invalid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I have anagram checker",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "i give invalid data to anagram checker",
  "rows": [
    {
      "cells": [
        "Girish",
        "Patil"
      ],
      "line": 41
    },
    {
      "cells": [
        "Nishant",
        "Narwade"
      ],
      "line": 42
    },
    {
      "cells": [
        "Sudam",
        "Jadhav"
      ],
      "line": 43
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the result should be false",
  "keyword": "Then "
});
formatter.match({
  "location": "AnagramCheckerSteps.i_have_anagram_checker()"
});
formatter.result({
  "duration": 27263,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_invalid_data_to_anagram_checker(DataTable)"
});
formatter.result({
  "duration": 64789,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_false()"
});
formatter.result({
  "duration": 19565,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Amazon Login Test scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Enter the URL for Amazon",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter username",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.enter_the_URL_for_Amazon()"
});
formatter.result({
  "duration": 39366904,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\ChromeDriver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.StepDefinitions.SignInSteps.enter_the_URL_for_Amazon(SignInSteps.java:24)\r\n\tat ✽.Given Enter the URL for Amazon(SignIn.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.click_on_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.enter_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.user_should_be_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
});