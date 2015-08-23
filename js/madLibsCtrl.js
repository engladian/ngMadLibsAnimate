var app = angular.module('appMadLibs', ['ngAnimate']);

app.controller('madLibsCtrl', function ($scope) {
    function ResetAllCSS() {
        var textbox1CSS = ['form-control','textbox1'];
        var textbox2CSS = ['form-control','textbox2'];
        var textbox3CSS = ['form-control','textbox3'];

        $scope.nameClassCSS = textbox2CSS;
        $scope.jobClassCSS = textbox1CSS;
        $scope.tedTaskClassCSS = textbox3CSS;
        $scope.dirtyTaskClassCSS = textbox1CSS;
        $scope.celebClassCSS = textbox1CSS;
        $scope.uselessSkillClassCSS = textbox2CSS;
        $scope.obCelebClassCSS = textbox3CSS;
        $scope.hugeNoClassCSS = textbox2CSS;
        $scope.adjectiveClassCSS = textbox1CSS;
    }

    function InitialiseScopeValues() {
        $scope.yourName = '';
        $scope.jobTitle = '';
        $scope.tediousTask = '';
        $scope.dirtyTask = '';
        $scope.celeb = '';
        $scope.uselessSkill = '';
        $scope.obnoxiousCeleb = '';
        $scope.hugeNumber = '';
        $scope.adjective = '';
        $scope.showStoryText = false;
    }

    $scope.StartOver = function() {
        InitialiseScopeValues();
        ResetAllCSS();
    }

    InitialiseScopeValues();
    ResetAllCSS();

    $scope.ShowStory = function () {
        ResetAllCSS();
        $scope.showStoryText = $scope.madLibsForm.$valid;

        if (!$scope.showStoryText) {
            window.alert('Please enter ALL values.');
        }

        if ($scope.madLibsForm.inputname.$invalid) {
            $scope.nameClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputjobtitle.$error.required) {
            $scope.jobClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputtedtask.$error.required) {
            $scope.tedTaskClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputdirtytask.$error.required) {
            $scope.dirtyTaskClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputceleb.$error.required) {
            $scope.celebClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputuselessskill.$error.required) {
            $scope.uselessSkillClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputobceleb.$error.required) {
            $scope.obCelebClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputhugenumber.$error.required) {
            $scope.hugeNoClassCSS.push('textboxerror');
        }

        if ($scope.madLibsForm.inputadjective.$error.required) {
            $scope.adjectiveClassCSS.push('textboxerror');
        }
    }
});