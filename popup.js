new Vue({
  el: '#app',
  data: {
    message: "<p>Language develop commit stats:</p>"
  },
  created: function () {
    this.getSum('Rust', 'rust-lang/rust')
    this.getSum('Python', 'python/cpython')
    this.getSum('PHP', 'php/php-src')
    this.getSum('Golang', 'golang/go')
    this.getSum('Ruby', 'ruby/ruby')
    this.getSum('Swift', 'apple/swift')
    this.getSum('Scala', 'scala/scala')
    this.getSum('Clojure', 'clojure/clojure')
    this.getSum('Kotlin', 'JetBrains/kotlin')
  },
  methods: {
    getSum: function (repo_name, repo_url) {
      var vm = this;
      axios.get('https://api.github.com/repos/' + repo_url + '/stats/commit_activity')
        .then(function (response) {
          var data = response.data.pop() 
          var sum = data.total
          console.log(sum)
          vm.message += "<p><a href=\"https://github.com/" + repo_url + "\">" + repo_name + "</a> commits in this week: " + sum + "</p>"
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})