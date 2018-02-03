// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
//  or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.


// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function


// 2. Skill Code =======================================================================================================


var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

const languageStrings = {
    'en-US': {
        translation: {
            SKILL_NAME: 'Coin Market Price',
            WELCOME_MESSAGE: 'Welcome to Coin Market Price, ask me about any crypto prices you would like to know',
            GET_PRICE_MESSAGE_1: "The price of ",
            GET_PRICE_MESSAGE_2: "dollars",
            HELP_MESSAGE: 'You can ask for a coin price, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

var indexes = {
    'bitcoin': 'BTC',
    'ethereum': 'ETH',
    'ripple':'XRP',
    'bitcoin Cash':'BCH',
    'cardano':'ADA',
    'litecoin':'LTC',
    'nem':'XEM',
    'stellar':'XLM',
    'stellar lumens':'XLM',
    'lumens':'XLM',
    'monero':'XMR',
    'tron':'TRX',
    'bitcoin gold':'BTG',
    'ethereum classic':'ETC',
    'icon':'ICX',
    'lisk':'LSK',
    'raiblocks':'XRB',
    'omisego':'OMG',
    'binance coin':'BNB',
    'binance':'BNB',
    'zcash':'ZEC',
    'ardor':'ARDR',
    'verge':'XVG',
    'stratis':'STRAT',
    'siacoin':'SC',
    'sia':'SC',
    'bytecoin':'BCN',
    'bitconnect':'BCC',
    'populous':'PPT',
    'vechain':'VEN',
    'status':'SNT',
    'tether':'USDT',
    'steemit':'STEEM',
    'bitshares':'BTS',
    'dogecoin':'DOGE',
    'kucoin':'KCS',
    'kucoin shares':'KCS',
    'augur':'REP',
    'smartcash':'SMART',
    'ox':'ZRX',
    'digibyte':'DGB',
    'dragonchain':'DRGN',
    'dragon':'DRGN',
    'dentacoin':'DCN',
    'loopring':'LRC',
    'cash':'QASH',
    'komodo':'KMD',
    'veritaseum':'VERI',
    'electroneum':'ETN',
    'h-share':'HSR',
    'hshare':'HSR',
    'golem':'GNT',
    'decred':'DCR',
    'basic attention token':'BAT',
    'walton':'WTC',
    'byteball bytes':'GBYTE',
    'byteball':'GBYTE',
    'zclassic':'ZCL',
    'bytom':'BTM',
    'factom':'FCT',
    'kyber network':'KNC',
    'funfair':'FUN',
    'reddcoin':'RDD',
    'gxshares':'GXS',
    'power ledger':'POWR',
    'power':'POWR',
    'mediblock':'MED',
    'aeternity':'AE',
    'request network':'REQ',
    'request':'REQ',
    'rchain':'RHOC',
    'syscoin':'SYS',
    'experience points':'XP',
    'enigma':'ENG',
    'nexus':'NXS',
    'monacoin':'MONA',
    'maidsafecoin':'MAID',
    'maidsafe':'MAID',
    'digixdow':'DGD',
    'digidow':'DGD',
    'substratum':'SUB',
    'aelf':'ELF',
    'nebulas':'NAS',
    'tenX':'PAY',
    'bancor':'BNT',
    'gamecredits':'GAME',
    'iconomi':'ICN',
    'gnosis':'GNO',
    'nosis':'GNO',
    'zcoin':'XZC',
    'cobinhood':'COB',
    'particle':'PART',
    'neblio':'NEBL',
    'emercoin':'EMC',
    'chainLink':'LINK',
    'civic':'CVC',
    'bitcoin dark':'BTCD',
    'santiment':'SAN',
    'santiment network':'SAN',
    'pack coin':'PAC',
    'raiden':'RDN',
    'raiden network':'RDN',
    'neblio':'NEBL',
    'x play':'XPA',
    'quant stamp':'QSP',
    'storm':'STORM',
    'pillar':'PLR',
    'i exec':'RLC',
    'i exec RLC':'RLC',
    'sky coin':'SKY',
    'cryptonex':'CNX',
    'storj':'STORJ',
    'block v':'VEE',
    'nav coin':'NAV',
    'poet':'POE',
    'vert coin':'VTC',
    'app coins':'APPC',
    'block net':'BLOCK',
    'bridge coin':'BCO',
    'bridge':'BCO',
    'dew':'DEW',
    'red pulse':'RPX',
    'engine coin':'ENJ',
    'engine':'ENJ',
    'edgeless':'EDG',
    'paypie':'PPP',
    'monaco':'MCO',
    'ethlend':'LEND',
    'vibe':'VIBE',
    'revain':'R',
    'time new bank':'TNB',
    'singular d t v':'SNGLS',
    'singles':'SNGLS',
    'aragon':'ANT',
    'ubiq':'UBQ',
    'sirin labs':'SRN',
    'sirin':'SRN',
    'deep brain chain':'DBC',
    'extra bytes':'XBY',
    'a chain':'ACT',
    'simple token':'OST',
    'simple':'OST',
    'peer coin':'PPC',
    'peer':'PPC',
    'air swap':'AST',
    'bit bay':'BAY',
    'ripio credit network':'RCN',
    'ripio':'RCN',
    'dynamic trading rights':'DTR',
    'dynamic':'DTR',
    'spank chain':'SPANK',
    'sonem':'SNM',
    'einsteinium':'EMC2',
    'centra':'CTR',
    'atm chain':'ATM',
    'wabuy':'WABI',
    'wabie':'WABI',
    'adex':'ADX',
    'gulden':'NLG',
    'library credits':'LBC',
    'l b r y credits':'LBC',
    'streamer data coin':'DATA',
    'streamer':'DATA',
    'cyber miles':'CMT',
    'quantum resistant ledger':'QRL',
    'supernet':'UNITY',
    'super net':'UNITY',
    'unicoin gold':'UKG',
    'unicoin':'UKG',
    'zencash':'ZEN',
    'naga':'NAGA',
    'metaverse e t p':'ETP',
    'metaverse':'ETP',
    'decentraland':'MANA',
    'triggers':'TRIG',
    'trigger':'TRIG',
    'modum':'MOD',
    'cindicator':'CND',
    'viacoin':'VIA',
    'burst':'BURST',
    'safe exchange coin':'SAFEX',
    'safe exchange':'SAFEX',
    'district o x':'DNT',
    'first blood':'1ST',
    'wings':'WINGS',
    'wager':'WGR',
    'melon':'MLN',
    'nuls':'NULS',
    'lamden':'TAU',
    'ambrosus':'AMB',
    'hemp coin':'THC',
    'u trust':'UTK',
    'hive':'HVN',
    'ether party':'FUEL',
    'i o t chain':'ITC',
    'voxels':'VOX',
    'agoras token':'AGRS',
    'agoras':'AGRS',
    'rise':'RISE',
    'mobile go':'MGO',
    'coss':'COSS',
    'metal':'MTL',
    'bread':'BRD',
    'eidoo':'EDO',
    'ash':'XAS',
    'cofound it':'CFI',
    'cofound':'CFI',
    'oyster':'PRL',
    'cloak coin':'CLOAK',
    'coin dash':'CDT',
    'decent':'DCT',
    'gifto':'GTO',
    'i o coin':'IOC',
    'aeon':'AEON',
    'i x ledger':'IXT',
    'tierion':'TNT',
    'digital note':'XDN',
    'bit core':'BTX'
    
}

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask','Welcome to coin market price. You can ask for any cryptocurrency price.');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'You can ask for a coin price, or, you can say exit... if you cant find what you are looking for, try the ticker letters.  What can I help you with?','What can I help you with?');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye');
    },
    'Unhandled': function () {
        this.emit(':tell', 'Goodbye')
    },
    'GetCoinPrice': function () {
        var CoinRequested = this.event.request.intent.slots.Coin.value;
        if(CoinRequested === undefined)
            var filledSlots = delegateSlotCollection.call(this);
        var CoinAbre = indexes[CoinRequested];
        var CoinName;
        if(CoinAbre === undefined)
            CoinName = CoinRequested;
        else
            CoinName = CoinAbre;
        console.log(this.event.request.intent.slots.Coin.value);
        console.log(CoinName);
        httpsGet(CoinName.toUpperCase(),  (myResult) => {
                console.log("sent     : " + CoinRequested);
                console.log("received : " + myResult);
                if(myResult === undefined)
                    this.emit(':ask','I couldnt find that one, try the ticker or a different pronunciation');
                else {
                    this.response.speak('The price of ' + CoinRequested + ' is ' + myResult + ' dollars');
                    this.emit(':responseReady');
                }
            }
        );

    }
};


//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================


var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html
// try other APIs such as the current bitcoin price : https://btc-e.com/api/2/btc_usd/ticker  returns ticker.last

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
      var updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      this.emit(":delegate", updatedIntent);
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate");
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}

function httpsGet(myData, callback) {

    // GET is a web service request that is fully defined by a URL string
    // Try GET in your browser:
    // https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=New%20Jersey


    // Update these options with the details of the web service you would like to call
    //min-api.cryptocompare.com/data/price?fsym=COB&tsyms=USD
    var options = {
        host: 'min-api.cryptocompare.com',
        port: 443,
        path: '/data/price?fsym=' + myData.toUpperCase() + '&tsyms=USD',
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data
console.log('-------------------')
console.log(returnData)
console.log('-------------------')
            var pop = JSON.parse(returnData).USD;

            callback(pop);  // this will execute whatever function the caller defined, with one argument

        });

    });
    req.end();

}
