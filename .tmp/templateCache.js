angular.module('viaGruntApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/home.html',
    "<div class=\"principal\"> <h1 class=\"heading\">Welcome to CricketPremi!</h1> <div class=\"matchList\" ng-controller=\"HomePage\"> <div class=\"match\" ng-click=\"$parent.idToScoreboard(match.unique_id,match.score_arr)\" ng-repeat=\"match in ongoingMatches | orderBy:'ongoingMatches.dateTimeGMT':true\"> <span class=\"score\" style=\"flex: 1\"></span> <span class=\"score\" style=\"flex: 2\">{{match.score_arr[0]}}</span> <div class=\"matter\" style=\"flex: 6\"> <div ng-if=\"match.winner_team==undefined\" style=\"color:red\"> <li>Live</li> </div> <div ng-if=\"match.winner_team!=undefined\" style=\"color:green\"> <li>Completed</li> </div> <span class=\"clash\"> <span class=\"teams\" style=\"text-align: end\">{{match['team-1']}}&nbsp</span> <span class=\"capital\"><b>VS</b></span> <span class=\"teams\" style=\"text-align: start\">&nbsp{{match['team-2']}}</span> </span> <span>Dated: {{match.date | date}}</span> <div ng-if=\"match.winner_team==undefined && !match.matchStarted\"> {{match.toss_winner_team}} has won the toss and the {{match.type}} action will begin shortly </div> <div ng-if=\"match.winner_team==undefined && match.matchStarted\"> {{match.toss_winner_team}} has won the toss </div> <div style=\"padding: 5px;\" ng-if=\"match.winner_team!=undefined\"> {{match.winner_team}} has won the {{match.type}} match </div> </div> <span class=\"score\" style=\"flex: 2\">{{match.score_arr[1]}}</span> <span class=\"score\" style=\"flex: 1\"></span> </div> </div> <p class=\"copyright\"> <b>@copyrighted by Aditya Lath <br>Developer contact: 9877570729 <br>Developer Email: lath2411@gmail.com <br><i>contact if faced any technical glitches</i></b> </p> </div>"
  );


  $templateCache.put('views/loginOrSignUp.html',
    "<div class=\"loginOrSignUp\" ng-controller=\"MainCtrl\"> <div class=\"loginHeader\"> <button ng-click=\"login=false\" class=\"options\">SignUp</button> <b>|</b> <button ng-click=\"login=true\" class=\"options\">Login</button> </div> <div class=\"container\"> <div ng-if=\"!login\"> <form name=\"userInfo\"> Fullname: <input class=\"input\" type=\"text\" name=\"name\" ng-model=\"$parent.name\"><br> <span class=\"warn\" ng-show=\"userInfo.name.$touched && !$parent.name.includes(' ')\"> *Fullname should contain firstname as well as lastname </span><br> Username: <input class=\"input\" type=\"text\" name=\"username\" ng-model=\"$parent.username\"><br> <span class=\"warn\" ng-show=\"userInfo.username.$touched && $parent.username.includes(' ')\"> *space not allowed in username </span> <span class=\"warn\" ng-show=\"userInfo.username.$touched && $parent.username.length<5\"> *username must be atleast of length 5 </span> <span class=\"warn\" ng-show=\"userInfo.username.$touched && $parent.isUsernameAlreadyUsed()\"> *this username is already used, try using another one </span><br> Email address: <input class=\"input\" type=\"email\" name=\"email\" ng-model=\"$parent.email\"><br> <span class=\"warn\" ng-show=\"userInfo.email.$touched && userInfo.email.$invalid\"> *email is wrong </span> <span class=\"warn\" ng-show=\"userInfo.email.$touched && $parent.isEmailAlreadyUsed()\"> *this email is already used, try using another one </span><br> Password: <input class=\"input\" type=\"password\" name=\"password\" ng-model=\"$parent.password\"><br> <span class=\"warn\" ng-show=\"userInfo.password.$touched && !$parent.isPasswordValid()\"> *passord must contain a numeric, a small letter and a capital letter </span> <span class=\"warn\" ng-show=\"userInfo.password.$touched && $parent.password.length<10\"> *password must be atleast of length 10 </span><br> Gender: <input class=\"input\" type=\"radio\" name=\"gender\" value=\"Male\" ng-model=\"$parent.gender\" required>Male <input type=\"radio\" name=\"gender\" value=\"Female\" ng-model=\"$parent.gender\">Female <input type=\"radio\" name=\"gender\" value=\"prefer not to say\" ng-model=\"$parent.gender\">Prefer not to say <br><br> Date of Birth: <input class=\"input\" type=\"date\" name=\"dob\" ng-model=\"$parent.dob\"><br><br> Occupation: <select class=\"input\" ng-model=\"$parent.occ\"> <option name=\"occ\" ng-repeat=\"x in occupations | orderBy\">{{x}}</option> </select><br><br> <button class=\"input\" id=\"submit\" ng-click=\"$parent.onSubmit()\" ng-disabled=\"!$parent.name.includes(' ') || $parent.username.includes(' ') || $parent.username=='' || $parent.username.length<5 || $parent.password.length<10 || !$parent.isPasswordValid() || $parent.password=='' || $parent.gender=='' || $parent.dob=='' || $parent.occ=='' || $parent.email=='' || $parent.isEmailAlreadyUsed() || $parent.isUsernameAlreadyUsed()\"><b>Submit</b> </button> </form> </div> <div ng-if=\"login\"> Username: <input class=\"input\" type=\"text\" name=\"username\" ng-model=\"$parent.loginUsername\"><br> Password: <input class=\"input\" type=\"password\" name=\"password\" ng-model=\"$parent.loginPassword\"><br> <button class=\"input\" id=\"submit\" ng-click=\"$parent.onLogin()\" ng-disabled=\"$parent.loginUsername=='' ||  $parent.loginPassword==''\">Login</button><br><br> <span ng-show=\"!$parent.loggedIn\">Invalid credentials, try again with valid credentials</span> </div> </div> </div>"
  );


  $templateCache.put('views/playerProfile.html',
    "<div class=\"full\" ng-controller=\"PlayerProfile\" style=\"overflow-y: hidden\"> <div class=\"loginHeader\"> <div style=\"flex: 3\"> <img class=\"playerPhoto\" ng-src=\"{{response.imageURL}}\" onerror=\"this.src='../images/profile.jpg'\"> </div> <div style=\"flex: 7;padding:10px\"> <h1 style=\"text-align: center\">{{response.name}}</h1> <p>{{response.profile}}</p> <p><b>Full name: </b>{{response.fullName}}</p> <p><b>Country: </b>{{response.country}}</p> <p><b>Born: </b>{{response.born}}</p> <p><b>Current age: </b>{{response.currentAge}}</p> <p><b>Role: </b>{{response.playingRole}}</p> <p><b>Batting style: </b>{{response.battingStyle}}</p> <p><b>Bowling style: </b>{{response.bowlingStyle}}</p> <p><b>Teams played for: </b>{{response.majorTeams}}</p> </div> </div> <select class=\"inningSelector\" ng-model=\"propertyValue\"> <option name=\"stat\" ng-repeat=\"stat in property\">{{stat}}</option> </select> <div ng-if=\"propertyValue == 'Batting'\"> <table> <tr> <th>Format</th> <th>Matches</th> <th>Innings</th> <th>Runs</th> <th>Average</th> <th>Highest score</th> <th>Strike rate</th> <th>Fifties</th> <th>Centuries</th> <th>Sixes</th> <th>Not outs</th> </tr> <tr ng-if=\"response.data.batting.listA\"> <td>List A</td> <td>{{response.data.batting.listA.Mat}}</td> <td>{{response.data.batting.listA.Inns}}</td> <td>{{response.data.batting.listA.Runs}}</td> <td>{{response.data.batting.listA.Ave}}</td> <td>{{response.data.batting.listA.HS}}</td> <td>{{response.data.batting.listA.SR}}</td> <td>{{response.data.batting.listA['50']}}</td> <td>{{response.data.batting.listA['100']}}</td> <td>{{response.data.batting.listA['6s']}}</td> <td>{{response.data.batting.listA.NO}}</td> </tr> <tr ng-if=\"response.data.batting.firstClass\"> <td>First class</td> <td>{{response.data.batting.firstClass.Mat}}</td> <td>{{response.data.batting.firstClass.Inns}}</td> <td>{{response.data.batting.firstClass.Runs}}</td> <td>{{response.data.batting.firstClass.Ave}}</td> <td>{{response.data.batting.firstClass.HS}}</td> <td>{{response.data.batting.firstClass.SR}}</td> <td>{{response.data.batting.firstClass['50']}}</td> <td>{{response.data.batting.firstClass['100']}}</td> <td>{{response.data.batting.firstClass['6s']}}</td> <td>{{response.data.batting.firstClass.NO}}</td> </tr> <tr ng-if=\"response.data.batting.T20Is\"> <td>T20Is</td> <td>{{response.data.batting.T20Is.Mat}}</td> <td>{{response.data.batting.T20Is.Inns}}</td> <td>{{response.data.batting.T20Is.Runs}}</td> <td>{{response.data.batting.T20Is.Ave}}</td> <td>{{response.data.batting.T20Is.HS}}</td> <td>{{response.data.batting.T20Is.SR}}</td> <td>{{response.data.batting.T20Is['50']}}</td> <td>{{response.data.batting.T20Is['100']}}</td> <td>{{response.data.batting.T20Is['6s']}}</td> <td>{{response.data.batting.T20Is.NO}}</td> </tr> <tr ng-if=\"response.data.batting.ODIs\"> <td>ODIs</td> <td>{{response.data.batting.ODIs.Mat}}</td> <td>{{response.data.batting.ODIs.Inns}}</td> <td>{{response.data.batting.ODIs.Runs}}</td> <td>{{response.data.batting.ODIs.Ave}}</td> <td>{{response.data.batting.ODIs.HS}}</td> <td>{{response.data.batting.ODIs.SR}}</td> <td>{{response.data.batting.ODIs['50']}}</td> <td>{{response.data.batting.ODIs['100']}}</td> <td>{{response.data.batting.ODIs['6s']}}</td> <td>{{response.data.batting.ODIs.NO}}</td> </tr> <tr ng-if=\"response.data.batting.tests\"> <td>Tests</td> <td>{{response.data.batting.tests.Mat}}</td> <td>{{response.data.batting.tests.Inns}}</td> <td>{{response.data.batting.tests.Runs}}</td> <td>{{response.data.batting.tests.Ave}}</td> <td>{{response.data.batting.tests.HS}}</td> <td>{{response.data.batting.tests.SR}}</td> <td>{{response.data.batting.tests['50']}}</td> <td>{{response.data.batting.tests['100']}}</td> <td>{{response.data.batting.tests['6s']}}</td> <td>{{response.data.batting.tests.NO}}</td> </tr> </table> </div> <div ng-if=\"propertyValue == 'Bowling'\"> <table> <tr> <th>Format</th> <th>Matches</th> <th>Innings</th> <th>Wickets</th> <th>Average</th> <th>Economy</th> <th>BBI</th> <th>BBM</th> <th>5W</th> <th>10W</th> <th>Strike rate</th> </tr> <tr> <td>List A</td> <td>{{response.data.bowling.listA.Mat}}</td> <td>{{response.data.bowling.listA.Inns}}</td> <td>{{response.data.bowling.listA.Wkts}}</td> <td>{{response.data.bowling.listA.Ave}}</td> <td>{{response.data.bowling.listA.Econ}}</td> <td>{{response.data.bowling.listA.BBI}}</td> <td>{{response.data.bowling.listA.BBM}}</td> <td>{{response.data.bowling.listA['5w']}}</td> <td>{{response.data.bowling.listA['10']}}</td> <td>{{response.data.bowling.listA.SR}}</td> </tr> <tr> <td>First class</td> <td>{{response.data.bowling.firstClass.Mat}}</td> <td>{{response.data.bowling.firstClass.Inns}}</td> <td>{{response.data.bowling.firstClass.Wkts}}</td> <td>{{response.data.bowling.firstClass.Ave}}</td> <td>{{response.data.bowling.firstClass.Econ}}</td> <td>{{response.data.bowling.firstClass.BBI}}</td> <td>{{response.data.bowling.firstClass.BBM}}</td> <td>{{response.data.bowling.firstClass['5w']}}</td> <td>{{response.data.bowling.firstClass['10']}}</td> <td>{{response.data.bowling.firstClass.SR}}</td> </tr> <tr> <td>T20Is</td> <td>{{response.data.bowling.T20Is.Mat}}</td> <td>{{response.data.bowling.T20Is.Inns}}</td> <td>{{response.data.bowling.T20Is.Wkts}}</td> <td>{{response.data.bowling.T20Is.Ave}}</td> <td>{{response.data.bowling.T20Is.Econ}}</td> <td>{{response.data.bowling.T20Is.BBI}}</td> <td>{{response.data.bowling.T20Is.BBM}}</td> <td>{{response.data.bowling.T20Is['5w']}}</td> <td>{{response.data.bowling.T20Is['10']}}</td> <td>{{response.data.bowling.T20Is.SR}}</td> </tr> <tr> <td>ODIs</td> <td>{{response.data.bowling.ODIs.Mat}}</td> <td>{{response.data.bowling.ODIs.Inns}}</td> <td>{{response.data.bowling.ODIs.Wkts}}</td> <td>{{response.data.bowling.ODIs.Ave}}</td> <td>{{response.data.bowling.ODIs.Econ}}</td> <td>{{response.data.bowling.ODIs.BBI}}</td> <td>{{response.data.bowling.ODIs.BBM}}</td> <td>{{response.data.bowling.ODIs['5w']}}</td> <td>{{response.data.bowling.ODIs['10']}}</td> <td>{{response.data.bowling.ODIs.SR}}</td> </tr> <tr> <td>Tests</td> <td>{{response.data.bowling.tests.Mat}}</td> <td>{{response.data.bowling.tests.Inns}}</td> <td>{{response.data.bowling.tests.Wkts}}</td> <td>{{response.data.bowling.tests.Ave}}</td> <td>{{response.data.bowling.tests.Econ}}</td> <td>{{response.data.bowling.tests.BBI}}</td> <td>{{response.data.bowling.tests.BBM}}</td> <td>{{response.data.bowling.tests['5w']}}</td> <td>{{response.data.bowling.tests['10']}}</td> <td>{{response.data.bowling.tests.SR}}</td> </tr> </table> </div> <div ng-if=\"propertyValue == 'Fielding'\"> <table style=\"width: 50%\"> <tr> <th>Format</th> <th>Matches</th> <th>Catches</th> <th>Stumpings</th> </tr> <tr> <td>List A</td> <td>{{response.data.batting.listA.Mat}}</td> <td>{{response.data.batting.listA.Ct}}</td> <td>{{response.data.batting.listA.St}}</td> </tr> <tr> <td>First class</td> <td>{{response.data.batting.firstClass.Mat}}</td> <td>{{response.data.batting.firstClass.Ct}}</td> <td>{{response.data.batting.firstClass.St}}</td> </tr> <tr> <td>T20Is</td> <td>{{response.data.batting.T20Is.Mat}}</td> <td>{{response.data.batting.T20Is.Ct}}</td> <td>{{response.data.batting.T20Is.St}}</td> </tr> <tr> <td>ODIs</td> <td>{{response.data.batting.ODIs.Mat}}</td> <td>{{response.data.batting.ODIs.Ct}}</td> <td>{{response.data.batting.ODIs.St}}</td> </tr> <tr> <td>Tests</td> <td>{{response.data.batting.tests.Mat}}</td> <td>{{response.data.batting.tests.Ct}}</td> <td>{{response.data.batting.tests.St}}</td> </tr> </table> </div> </div>"
  );


  $templateCache.put('views/scorecard.html',
    "<div class=\"full\" ng-controller=\"ScoreCard\"> <div class=\"loginHeader\"> <button ng-click=\"showScorecard=true\" class=\"options\">Scorecard</button> <b>|</b> <button ng-click=\"showScorecard=false\" class=\"options\">Teams</button> </div> <div class=\"container\" style=\"text-align: start\"> <div ng-if=\"!showScorecard\"> <div class=\"bothTeams\"> <div> <div class=\"team\" style=\"background-color: rgb(6, 141, 6)\">{{response.team[0].name}}</div> <div class=\"team\" ng-click=\"$parent.playerProfile(player.pid)\" ng-repeat=\"player in response.team[0].players\"> <img class=\"photoInTeams\" ng-src=\"https://www.cricapi.com/playerpic/{{player.pid}}.jpg\" onerror=\"this.src='../images/profile.jpg'\"> &nbsp&nbsp&nbsp {{player.name}} </div> </div> <div> <div class=\"team\" style=\"background-color: rgb(6, 141, 6)\">{{response.team[1].name}}</div> <div class=\"team\" ng-click=\"$parent.playerProfile(player.pid)\" ng-repeat=\"player in response.team[1].players\"> <img class=\"photoInTeams\" ng-src=\"https://www.cricapi.com/playerpic/{{player.pid}}.jpg\" onerror=\"this.src='../images/profile.jpg'\"> &nbsp&nbsp&nbsp {{player.name}} </div> </div> </div> </div> <div ng-if=\"showScorecard\"> <select class=\"inningSelector\" ng-model=\"$parent.inning\" ng-change=\"changeInning()\"> <option name=\"inn\" ng-repeat=\"inn in inning_arr | limitTo:$parent.response.batting.length\">{{inn}}</option> </select> <div style=\"margin: 10px\" ng-if=\"response.toss_winner_team\"> Toss: {{response.toss_winner_team}} </div> <div style=\"margin: 10px\" ng-if=\"response.winner_team\"> Winner: {{response.winner_team}} </div> <div style=\"margin: 10px\" ng-if=\"response['man-of-the-match']\"> Man of the match: {{response['man-of-the-match'].name}} </div><br> <div style=\"margin: 10px\" ng-repeat=\"arr in score_arr\"> {{arr}} </div> <div class=\"scoreDetails\"> <h3>{{$parent.response.batting[$parent.inningNumber].title}}</h3> <div class=\"battingScore\" style=\"background-color: rgb(66, 228, 66)\"> <span style=\"flex:1\"></span> <span style=\"flex:6\">Batsman</span> <span style=\"flex:2\">Runs</span> <span style=\"flex:2\">Balls</span> <span style=\"flex:1\">4s</span> <span style=\"flex:1\">6s</span> <span style=\"flex:2\">SR</span> <span style=\"flex:2\">Minutes spent</span> </div> <div class=\"battingScore\" ng-repeat=\"piliyar in response.batting[inningNumber].scores\" ng-click=\"$parent.playerProfile(piliyar.pid)\"> <img ng-src=\"https://www.cricapi.com/playerpic/{{piliyar.pid}}.jpg\" onerror=\"this.src='../images/download.png'\" height=\"40px\" width=\"32px\" style=\"flex:1\"> <span style=\"flex:6\">{{piliyar.batsman}}</span> <span style=\"flex:2\">{{piliyar.R}}</span> <span style=\"flex:2\">{{piliyar.B}}</span> <span style=\"flex:1\">{{piliyar['4s']}}</span> <span style=\"flex:1\">{{piliyar['6s']}}</span> <span style=\"flex:2\">{{piliyar.SR}}</span> <span style=\"flex:2\">{{piliyar.M}}</span> </div> </div> <div class=\"scoreDetails\"> <h3>{{$parent.response.bowling[$parent.inningNumber].title}}</h3> <div class=\"battingScore\" style=\"background-color: rgb(66, 228, 66)\"> <span style=\"flex:1\"></span> <span style=\"flex:6\">Bowler</span> <span style=\"flex:2\">Overs</span> <span style=\"flex:2\">Runs</span> <span style=\"flex:1\">Wickets</span> <span style=\"flex:1\">Dots</span> <span style=\"flex:2\">Economy</span> <span style=\"flex:2\">Extras</span> </div> <div class=\"battingScore\" ng-repeat=\"piliyar in response.bowling[inningNumber].scores\" ng-click=\"$parent.playerProfile(piliyar.pid)\"> <img ng-src=\"https://www.cricapi.com/playerpic/{{piliyar.pid}}.jpg\" onerror=\"this.src='../images/download.png'\" height=\"40px\" width=\"32px\" style=\"flex:1\"> <span style=\"flex:6\">{{piliyar.bowler}}</span> <span style=\"flex:2\">{{piliyar.O}}</span> <span style=\"flex:2\">{{piliyar.R}}</span> <span style=\"flex:1\">{{piliyar.W}}</span> <span style=\"flex:1\">{{piliyar['0s']}}</span> <span style=\"flex:2\">{{piliyar.Econ}}</span> <span style=\"flex:2\">{{+piliyar.WD + +piliyar.NB}} </span></div> </div> </div> </div> </div>"
  );

}]);
