var Commiter = function (title) {
  this.title = title;
  this.completed = ko.observable(false);
  this.className = ko.computed(function () {
    return this.completed() ? 'completed' : null;
  }, this);
};

var Commits = function () {
  this.commits = ko.observableArray([]);
  this.commitToAdd = ko.observable('');
  this.addCommit = function () {
    this.commits.push(new Commiter(this.commitToAdd()));
    this.commitToAdd('');
  };
};

ko.applyBindings(new Commits);
