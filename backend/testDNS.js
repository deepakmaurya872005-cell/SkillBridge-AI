const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.skillbridgeai.obivtq8.mongodb.net", (err, addresses) => {
    if (err) {
        console.log("DNS ERROR:", err);
    } else {
        console.log("DNS SUCCESS:", addresses);
    }
});