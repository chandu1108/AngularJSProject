angular.module('notepadApp', [])
      .controller('NotepadController', function ($scope) {
        
        $scope.notes = JSON.parse(localStorage.getItem('notes')) || [];
        $scope.editingIndex = -1;

        $scope.addNote = function () {
          if ($scope.newNote) {
            if ($scope.editingIndex !== -1) {
              
              $scope.notes[$scope.editingIndex] = $scope.newNote;
              $scope.editingIndex = -1;
            } else {
              
              $scope.notes.push($scope.newNote);
            }
            $scope.newNote = '';
            $scope.saveToLocalStorage();
          }
        };

        $scope.deleteNote = function (index) {
          $scope.notes.splice(index, 1);
          $scope.saveToLocalStorage();
        };

        $scope.editNote = function (index) {
          $scope.newNote = $scope.notes[index];
          $scope.editingIndex = index;
        };

        $scope.saveToLocalStorage = function () {
          localStorage.setItem('notes', JSON.stringify($scope.notes));
          console.log('Notes saved!');
        };
      });