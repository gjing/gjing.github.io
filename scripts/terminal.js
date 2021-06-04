const fileSet = {
  "education_history.txt": education_history,
  "employment_history.txt": employment_history
}

$('body').terminal({
    ls: function() {
      this.echo(ls());
    },
    cat: function(filename) {
      console.log(fileSet);
      this.echo(cat(filename));
    },
    echo: function(echo) {
      this.echo(echo);
    },
    help: function() {
      this.echo(helpTxt);
    }
}, {
  greetings: header,
  completion: Object.keys(fileSet)
});

function cat(filename) {
  if (fileSet[filename]) {
    return fileSet[filename];
  } else {
    return "cat: " + filename + ": " + catError;
  }
}

function ls() {
  var list = "";
  Object.keys(fileSet).forEach(function(file) {
    list += file + " ";
  });
  return list;
}
