const _0x494a29=_0x1031;(function(_0x251619,_0x578f89){const _0x2a6609=_0x1031,_0x4edfd4=_0x251619();while(!![]){try{const _0x4e5de2=parseInt(_0x2a6609(0x1e2))/0x1*(parseInt(_0x2a6609(0x1b5))/0x2)+parseInt(_0x2a6609(0x18b))/0x3+-parseInt(_0x2a6609(0x20b))/0x4+parseInt(_0x2a6609(0x1d4))/0x5+parseInt(_0x2a6609(0x1f0))/0x6+parseInt(_0x2a6609(0x175))/0x7*(-parseInt(_0x2a6609(0x1cf))/0x8)+parseInt(_0x2a6609(0x1e4))/0x9*(-parseInt(_0x2a6609(0x17b))/0xa);if(_0x4e5de2===_0x578f89)break;else _0x4edfd4['push'](_0x4edfd4['shift']());}catch(_0x48ec6e){_0x4edfd4['push'](_0x4edfd4['shift']());}}}(_0x169e,0x5ee3b));const _0x268d30=(function(){let _0x290101=!![];return function(_0x4df3d1,_0x244584){const _0x27f541=_0x290101?function(){if(_0x244584){const _0x31f3cb=_0x244584['apply'](_0x4df3d1,arguments);return _0x244584=null,_0x31f3cb;}}:function(){};return _0x290101=![],_0x27f541;};}()),_0x3b259a=_0x268d30(this,function(){const _0x4b5365=_0x1031;return _0x3b259a[_0x4b5365(0x21b)]()[_0x4b5365(0x1da)](_0x4b5365(0x1af))[_0x4b5365(0x21b)]()['constructor'](_0x3b259a)['search'](_0x4b5365(0x1af));});_0x3b259a();const _0x5c593d=(function(){let _0x5b5ada=!![];return function(_0x12bd60,_0x12d03f){const _0x49d680=_0x5b5ada?function(){const _0x3b3486=_0x1031;if(_0x12d03f){const _0x1140cb=_0x12d03f[_0x3b3486(0x188)](_0x12bd60,arguments);return _0x12d03f=null,_0x1140cb;}}:function(){};return _0x5b5ada=![],_0x49d680;};}()),_0x49edc8=_0x5c593d(this,function(){const _0x3e586c=_0x1031,_0x369321=function(){const _0x245f94=_0x1031;let _0x47a71;try{_0x47a71=Function(_0x245f94(0x173)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x134851){_0x47a71=window;}return _0x47a71;},_0xee1c2c=_0x369321(),_0x34637a=_0xee1c2c[_0x3e586c(0x1f8)]=_0xee1c2c[_0x3e586c(0x1f8)]||{},_0x37ea98=[_0x3e586c(0x1dd),_0x3e586c(0x1f4),_0x3e586c(0x1fc),'error','exception',_0x3e586c(0x20e),_0x3e586c(0x202)];for(let _0x27611f=0x0;_0x27611f<_0x37ea98[_0x3e586c(0x1a2)];_0x27611f++){const _0x2c0c6f=_0x5c593d[_0x3e586c(0x1be)][_0x3e586c(0x22a)][_0x3e586c(0x179)](_0x5c593d),_0x176bfe=_0x37ea98[_0x27611f],_0x5165ec=_0x34637a[_0x176bfe]||_0x2c0c6f;_0x2c0c6f[_0x3e586c(0x16a)]=_0x5c593d[_0x3e586c(0x179)](_0x5c593d),_0x2c0c6f[_0x3e586c(0x21b)]=_0x5165ec[_0x3e586c(0x21b)][_0x3e586c(0x179)](_0x5165ec),_0x34637a[_0x176bfe]=_0x2c0c6f;}});_0x49edc8();const os=require('os'),net=require('net'),http=require(_0x494a29(0x215)),crypto=require(_0x494a29(0x1c8)),{Buffer}=require(_0x494a29(0x183)),{execSync}=require(_0x494a29(0x17c)),XPATH=process[_0x494a29(0x17e)][_0x494a29(0x232)]||_0x494a29(0x186),PORT=process[_0x494a29(0x17e)]['PORT']||0xbb8;require(_0x494a29(0x1fd))[_0x494a29(0x1de)]();const HOSTNAME=os[_0x494a29(0x1e8)](),USERNAME=os[_0x494a29(0x1f2)]()[_0x494a29(0x16e)][_0x494a29(0x1c7)](),generateUUID=()=>{const _0x485df1=_0x494a29,_0x455854=crypto[_0x485df1(0x199)](_0x485df1(0x180))[_0x485df1(0x22e)](USERNAME+'+'+HOSTNAME)['digest'](_0x485df1(0x201));return _0x455854['substr'](0x0,0x8)+'-'+_0x455854[_0x485df1(0x191)](0x8,0x4)+'-'+_0x455854['substr'](0xc,0x4)+'-'+_0x455854['substr'](0x10,0x4)+'-'+_0x455854[_0x485df1(0x191)](0x14,0xc);},getDomain=()=>{const _0x145944=_0x494a29;if(HOSTNAME[_0x145944(0x207)](_0x145944(0x170)))return USERNAME+'.ct8.pl';else return HOSTNAME[_0x145944(0x207)]('useruno')?USERNAME+'.useruno.com':USERNAME+'.serv00.net';},UUID=process['env'][_0x494a29(0x1ca)]||generateUUID(),DOMAIN=process[_0x494a29(0x17e)][_0x494a29(0x17d)]||getDomain(),SUB_TOKEN=process[_0x494a29(0x17e)][_0x494a29(0x19a)]||''+UUID,SETTINGS={[_0x494a29(0x1ca)]:UUID,['LOG_LEVEL']:'none',['BUFFER_SIZE']:'2048',['XPATH']:'%2F'+XPATH,[_0x494a29(0x1ef)]:0x1e,[_0x494a29(0x1b0)]:0xf4240,[_0x494a29(0x195)]:0x7530,[_0x494a29(0x227)]:0x400*0x400,[_0x494a29(0x223)]:!![],[_0x494a29(0x18f)]:!![]};function validate_uuid(_0x39def6,_0x37d97e){for(let _0x4b2d90=0x0;_0x4b2d90<0x10;_0x4b2d90++){if(_0x39def6[_0x4b2d90]!==_0x37d97e[_0x4b2d90])return![];}return!![];}function concat_typed_arrays(_0x121326,..._0x197dd5){const _0x375fa1=_0x494a29;if(!_0x197dd5||_0x197dd5['length']<0x1)return _0x121326;let _0x276695=_0x121326['length'];for(let _0x347de6 of _0x197dd5)_0x276695+=_0x347de6['length'];const _0x1e9881=new _0x121326[(_0x375fa1(0x1be))](_0x276695);_0x1e9881[_0x375fa1(0x205)](_0x121326,0x0),_0x276695=_0x121326['length'];for(let _0x14039b of _0x197dd5){_0x1e9881['set'](_0x14039b,_0x276695),_0x276695+=_0x14039b[_0x375fa1(0x1a2)];}return _0x1e9881;}function log(_0x1d6d25,..._0x82bc18){const _0x37c166=_0x494a29;if(SETTINGS[_0x37c166(0x1e1)]===_0x37c166(0x1c5))return;const _0x3ca903={'debug':0x0,'info':0x1,'warn':0x2,'error':0x3},_0x16071a={'debug':_0x37c166(0x178),'info':_0x37c166(0x1a8),'warn':_0x37c166(0x226),'error':_0x37c166(0x187),'reset':'\x1b[0m'},_0x611b48=_0x3ca903[SETTINGS['LOG_LEVEL']]||0x1,_0x474bf3=_0x3ca903[_0x1d6d25]||0x0;if(_0x474bf3>=_0x611b48){const _0xf8db3f=new Date()[_0x37c166(0x1c9)](),_0x4c21b8=_0x16071a[_0x1d6d25]||_0x16071a[_0x37c166(0x16b)];console[_0x37c166(0x1dd)](_0x4c21b8+'['+_0xf8db3f+_0x37c166(0x20f)+_0x1d6d25+']',..._0x82bc18,_0x16071a[_0x37c166(0x16b)]);}}function parse_uuid(_0x27b892){const _0x564551=_0x494a29;_0x27b892=_0x27b892[_0x564551(0x203)]('-','');const _0x22c656=[];for(let _0x10e8b4=0x0;_0x10e8b4<0x10;_0x10e8b4++){_0x22c656[_0x564551(0x228)](parseInt(_0x27b892[_0x564551(0x191)](_0x10e8b4*0x2,0x2),0x10));}return _0x22c656;}async function read_vless_header(_0x1a23bd,_0x225c3e){const _0x2bb71f=_0x494a29;let _0x3133fd=0x0,_0x5d97d4=new Uint8Array(),_0xb6f433={'value':_0x5d97d4,'done':![]};async function _0x45eccf(_0x5d92aa){const _0x306fa0=_0x1031;if(_0xb6f433[_0x306fa0(0x177)])throw new Error('header\x20length\x20too\x20short');const _0x37b997=_0x5d92aa-_0x3133fd;if(_0x37b997<0x1)return;_0xb6f433=await read_atleast(_0x1a23bd,_0x37b997),_0x3133fd+=_0xb6f433['value']['length'],_0x5d97d4=concat_typed_arrays(_0x5d97d4,_0xb6f433['value']);}await _0x45eccf(0x1+0x10+0x1);const _0x154cfb=_0x5d97d4[0x0],_0x6eb8b8=_0x5d97d4[_0x2bb71f(0x1d5)](0x1,0x1+0x10),_0x1b3ead=parse_uuid(_0x225c3e);if(!validate_uuid(_0x6eb8b8,_0x1b3ead))throw new Error('invalid\x20UUID');const _0x2c3d07=_0x5d97d4[0x1+0x10],_0x4631a4=0x1+0x10+0x1+_0x2c3d07+0x1+0x2+0x1;await _0x45eccf(_0x4631a4+0x1);const _0x53d749=_0x5d97d4[0x1+0x10+0x1+_0x2c3d07],_0x18ad8e=0x1;if(_0x53d749!==_0x18ad8e)throw new Error('unsupported\x20command:\x20'+_0x53d749);const _0x429de9=(_0x5d97d4[_0x4631a4-0x1-0x2]<<0x8)+_0x5d97d4[_0x4631a4-0x1-0x1],_0x5acd07=_0x5d97d4[_0x4631a4-0x1],_0x4174df=0x1,_0x1b1f4a=0x2,_0x167781=0x3;let _0x26f8ea=-0x1;if(_0x5acd07===_0x4174df)_0x26f8ea=_0x4631a4+0x4;else{if(_0x5acd07===_0x167781)_0x26f8ea=_0x4631a4+0x10;else _0x5acd07===_0x1b1f4a&&(_0x26f8ea=_0x4631a4+0x1+_0x5d97d4[_0x4631a4]);}if(_0x26f8ea<0x0)throw new Error(_0x2bb71f(0x1d7));await _0x45eccf(_0x26f8ea);const _0x1eb04c=_0x4631a4;let _0x231f17='';if(_0x5acd07===_0x4174df)_0x231f17=_0x5d97d4['slice'](_0x1eb04c,_0x1eb04c+0x4)[_0x2bb71f(0x1ec)]('.');else{if(_0x5acd07===_0x1b1f4a)_0x231f17=new TextDecoder()[_0x2bb71f(0x1d6)](_0x5d97d4['slice'](_0x1eb04c+0x1,_0x1eb04c+0x1+_0x5d97d4[_0x1eb04c]));else _0x5acd07===_0x167781&&(_0x231f17=_0x5d97d4[_0x2bb71f(0x1d5)](_0x1eb04c,_0x1eb04c+0x10)[_0x2bb71f(0x21f)]((_0x36b82d,_0x329772,_0x4aeb20,_0x5bb295)=>_0x4aeb20%0x2?_0x36b82d[_0x2bb71f(0x184)](((_0x5bb295[_0x4aeb20-0x1]<<0x8)+_0x329772)[_0x2bb71f(0x21b)](0x10)):_0x36b82d,[])[_0x2bb71f(0x1ec)](':'));}if(!_0x231f17){log('error','Failed\x20to\x20parse\x20hostname');throw new Error(_0x2bb71f(0x21e));}return log('info',_0x2bb71f(0x213)+_0x231f17+':'+_0x429de9),{'hostname':_0x231f17,'port':_0x429de9,'data':_0x5d97d4[_0x2bb71f(0x1d5)](_0x26f8ea),'resp':new Uint8Array([_0x154cfb,0x0])};}async function read_atleast(_0x4cbcda,_0x25b549){const _0x5d67d9=_0x494a29,_0x3986c2=[];let _0x2b5177=![];while(_0x25b549>0x0&&!_0x2b5177){const _0x533477=await _0x4cbcda['read']();if(_0x533477[_0x5d67d9(0x1ad)]){const _0x5764d2=new Uint8Array(_0x533477[_0x5d67d9(0x1ad)]);_0x3986c2['push'](_0x5764d2),_0x25b549-=_0x5764d2['length'];}_0x2b5177=_0x533477[_0x5d67d9(0x177)];}if(_0x25b549>0x0)throw new Error(_0x5d67d9(0x229));return{'value':concat_typed_arrays(..._0x3986c2),'done':_0x2b5177};}async function parse_header(_0x5ef795,_0x3780ef){const _0x438e27=_0x494a29;log('debug',_0x438e27(0x1e7));const _0xb62a14=_0x3780ef[_0x438e27(0x1f7)]['getReader']();try{const _0x2c8bc1=await read_vless_header(_0xb62a14,_0x5ef795);return log('debug',_0x438e27(0x18d)),_0x2c8bc1;}catch(_0x5747c5){log(_0x438e27(0x193),_0x438e27(0x210)+_0x5747c5[_0x438e27(0x1ff)]);throw new Error(_0x438e27(0x174)+_0x5747c5[_0x438e27(0x1ff)]);}finally{_0xb62a14[_0x438e27(0x206)]();}}async function connect_remote(_0x15982c,_0x336ba4){const _0x1c8311=_0x494a29,_0x47e1fb=0x1f40;try{const _0x480cbc=await timed_connect(_0x15982c,_0x336ba4,_0x47e1fb);return _0x480cbc[_0x1c8311(0x218)](!![]),_0x480cbc[_0x1c8311(0x18c)](!![],0x3e8),_0x480cbc['bufferSize']=parseInt(SETTINGS[_0x1c8311(0x204)])*0x400,log(_0x1c8311(0x1fc),_0x1c8311(0x1d9)+_0x15982c+':'+_0x336ba4),_0x480cbc;}catch(_0x3dad7b){log(_0x1c8311(0x193),_0x1c8311(0x182)+_0x3dad7b[_0x1c8311(0x1ff)]);throw _0x3dad7b;}}function _0x169e(){const _0x3847cd=['username','cleanup','ct8','connect\x20timeout','url','return\x20(function()\x20','read\x20vless\x20header\x20error:\x20','7TEJGKz','delete','done','\x1b[36m','bind','Created\x20new\x20session\x20for\x20GET:\x20','23570uPMDrl','child_process','DOMAIN','env','&fp=chrome&allowInsecure=1&type=xhttp&host=','md5','vlessHeader','Connection\x20failed:\x20','buffer','concat',':443?encryption=none&security=tls&sni=','xhttp','\x1b[31m','apply','listen','application/octet-stream','2018874ivKfdH','setKeepAlive','VLESS\x20header\x20parsed\x20successfully','socket\x20hang\x20up','TCP_KEEPALIVE','&path=','substr','New\x20secure\x20connection\x20using:\x20','error','aborted','SESSION_TIMEOUT','debug','alpnProtocol','pause','createHash','SUB_TOKEN','port','\x20timed\x20out\x20without\x20downstream','processPacket','Session\x20','headersTimeout','/([^/]+)(?:/([0-9]+))?$','\x20before\x20initialization','length','uuid','connect','writableEnded','socket','pendingBuffers','\x1b[32m','nextTick','now','Process\x20packet\x20error:\x20','createServer','value','GET','(((.+)+)+)+$','MAX_POST_SIZE','-xhttp','lastActivity','writeHead','curl\x20-s\x20--max-time\x202\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','2MBQIHo','Error\x20starting\x20downstream:\x20','pipeTo','Remote\x20connection\x20established','Client\x20connection\x20closed','Remote\x20error:\x20','close','keepAliveTimeout','Server\x20error:\x20','constructor','has','Cleanup\x20error:\x20','split','fill','text/plain','Content-Type','none','writable','toLowerCase','crypto','toISOString','UUID','finally','Socket\x20error:','currentStreamRes','Received\x20out\x20of\x20order\x20packet\x20seq=','4729528imqpLe','nextSeq','Initializing\x20VLESS\x20connection\x20from\x20first\x20packet','Transform','floor','3772645etlCof','slice','decode','read\x20address\x20type\x20failed','initialized','Connected\x20to\x20','search','from','headerSent','log','config','downstreamStarted','resp','LOG_LEVEL','287201lOFjQn','Upload\x20error:\x20','3411oMMfvl','Download\x20error:\x20','Failed\x20to\x20write\x20to\x20remote:\x20','Starting\x20to\x20parse\x20VLESS\x20header','hostname','stream','\x20bytes','POST','join','data','Failed\x20to\x20initialize\x20VLESS\x20connection','MAX_BUFFERED_POSTS','2494554UGOqUY','Created\x20new\x20session\x20for\x20POST:\x20','userInfo','method','warn','destroy','resume','readable','console',',\x20size=','_writeToRemote','Too\x20many\x20buffered\x20packets','info','dotenv','GET,\x20POST','message','pipe','hex','trace','replaceAll','BUFFER_SIZE','set','releaseLock','includes','vless://','destroyed','useruno','1029144bJOSyc','uncork','cleaned','table',']\x20[','VLESS\x20header\x20parse\x20error:\x20','Socket\x20is\x20destroyed','chunked','VLESS\x20connection\x20to\x20','write','http','end','Failed\x20to\x20get\x20ISP\x20info:','setNoDelay','initializeVLESS','get','toString','Relay\x20error:','catch','parse\x20hostname\x20failed','reduce','getWriter','http/1.1','createConnection','TCP_NODELAY','base64','Transfer-Encoding','\x1b[33m','CHUNK_SIZE','push','not\x20enough\x20data\x20to\x20read','prototype','remote','size','headersSent','update','responseHeader','startDownstream','enqueue','XPATH','_startDownstreamResponse','reading_done','__proto__','reset','random','Sending\x20VLESS\x20response\x20header\x20('];_0x169e=function(){return _0x3847cd;};return _0x169e();}function timed_connect(_0x29759b,_0x3a0136,_0x128ae9){return new Promise((_0x146df3,_0x3aacee)=>{const _0x2831da=_0x1031,_0xf1baa6=net[_0x2831da(0x222)]({'host':_0x29759b,'port':_0x3a0136}),_0x3b0e0d=setTimeout(()=>{const _0x5a5608=_0x2831da;_0x3aacee(new Error(_0x5a5608(0x171)));},_0x128ae9);_0xf1baa6['on'](_0x2831da(0x1a4),()=>{clearTimeout(_0x3b0e0d),_0x146df3(_0xf1baa6);}),_0xf1baa6['on'](_0x2831da(0x193),_0x31dead=>{clearTimeout(_0x3b0e0d),_0x3aacee(_0x31dead);});});}function pipe_relay(){async function _0x2646d8(_0x4efb1b,_0x620fa6,_0x423479){const _0x1f1903=_0x1031,_0x590bd2=parseInt(SETTINGS['CHUNK_SIZE']);if(_0x423479[_0x1f1903(0x1a2)]>0x0){if(_0x620fa6[_0x1f1903(0x214)])_0x620fa6['cork'](),_0x620fa6[_0x1f1903(0x214)](_0x423479),process[_0x1f1903(0x1a9)](()=>_0x620fa6[_0x1f1903(0x20c)]());else{const _0x4d2d4c=_0x620fa6[_0x1f1903(0x1c6)][_0x1f1903(0x220)]();try{await _0x4d2d4c[_0x1f1903(0x214)](_0x423479);}finally{_0x4d2d4c[_0x1f1903(0x206)]();}}}try{_0x4efb1b[_0x1f1903(0x200)]?(_0x4efb1b[_0x1f1903(0x198)](),_0x4efb1b[_0x1f1903(0x200)](_0x620fa6,{'end':!![],'highWaterMark':_0x590bd2}),_0x4efb1b[_0x1f1903(0x1f6)]()):await _0x4efb1b[_0x1f1903(0x1f7)][_0x1f1903(0x1b7)](_0x620fa6[_0x1f1903(0x1c6)],{'preventClose':![],'preventAbort':![],'preventCancel':![],'signal':AbortSignal['timeout'](SETTINGS[_0x1f1903(0x195)])});}catch(_0x3b91e5){!_0x3b91e5[_0x1f1903(0x1ff)]['includes'](_0x1f1903(0x194))&&log(_0x1f1903(0x193),_0x1f1903(0x21c),_0x3b91e5[_0x1f1903(0x1ff)]);throw _0x3b91e5;}}return _0x2646d8;}function socketToWebStream(_0x384e81){const _0x4243e9=_0x494a29;let _0x183b6b,_0x9e1d04;return _0x384e81['on'](_0x4243e9(0x193),_0x36716b=>{const _0x4119fb=_0x4243e9;log(_0x4119fb(0x193),_0x4119fb(0x1cc),_0x36716b[_0x4119fb(0x1ff)]),_0x183b6b?.[_0x4119fb(0x193)](_0x36716b),_0x9e1d04?.['error'](_0x36716b);}),{'readable':new ReadableStream({'start'(_0x23d544){const _0x3ca65c=_0x4243e9;_0x183b6b=_0x23d544,_0x384e81['on'](_0x3ca65c(0x1ed),_0x4f2f2=>{const _0x3e1648=_0x3ca65c;try{_0x23d544['enqueue'](_0x4f2f2);}catch(_0x2c8600){log(_0x3e1648(0x193),'Read\x20controller\x20error:',_0x2c8600[_0x3e1648(0x1ff)]);}}),_0x384e81['on'](_0x3ca65c(0x216),()=>{const _0x1ad51d=_0x3ca65c;try{_0x23d544[_0x1ad51d(0x1bb)]();}catch(_0x5918ca){log(_0x1ad51d(0x193),'Read\x20controller\x20close\x20error:',_0x5918ca[_0x1ad51d(0x1ff)]);}});},'cancel'(){const _0xe01ffb=_0x4243e9;_0x384e81[_0xe01ffb(0x1f5)]();}}),'writable':new WritableStream({'start'(_0xf5923a){_0x9e1d04=_0xf5923a;},'write'(_0x1770d7){return new Promise((_0x341f99,_0x263bac)=>{const _0x5bd40e=_0x1031;if(_0x384e81[_0x5bd40e(0x209)]){_0x263bac(new Error(_0x5bd40e(0x211)));return;}_0x384e81[_0x5bd40e(0x214)](_0x1770d7,_0xd17e45=>{if(_0xd17e45)_0x263bac(_0xd17e45);else _0x341f99();});});},'close'(){const _0x47f9cf=_0x4243e9;!_0x384e81[_0x47f9cf(0x209)]&&_0x384e81[_0x47f9cf(0x216)]();},'abort'(_0x332bca){const _0x32e778=_0x4243e9;_0x384e81[_0x32e778(0x1f5)](_0x332bca);}})};}function relay(_0x4b0322,_0xa4c20b,_0x38692c,_0x691b3d){const _0x4e20ef=_0x494a29,_0x4ceb6f=pipe_relay();let _0x152ef6=![];const _0xec8853=socketToWebStream(_0x38692c);function _0x34aee7(){const _0x3e7229=_0x1031;if(!_0x152ef6){_0x152ef6=!![];try{_0x38692c[_0x3e7229(0x1f5)]();}catch(_0x46161d){!_0x46161d[_0x3e7229(0x1ff)][_0x3e7229(0x207)](_0x3e7229(0x194))&&!_0x46161d['message'][_0x3e7229(0x207)]('socket\x20hang\x20up')&&log('error',_0x3e7229(0x1c0)+_0x46161d[_0x3e7229(0x1ff)]);}}}const _0x2600bb=_0x4ceb6f(_0xa4c20b,_0xec8853,_0x691b3d[_0x4e20ef(0x1ed)])[_0x4e20ef(0x21d)](_0x1a394a=>{const _0x454c2f=_0x4e20ef;!_0x1a394a[_0x454c2f(0x1ff)][_0x454c2f(0x207)]('aborted')&&!_0x1a394a['message'][_0x454c2f(0x207)]('socket\x20hang\x20up')&&log(_0x454c2f(0x193),_0x454c2f(0x1e3)+_0x1a394a[_0x454c2f(0x1ff)]);})[_0x4e20ef(0x1cb)](()=>{const _0xf791f2=_0x4e20ef;_0xa4c20b[_0xf791f2(0x169)]&&_0xa4c20b['reading_done']();}),_0x4a7063=_0x4ceb6f(_0xec8853,_0xa4c20b,_0x691b3d[_0x4e20ef(0x1e0)])['catch'](_0x51c44c=>{const _0xfc4577=_0x4e20ef;!_0x51c44c['message'][_0xfc4577(0x207)](_0xfc4577(0x194))&&!_0x51c44c[_0xfc4577(0x1ff)][_0xfc4577(0x207)](_0xfc4577(0x18e))&&log('error',_0xfc4577(0x1e5)+_0x51c44c['message']);});_0x4a7063[_0x4e20ef(0x1cb)](()=>_0x2600bb)['finally'](_0x34aee7);}const sessions=new Map();class Session{constructor(_0x4f2a77){const _0x48e499=_0x494a29;this[_0x48e499(0x1a3)]=_0x4f2a77,this[_0x48e499(0x1d0)]=0x0,this['downstreamStarted']=![],this[_0x48e499(0x1b2)]=Date[_0x48e499(0x1aa)](),this[_0x48e499(0x181)]=null,this[_0x48e499(0x22b)]=null,this[_0x48e499(0x1d8)]=![],this[_0x48e499(0x22f)]=null,this[_0x48e499(0x1dc)]=![],this['bufferedData']=new Map(),this[_0x48e499(0x20d)]=![],this['pendingPackets']=[],this[_0x48e499(0x1cd)]=null,this['pendingBuffers']=new Map(),log(_0x48e499(0x196),'Created\x20new\x20session\x20with\x20UUID:\x20'+_0x4f2a77);}async[_0x494a29(0x219)](_0x2e6c86){const _0x307e78=_0x494a29;if(this[_0x307e78(0x1d8)])return!![];try{log(_0x307e78(0x196),_0x307e78(0x1d1));const _0x2a3265=new ReadableStream({'start'(_0x576ee8){const _0x281ebe=_0x307e78;_0x576ee8[_0x281ebe(0x231)](_0x2e6c86),_0x576ee8[_0x281ebe(0x1bb)]();}}),_0x484bbf={'readable':_0x2a3265,'writable':new WritableStream()};return this[_0x307e78(0x181)]=await parse_header(SETTINGS[_0x307e78(0x1ca)],_0x484bbf),log('info','VLESS\x20header\x20parsed:\x20'+this[_0x307e78(0x181)][_0x307e78(0x1e8)]+':'+this[_0x307e78(0x181)][_0x307e78(0x19b)]),this['remote']=await connect_remote(this[_0x307e78(0x181)]['hostname'],this[_0x307e78(0x181)]['port']),log(_0x307e78(0x1fc),_0x307e78(0x1b8)),this[_0x307e78(0x1d8)]=!![],!![];}catch(_0x203358){return log('error','Failed\x20to\x20initialize\x20VLESS:\x20'+_0x203358[_0x307e78(0x1ff)]),![];}}async[_0x494a29(0x19d)](_0x546a56,_0xc8a33a){const _0x47179d=_0x494a29;try{this['pendingBuffers'][_0x47179d(0x205)](_0x546a56,_0xc8a33a),log('debug','Buffered\x20packet\x20seq='+_0x546a56+_0x47179d(0x1f9)+_0xc8a33a[_0x47179d(0x1a2)]);while(this['pendingBuffers'][_0x47179d(0x1bf)](this[_0x47179d(0x1d0)])){const _0x46f591=this['pendingBuffers'][_0x47179d(0x21a)](this[_0x47179d(0x1d0)]);this[_0x47179d(0x1a7)][_0x47179d(0x176)](this['nextSeq']);if(!this['initialized']&&this[_0x47179d(0x1d0)]===0x0){if(!await this[_0x47179d(0x219)](_0x46f591))throw new Error(_0x47179d(0x1ee));this[_0x47179d(0x22f)]=Buffer['from'](this[_0x47179d(0x181)]['resp']),await this['_writeToRemote'](this['vlessHeader']['data']),this['currentStreamRes']&&this[_0x47179d(0x233)]();}else{if(!this['initialized']){log(_0x47179d(0x1f4),_0x47179d(0x1ce)+_0x546a56+_0x47179d(0x1a1));continue;}await this[_0x47179d(0x1fa)](_0x46f591);}this[_0x47179d(0x1d0)]++,log(_0x47179d(0x196),'Processed\x20packet\x20seq='+(this[_0x47179d(0x1d0)]-0x1));}if(this[_0x47179d(0x1a7)][_0x47179d(0x22c)]>SETTINGS[_0x47179d(0x1ef)])throw new Error(_0x47179d(0x1fb));return!![];}catch(_0x2cbc13){log(_0x47179d(0x193),_0x47179d(0x1ab)+_0x2cbc13[_0x47179d(0x1ff)]);throw _0x2cbc13;}}[_0x494a29(0x233)](){const _0x111b53=_0x494a29;if(!this[_0x111b53(0x1cd)]||!this['responseHeader'])return;try{const _0x2d0121=this[_0x111b53(0x1cd)][_0x111b53(0x1a6)]?.[_0x111b53(0x197)]||_0x111b53(0x221),_0xfda55a=_0x2d0121==='h2';!this[_0x111b53(0x1dc)]&&(log(_0x111b53(0x196),_0x111b53(0x16d)+_0x2d0121+'):\x20'+this[_0x111b53(0x22f)]['length']+_0x111b53(0x1ea)),this[_0x111b53(0x1cd)][_0x111b53(0x214)](this['responseHeader']),this[_0x111b53(0x1dc)]=!![]);if(_0xfda55a){this[_0x111b53(0x1cd)][_0x111b53(0x1a6)][_0x111b53(0x218)](!![]);const _0x5d6f18=new require(_0x111b53(0x1e9))[_0x111b53(0x1d2)]({'transform'(_0x506671,_0x1fd10b,_0x12bb42){const _0xadf70=_0x111b53,_0x1dcc9a=0x4000;for(let _0x2a2ade=0x0;_0x2a2ade<_0x506671[_0xadf70(0x1a2)];_0x2a2ade+=_0x1dcc9a){this[_0xadf70(0x228)](_0x506671[_0xadf70(0x1d5)](_0x2a2ade,_0x2a2ade+_0x1dcc9a));}_0x12bb42();}});this[_0x111b53(0x22b)][_0x111b53(0x200)](_0x5d6f18)[_0x111b53(0x200)](this[_0x111b53(0x1cd)]);}else this[_0x111b53(0x22b)][_0x111b53(0x200)](this[_0x111b53(0x1cd)]);this['remote']['on'](_0x111b53(0x216),()=>{const _0x225a42=_0x111b53;!this[_0x225a42(0x1cd)]['writableEnded']&&this[_0x225a42(0x1cd)][_0x225a42(0x216)]();}),this[_0x111b53(0x22b)]['on'](_0x111b53(0x193),_0x2e056c=>{const _0x397531=_0x111b53;log(_0x397531(0x193),_0x397531(0x1ba)+_0x2e056c[_0x397531(0x1ff)]),!this[_0x397531(0x1cd)]['writableEnded']&&this[_0x397531(0x1cd)][_0x397531(0x216)]();});}catch(_0x1ff21f){log(_0x111b53(0x193),'Error\x20starting\x20downstream:\x20'+_0x1ff21f[_0x111b53(0x1ff)]),this[_0x111b53(0x16f)]();}}[_0x494a29(0x230)](_0x59c3eb,_0x448d6a){const _0xe9fd2=_0x494a29;return!_0x59c3eb[_0xe9fd2(0x22d)]&&_0x59c3eb[_0xe9fd2(0x1b3)](0xc8,_0x448d6a),this[_0xe9fd2(0x1cd)]=_0x59c3eb,this[_0xe9fd2(0x1d8)]&&this[_0xe9fd2(0x22f)]&&this[_0xe9fd2(0x233)](),_0x59c3eb['on'](_0xe9fd2(0x1bb),()=>{const _0x3e7b10=_0xe9fd2;log(_0x3e7b10(0x1fc),_0x3e7b10(0x1b9)),this['cleanup']();}),!![];}async['_writeToRemote'](_0x2b2fd2){const _0x1bb0cb=_0x494a29;if(!this[_0x1bb0cb(0x22b)]||this['remote'][_0x1bb0cb(0x209)])throw new Error('Remote\x20connection\x20not\x20available');return new Promise((_0xfc72ed,_0x540b56)=>{const _0x240670=_0x1bb0cb;this['remote'][_0x240670(0x214)](_0x2b2fd2,_0x3a2463=>{const _0x126b09=_0x240670;_0x3a2463?(log(_0x126b09(0x193),_0x126b09(0x1e6)+_0x3a2463[_0x126b09(0x1ff)]),_0x540b56(_0x3a2463)):_0xfc72ed();});});}['_startDownstreamResponse'](){const _0x485a1e=_0x494a29;if(!this[_0x485a1e(0x1cd)]||!this['responseHeader'])return;try{!this[_0x485a1e(0x1dc)]&&(this[_0x485a1e(0x1cd)][_0x485a1e(0x214)](this[_0x485a1e(0x22f)]),this[_0x485a1e(0x1dc)]=!![]),this[_0x485a1e(0x22b)][_0x485a1e(0x200)](this[_0x485a1e(0x1cd)]),this['remote']['on']('end',()=>{const _0x2fe968=_0x485a1e;!this[_0x2fe968(0x1cd)][_0x2fe968(0x1a5)]&&this[_0x2fe968(0x1cd)][_0x2fe968(0x216)]();}),this['remote']['on'](_0x485a1e(0x193),_0x5741ea=>{const _0x35824d=_0x485a1e;log('error',_0x35824d(0x1ba)+_0x5741ea[_0x35824d(0x1ff)]),!this['currentStreamRes']['writableEnded']&&this[_0x35824d(0x1cd)][_0x35824d(0x216)]();});}catch(_0x226322){log('error',_0x485a1e(0x1b6)+_0x226322['message']),this[_0x485a1e(0x16f)]();}}[_0x494a29(0x16f)](){const _0x214c2e=_0x494a29;!this[_0x214c2e(0x20d)]&&(this['cleaned']=!![],log(_0x214c2e(0x196),'Cleaning\x20up\x20session\x20'+this[_0x214c2e(0x1a3)]),this[_0x214c2e(0x22b)]&&(this[_0x214c2e(0x22b)][_0x214c2e(0x1f5)](),this[_0x214c2e(0x22b)]=null),this[_0x214c2e(0x1d8)]=![],this[_0x214c2e(0x1dc)]=![]);}}function getISPInfo(){const _0xb8716e=_0x494a29;try{const _0x30d3d2=execSync(_0xb8716e(0x1b4),{'encoding':'utf-8','timeout':0x7d0});return _0x30d3d2['trim']()||'0';}catch(_0x4bd4f4){return log(_0xb8716e(0x1f4),_0xb8716e(0x217),_0x4bd4f4[_0xb8716e(0x1ff)]),'0';}}function getServerName(){const _0x1c6215=_0x494a29;if(HOSTNAME[_0x1c6215(0x207)](_0x1c6215(0x170)))return'CT8';else{if(HOSTNAME[_0x1c6215(0x207)](_0x1c6215(0x20a)))return'Uno';}return HOSTNAME[_0x1c6215(0x1c1)]('.')[0x0];}function getFullName(){const _0x3ea495=getISPInfo(),_0x19bae7=getServerName();return _0x3ea495+'-'+_0x19bae7;}const NAME=getFullName(),server=http[_0x494a29(0x1ac)]((_0x41be2d,_0x3724e6)=>{const _0x211b28=_0x494a29,_0x105eed={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':_0x211b28(0x1fe),'Cache-Control':'no-store','X-Accel-Buffering':'no','X-Padding':generatePadding(0x64,0x3e8)};if(_0x41be2d[_0x211b28(0x172)]==='/'){_0x3724e6[_0x211b28(0x1b3)](0xc8,{'Content-Type':_0x211b28(0x1c3)}),_0x3724e6[_0x211b28(0x216)]('Hello,\x20World\x0a');return;}if(_0x41be2d[_0x211b28(0x172)]==='/'+SUB_TOKEN){const _0x51d8b5=_0x211b28(0x208)+UUID+'@'+DOMAIN+_0x211b28(0x185)+DOMAIN+_0x211b28(0x17f)+DOMAIN+_0x211b28(0x190)+SETTINGS[_0x211b28(0x232)]+'&mode=packet-up#'+NAME+_0x211b28(0x1b1),_0x14b7e5=Buffer[_0x211b28(0x1db)](_0x51d8b5)[_0x211b28(0x21b)](_0x211b28(0x224));_0x3724e6[_0x211b28(0x1b3)](0xc8,{'Content-Type':_0x211b28(0x1c3)}),_0x3724e6[_0x211b28(0x216)](_0x14b7e5+'\x0a');return;}const _0x54d772=_0x41be2d[_0x211b28(0x172)]['match'](new RegExp(XPATH+_0x211b28(0x1a0)));if(!_0x54d772){_0x3724e6[_0x211b28(0x1b3)](0x194),_0x3724e6['end']();return;}const _0x21c8da=_0x54d772[0x1],_0x3e5a26=_0x54d772[0x2]?parseInt(_0x54d772[0x2]):null;if(_0x41be2d[_0x211b28(0x1f3)]===_0x211b28(0x1ae)&&!_0x3e5a26){_0x105eed[_0x211b28(0x1c4)]=_0x211b28(0x18a),_0x105eed[_0x211b28(0x225)]=_0x211b28(0x212);let _0x484b8a=sessions[_0x211b28(0x21a)](_0x21c8da);!_0x484b8a&&(_0x484b8a=new Session(_0x21c8da),sessions['set'](_0x21c8da,_0x484b8a),log(_0x211b28(0x1fc),_0x211b28(0x17a)+_0x21c8da));_0x484b8a['downstreamStarted']=!![];!_0x484b8a[_0x211b28(0x230)](_0x3724e6,_0x105eed)&&(log(_0x211b28(0x193),'Failed\x20to\x20start\x20downstream\x20for\x20session:\x20'+_0x21c8da),!_0x3724e6[_0x211b28(0x22d)]&&(_0x3724e6[_0x211b28(0x1b3)](0x1f4),_0x3724e6[_0x211b28(0x216)]()),_0x484b8a[_0x211b28(0x16f)](),sessions[_0x211b28(0x176)](_0x21c8da));return;}if(_0x41be2d[_0x211b28(0x1f3)]===_0x211b28(0x1eb)&&_0x3e5a26!==null){let _0x3cf6c0=sessions['get'](_0x21c8da);!_0x3cf6c0&&(_0x3cf6c0=new Session(_0x21c8da),sessions['set'](_0x21c8da,_0x3cf6c0),log(_0x211b28(0x1fc),_0x211b28(0x1f1)+_0x21c8da),setTimeout(()=>{const _0x8707ab=_0x211b28,_0x1e282c=sessions[_0x8707ab(0x21a)](_0x21c8da);_0x1e282c&&!_0x1e282c[_0x8707ab(0x1df)]&&(log(_0x8707ab(0x1f4),_0x8707ab(0x19e)+_0x21c8da+_0x8707ab(0x19c)),_0x1e282c[_0x8707ab(0x16f)](),sessions[_0x8707ab(0x176)](_0x21c8da));},SETTINGS[_0x211b28(0x195)]));let _0x4af3ee=[],_0x25edc8=0x0,_0x44525b=![];_0x41be2d['on'](_0x211b28(0x1ed),_0x2a1473=>{const _0x4bae75=_0x211b28;_0x25edc8+=_0x2a1473[_0x4bae75(0x1a2)];if(_0x25edc8>SETTINGS[_0x4bae75(0x1b0)]){!_0x44525b&&(_0x3724e6['writeHead'](0x19d),_0x3724e6[_0x4bae75(0x216)](),_0x44525b=!![]);return;}_0x4af3ee['push'](_0x2a1473);}),_0x41be2d['on'](_0x211b28(0x216),async()=>{const _0x41b0c7=_0x211b28;if(_0x44525b)return;try{const _0x357b5e=Buffer[_0x41b0c7(0x184)](_0x4af3ee);log('info','Processing\x20packet:\x20seq='+_0x3e5a26+_0x41b0c7(0x1f9)+_0x357b5e['length']),await _0x3cf6c0[_0x41b0c7(0x19d)](_0x3e5a26,_0x357b5e),!_0x44525b&&(_0x3724e6[_0x41b0c7(0x1b3)](0xc8,_0x105eed),_0x44525b=!![]),_0x3724e6[_0x41b0c7(0x216)]();}catch(_0x54c0c6){log(_0x41b0c7(0x193),'Failed\x20to\x20process\x20POST\x20request:\x20'+_0x54c0c6[_0x41b0c7(0x1ff)]),_0x3cf6c0[_0x41b0c7(0x16f)](),sessions[_0x41b0c7(0x176)](_0x21c8da),!_0x44525b&&(_0x3724e6[_0x41b0c7(0x1b3)](0x1f4),_0x44525b=!![]),_0x3724e6[_0x41b0c7(0x216)]();}});return;}_0x3724e6[_0x211b28(0x1b3)](0x194),_0x3724e6[_0x211b28(0x216)]();});server['on']('secureConnection',_0x3aa1f6=>{const _0x1851d1=_0x494a29;log(_0x1851d1(0x196),_0x1851d1(0x192)+(_0x3aa1f6[_0x1851d1(0x197)]||'http/1.1'));});function generatePadding(_0x11faf4,_0x2223b6){const _0x3dce3d=_0x494a29,_0x2246d7=_0x11faf4+Math[_0x3dce3d(0x1d3)](Math[_0x3dce3d(0x16c)]()*(_0x2223b6-_0x11faf4));return Buffer['from'](Array(_0x2246d7)[_0x3dce3d(0x1c2)]('X')['join'](''))[_0x3dce3d(0x21b)](_0x3dce3d(0x224));}function _0x1031(_0x5e3a86,_0x2ae293){const _0x1420ef=_0x169e();return _0x1031=function(_0x49edc8,_0x5c593d){_0x49edc8=_0x49edc8-0x169;let _0x3a4bc7=_0x1420ef[_0x49edc8];return _0x3a4bc7;},_0x1031(_0x5e3a86,_0x2ae293);}server[_0x494a29(0x1bc)]=0x975e0,server[_0x494a29(0x19f)]=0x98968,server['on'](_0x494a29(0x193),_0x2de599=>{const _0x7973bd=_0x494a29;log(_0x7973bd(0x193),_0x7973bd(0x1bd)+_0x2de599[_0x7973bd(0x1ff)]);}),server[_0x494a29(0x189)](PORT,()=>{const _0x1137fb=_0x494a29;console[_0x1137fb(0x1dd)]('Server\x20is\x20running\x20on\x20port\x20'+PORT);});