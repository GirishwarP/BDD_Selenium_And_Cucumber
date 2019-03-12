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
  "duration": 690910976,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Silent_and_Listen_to_anagram_checker()"
});
formatter.result({
  "duration": 915180,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 3763376,
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
  "duration": 59541,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Girish_and_Patil_to_anagram_checker()"
});
formatter.result({
  "duration": 121647,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_false()"
});
formatter.result({
  "duration": 104709,
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
  "duration": 80072,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_Dirty_Room_and_Dormitory_to_anagram_checker()"
});
formatter.result({
  "duration": 188887,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 63647,
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
  "duration": 75966,
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
  "duration": 9909914,
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
  "duration": 2304118,
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
  "duration": 107275,
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
  "duration": 188374,
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
  "duration": 131400,
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
  "duration": 72886,
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
  "duration": 255100,
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
  "duration": 163223,
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
  "duration": 79046,
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
  "duration": 760169,
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
  "duration": 123700,
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
  "duration": 122161,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_valid_data_to_anagram_checker(DataTable)"
});
formatter.result({
  "duration": 2673166,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_true()"
});
formatter.result({
  "duration": 59540,
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
  "duration": 104196,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.i_give_invalid_data_to_anagram_checker(DataTable)"
});
formatter.result({
  "duration": 266906,
  "status": "passed"
});
formatter.match({
  "location": "AnagramCheckerSteps.the_result_should_be_false()"
});
formatter.result({
  "duration": 53894,
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
  "duration": 44725392159,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.click_on_SignIn_button()"
});
formatter.result({
  "duration": 5240224181,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.enter_username()"
});
formatter.result({
  "duration": 2799707532,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.enter_Password()"
});
formatter.result({
  "duration": 527359668,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.click_on_Login_button()"
});
formatter.result({
  "duration": 7888383478,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_should_be_on_Home_Page()"
});
formatter.result({
  "duration": 2114135704,
  "status": "passed"
});
});