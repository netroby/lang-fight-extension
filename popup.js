new Vue({
  el: '#app',
  data: {
    message: "<p>Language develop commit stats:</p>"
  },
  created: function () {
    this.getSum('Rust', 'rust-lang/rust')
    this.getSum('Python', 'python/cpython')
    this.getSum('PHP', 'php/php-src')
    this.getSum('Ruby', 'ruby/ruby')
  },
  methods: {
    getSum: function (repo_name, repo_url) {
      var vm = this;
      axios.get('https://api.github.com/repos/' + repo_url + '/stats/participation')
        .then(function (response) {
          var sum = response.data.all[51];
          console.log(sum)
          vm.message += "<p>" + repo_name + " commits in the last 7 days: " + sum + "</p>"
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})