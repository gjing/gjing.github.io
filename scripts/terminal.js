const fileSet = {
  "education_history.txt": education_history,
  "employment_history.txt": employment_history
}

this.addEventListener('keypress', function(e){
    if (e.key === ','){
        // get old value
        var start = e.target.selectionStart;
        var end = e.target.selectionEnd;
        var oldValue = e.target.value;

        // replace point and change input value
        var newValue = oldValue.slice(0, start) + '.' + oldValue.slice(end)
        e.target.value = newValue;

        // replace cursor
        e.target.selectionStart = e.target.selectionEnd = start + 1;
        e.preventDefault();
    }
})

$('body').terminal({
    ls: function() {
      this.echo(lsTxt);
    },
    cat: function(filename) {
      console.log(fileSet);
      this.echo(cat(filename));
    },
    echo: function(echo) {
      this.echo(echo);
    },
    function (command, term)
    {
        // Command handlers
    }
}, {
  greetings: header
});

function cat(filename) {
  if (fileSet[filename]) {
    return fileSet[filename];
  } else {
    return "cat: " + filename + ": " + cat_error;
  }
}
