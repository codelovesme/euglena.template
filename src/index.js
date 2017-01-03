"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by codelovesme on 6/19/2015.
 */
var euglena_1 = require("euglena");
var euglena_template;
(function (euglena_template) {
    var being;
    (function (being) {
        var particle;
        (function (particle) {
            var BooleanParticle = (function (_super) {
                __extends(BooleanParticle, _super);
                function BooleanParticle(meta, data) {
                    _super.call(this, meta, data);
                }
                return BooleanParticle;
            }(euglena_1.euglena.being.Particle));
            particle.BooleanParticle = BooleanParticle;
            var VoidParticle = (function (_super) {
                __extends(VoidParticle, _super);
                function VoidParticle(meta) {
                    _super.call(this, meta, null);
                }
                return VoidParticle;
            }(euglena_1.euglena.being.Particle));
            particle.VoidParticle = VoidParticle;
        })(particle = being.particle || (being.particle = {}));
        var subscribtion;
        (function (subscribtion) {
            var Record = (function () {
                function Record() {
                }
                return Record;
            }());
            subscribtion.Record = Record;
            var StaticTools = (function () {
                function StaticTools() {
                }
                StaticTools.addSubscribtion = function (particleMatch, euglenaName) {
                    var euglenas = StaticTools.getSubscribtions(particleMatch);
                    if (euglenas) {
                        if (!euglena_1.euglena.sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                            euglenas.push(euglenaName);
                        }
                    }
                    else {
                        StaticTools.subscribtionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
                    }
                };
                StaticTools.removeSubscribtions = function (particleMatch) {
                    for (var i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena_1.euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict, i).euglenas;
                        }
                    }
                    return null;
                };
                StaticTools.removeSubscribtion = function (particleMatch, euglenaName) {
                    for (var i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            var index = StaticTools.subscribtionDict[i].euglenas.indexOf(euglenaName);
                            if (index >= 0) {
                                return euglena_1.euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict[i].euglenas, index) ? true : false;
                            }
                        }
                    }
                    return false;
                };
                StaticTools.getSubscribtions = function (particleMatch) {
                    for (var i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return StaticTools.subscribtionDict[i].euglenas;
                        }
                    }
                    return null;
                };
                StaticTools.isSubscribed = function (particleMatch, euglenaName) {
                    for (var i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena_1.euglena.sys.type.StaticTools.Array.contains(StaticTools.subscribtionDict[i].euglenas, euglenaName);
                        }
                    }
                };
                StaticTools.subscribtionDict = [];
                return StaticTools;
            }());
            subscribtion.StaticTools = StaticTools;
        })(subscribtion = being.subscribtion || (being.subscribtion = {}));
        var alive;
        (function (alive) {
            var Particle = euglena_1.euglena.being.Particle;
            var constants;
            (function (constants) {
                var particles;
                (function (particles) {
                    particles.Domain = "Domain";
                    particles.WhoAmI = "WhoAmI";
                    particles.ParticlesOf = "ParticlesOf";
                    particles.EuglenaInfo = "EuglenaInfo";
                    particles.OrganelleList = "OrganelleList";
                    particles.EuglenaName = "EuglenaName";
                    particles.ImpactReceived = "ImpactReceived";
                    particles.EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
                    particles.Acknowledge = "Acknowledge";
                    particles.Authenticate = "Authenticate";
                    particles.Time = "Time";
                    particles.Exception = "Exception";
                    particles.ConnectedToTheInternet = "ConnectedToTheInternet";
                    particles.Token = "Token";
                    particles.Impacts = "Impacts";
                    particles.DoesParticleExist = "DoesParticleExist";
                    particles.DoesUniqueParticleExist = "DoesUniqueParticleExist";
                    particles.Gene = "Gene";
                    particles.ThrowImpact = "ThrowImpact";
                    particles.Listen = "Listen";
                    particles.ConnectedToEuglena = "ConnectedToEuglena";
                    particles.DisconnectedFromEuglena = "DisconnectedFromEuglena";
                    particles.ConnectToEuglena = "ConnectToEuglena";
                    particles.ReturnCurrentTime = "ReturnCurrentTime";
                    particles.ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                    particles.OrganelleHasComeToLife = "OrganelleHasComeToLife";
                    particles.Proxy = "Proxy";
                    particles.SetTime = "SetTime";
                    particles.DbIsOnline = "DbIsOnline";
                    particles.NetOrganelleSap = "NetOrganelleSap";
                    particles.NetClientOrganelleSap = "NetClientOrganelleSap";
                    particles.WebOrganelleSap = "WebOrganelleSap";
                    particles.WebUIOrganelleSap = "WebUIOrganelleSap";
                    particles.DbOrganelleSap = "DbOrganelleSap";
                    particles.CytoplasmInfo = "CytoplasmInfo";
                    particles.ReadMatchedParticles = "ReadMatchedParticles";
                })(particles = constants.particles || (constants.particles = {}));
                var organelles;
                (function (organelles) {
                    organelles.WebUIOrganelle = "WebUIOrganelle";
                    organelles.NetOrganelle = "NetOrganelle";
                    organelles.TimeOrganelle = "TimeOrganelle";
                    organelles.WebOrganelle = "WebOrganelle";
                    organelles.DbOrganelle = "DbOrganelle";
                    organelles.NetClientOrganelle = "NetClientOrganelle";
                    organelles.Cytoplasm = "Cytoplasm";
                })(organelles = constants.organelles || (constants.organelles = {}));
                var impacts;
                (function (impacts) {
                    impacts.AddGene = "AddGene";
                    impacts.TimeChanged = "TimeChanged";
                    impacts.ExceptionOccurred = "ExceptionOccurred";
                    impacts.SaveParticle = "SaveParticle";
                    impacts.ReadParticle = "ReadParticle";
                    impacts.ReadParticles = "ReadParticles";
                    impacts.ReadParticlesOf = "ReadParticlesOf";
                    impacts.RemoveParticle = "RemoveParticle";
                })(impacts = constants.impacts || (constants.impacts = {}));
            })(constants = alive.constants || (alive.constants = {}));
            var organelle;
            (function (organelle) {
                var Organelle = euglena_1.euglena.being.alive.Organelle;
                var TimeOrganelle = (function (_super) {
                    __extends(TimeOrganelle, _super);
                    function TimeOrganelle(className) {
                        _super.call(this, alive.constants.organelles.TimeOrganelle, className);
                    }
                    return TimeOrganelle;
                }(Organelle));
                organelle.TimeOrganelle = TimeOrganelle;
                var NetOrganelle = (function (_super) {
                    __extends(NetOrganelle, _super);
                    function NetOrganelle(className) {
                        _super.call(this, constants.organelles.NetOrganelle, className);
                    }
                    return NetOrganelle;
                }(Organelle));
                organelle.NetOrganelle = NetOrganelle;
                var WebOrganelle = (function (_super) {
                    __extends(WebOrganelle, _super);
                    function WebOrganelle(className) {
                        _super.call(this, constants.organelles.WebOrganelle, className);
                    }
                    return WebOrganelle;
                }(Organelle));
                organelle.WebOrganelle = WebOrganelle;
                var WebUIOrganelle = (function (_super) {
                    __extends(WebUIOrganelle, _super);
                    function WebUIOrganelle(className) {
                        _super.call(this, constants.organelles.WebUIOrganelle, className);
                    }
                    return WebUIOrganelle;
                }(Organelle));
                organelle.WebUIOrganelle = WebUIOrganelle;
                var DbOrganelle = (function (_super) {
                    __extends(DbOrganelle, _super);
                    function DbOrganelle(className) {
                        _super.call(this, constants.organelles.DbOrganelle, className);
                    }
                    return DbOrganelle;
                }(Organelle));
                organelle.DbOrganelle = DbOrganelle;
                var NetClientOrganelle = (function (_super) {
                    __extends(NetClientOrganelle, _super);
                    function NetClientOrganelle(className) {
                        _super.call(this, constants.organelles.NetClientOrganelle, className);
                    }
                    return NetClientOrganelle;
                }(Organelle));
                organelle.NetClientOrganelle = NetClientOrganelle;
            })(organelle = alive.organelle || (alive.organelle = {}));
            var particle;
            (function (particle) {
                var WhoAmI = (function (_super) {
                    __extends(WhoAmI, _super);
                    function WhoAmI() {
                        _super.call(this, { name: constants.particles.WhoAmI }, {});
                    }
                    return WhoAmI;
                }(Particle));
                particle.WhoAmI = WhoAmI;
                var NetClientOrganelleSap = (function (_super) {
                    __extends(NetClientOrganelleSap, _super);
                    function NetClientOrganelleSap(content, of) {
                        _super.call(this, { name: constants.particles.NetClientOrganelleSap, of: of }, content);
                    }
                    return NetClientOrganelleSap;
                }(Particle));
                particle.NetClientOrganelleSap = NetClientOrganelleSap;
                var WebUIOrganelleSap = (function (_super) {
                    __extends(WebUIOrganelleSap, _super);
                    function WebUIOrganelleSap(content, of) {
                        _super.call(this, { name: constants.particles.WebUIOrganelleSap, of: of }, content);
                    }
                    return WebUIOrganelleSap;
                }(Particle));
                particle.WebUIOrganelleSap = WebUIOrganelleSap;
                var WebOrganelleSap = (function (_super) {
                    __extends(WebOrganelleSap, _super);
                    function WebOrganelleSap(content, of) {
                        _super.call(this, { name: constants.particles.WebOrganelleSap, of: of }, content);
                    }
                    return WebOrganelleSap;
                }(Particle));
                particle.WebOrganelleSap = WebOrganelleSap;
                var NetOrganelleSap = (function (_super) {
                    __extends(NetOrganelleSap, _super);
                    function NetOrganelleSap(content, of) {
                        _super.call(this, { name: constants.particles.NetOrganelleSap, of: of }, content);
                    }
                    return NetOrganelleSap;
                }(Particle));
                particle.NetOrganelleSap = NetOrganelleSap;
                var DbOrganelleSap = (function (_super) {
                    __extends(DbOrganelleSap, _super);
                    function DbOrganelleSap(content, of) {
                        _super.call(this, { name: constants.particles.DbOrganelleSap, of: of }, content);
                    }
                    return DbOrganelleSap;
                }(Particle));
                particle.DbOrganelleSap = DbOrganelleSap;
                var DbIsOnline = (function (_super) {
                    __extends(DbIsOnline, _super);
                    function DbIsOnline(of) {
                        _super.call(this, { name: constants.particles.DbIsOnline, of: of });
                    }
                    return DbIsOnline;
                }(being.particle.VoidParticle));
                particle.DbIsOnline = DbIsOnline;
                var VoidParticle = euglena_template.being.particle.VoidParticle;
                var ReturnCurrentTime = (function (_super) {
                    __extends(ReturnCurrentTime, _super);
                    function ReturnCurrentTime(of) {
                        _super.call(this, { name: constants.particles.ReturnCurrentTime, of: of });
                    }
                    return ReturnCurrentTime;
                }(VoidParticle));
                particle.ReturnCurrentTime = ReturnCurrentTime;
                var ReturnIfConnectedToTheInternet = (function (_super) {
                    __extends(ReturnIfConnectedToTheInternet, _super);
                    function ReturnIfConnectedToTheInternet(of) {
                        _super.call(this, { name: constants.particles.ReturnIfConnectedToTheInternet, of: of });
                    }
                    return ReturnIfConnectedToTheInternet;
                }(VoidParticle));
                particle.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
                var OrganelleHasComeToLife = (function (_super) {
                    __extends(OrganelleHasComeToLife, _super);
                    function OrganelleHasComeToLife(organelleName, of) {
                        _super.call(this, { name: constants.particles.OrganelleHasComeToLife, of: of }, { organelleName: organelleName });
                    }
                    return OrganelleHasComeToLife;
                }(Particle));
                particle.OrganelleHasComeToLife = OrganelleHasComeToLife;
                var Domain = (function (_super) {
                    __extends(Domain, _super);
                    function Domain(domain, of) {
                        _super.call(this, { name: constants.particles.Domain, of: of }, domain);
                    }
                    return Domain;
                }(Particle));
                particle.Domain = Domain;
                var Authenticate = (function (_super) {
                    __extends(Authenticate, _super);
                    function Authenticate(euglenaName, password) {
                        _super.call(this, { name: constants.particles.Authenticate }, { euglenaName: euglenaName, password: password });
                    }
                    return Authenticate;
                }(euglena_1.euglena.being.Particle));
                particle.Authenticate = Authenticate;
                var Proxy = (function (_super) {
                    __extends(Proxy, _super);
                    function Proxy(from, to, expireTime) {
                        _super.call(this, { name: constants.particles.Proxy, expireTime: expireTime }, { from: from, to: to });
                    }
                    return Proxy;
                }(Particle));
                particle.Proxy = Proxy;
                var SetTime = (function (_super) {
                    __extends(SetTime, _super);
                    function SetTime(time, of) {
                        _super.call(this, { name: constants.particles.SetTime, of: of }, time);
                    }
                    return SetTime;
                }(Particle));
                particle.SetTime = SetTime;
                var ConnectToEuglena = (function (_super) {
                    __extends(ConnectToEuglena, _super);
                    function ConnectToEuglena(euglenaInfo, of) {
                        _super.call(this, { name: constants.particles.ConnectToEuglena, of: of }, euglenaInfo);
                    }
                    return ConnectToEuglena;
                }(euglena_1.euglena.being.Particle));
                particle.ConnectToEuglena = ConnectToEuglena;
                var ConnectedToEuglena = (function (_super) {
                    __extends(ConnectedToEuglena, _super);
                    function ConnectedToEuglena(euglenaInfo, of) {
                        _super.call(this, { name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo);
                    }
                    return ConnectedToEuglena;
                }(euglena_1.euglena.being.Particle));
                particle.ConnectedToEuglena = ConnectedToEuglena;
                var DisconnectedFromEuglena = (function (_super) {
                    __extends(DisconnectedFromEuglena, _super);
                    function DisconnectedFromEuglena(euglenaInfo, of) {
                        _super.call(this, { name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo);
                    }
                    return DisconnectedFromEuglena;
                }(euglena_1.euglena.being.Particle));
                particle.DisconnectedFromEuglena = DisconnectedFromEuglena;
                var Listen = (function (_super) {
                    __extends(Listen, _super);
                    function Listen(of) {
                        _super.call(this, { name: constants.particles.Listen, of: of });
                    }
                    return Listen;
                }(being.particle.VoidParticle));
                particle.Listen = Listen;
                var ThrowImpact = (function (_super) {
                    __extends(ThrowImpact, _super);
                    function ThrowImpact(content, of) {
                        _super.call(this, { name: constants.particles.ThrowImpact, of: of }, content);
                    }
                    return ThrowImpact;
                }(euglena_1.euglena.being.Particle));
                particle.ThrowImpact = ThrowImpact;
                var EuglenaInfo = (function (_super) {
                    __extends(EuglenaInfo, _super);
                    function EuglenaInfo(content, of) {
                        _super.call(this, { name: constants.particles.EuglenaInfo, of: of }, content);
                    }
                    return EuglenaInfo;
                }(euglena_1.euglena.being.Particle));
                particle.EuglenaInfo = EuglenaInfo;
                var CytoplasmInfo = (function (_super) {
                    __extends(CytoplasmInfo, _super);
                    function CytoplasmInfo(content, of) {
                        _super.call(this, { name: constants.particles.EuglenaInfo, of: of }, content);
                    }
                    return CytoplasmInfo;
                }(euglena_1.euglena.being.Particle));
                particle.CytoplasmInfo = CytoplasmInfo;
                var OrganelleList = (function (_super) {
                    __extends(OrganelleList, _super);
                    function OrganelleList(content, of) {
                        _super.call(this, { name: constants.particles.OrganelleList, of: of }, content);
                    }
                    return OrganelleList;
                }(Particle));
                particle.OrganelleList = OrganelleList;
                var Token = (function (_super) {
                    __extends(Token, _super);
                    function Token(content, of, for_) {
                        _super.call(this, { name: constants.particles.Token, of: of, for: for_ }, content);
                    }
                    return Token;
                }(Particle));
                particle.Token = Token;
                var Exception = (function (_super) {
                    __extends(Exception, _super);
                    function Exception(content, of) {
                        _super.call(this, { name: constants.particles.Exception, of: of }, content);
                    }
                    return Exception;
                }(euglena_1.euglena.being.Particle));
                particle.Exception = Exception;
                var Time = (function (_super) {
                    __extends(Time, _super);
                    function Time(content, of) {
                        _super.call(this, { name: constants.particles.Time, of: of }, content);
                    }
                    return Time;
                }(euglena_1.euglena.being.Particle));
                particle.Time = Time;
                var Acknowledge = (function (_super) {
                    __extends(Acknowledge, _super);
                    function Acknowledge(of) {
                        _super.call(this, { name: constants.particles.Acknowledge, of: of });
                    }
                    return Acknowledge;
                }(being.particle.VoidParticle));
                particle.Acknowledge = Acknowledge;
                var ConnectedToTheInternet = (function (_super) {
                    __extends(ConnectedToTheInternet, _super);
                    function ConnectedToTheInternet(content, of) {
                        _super.call(this, { name: constants.particles.ConnectedToTheInternet, of: of }, content);
                    }
                    return ConnectedToTheInternet;
                }(being.particle.BooleanParticle));
                particle.ConnectedToTheInternet = ConnectedToTheInternet;
                var EuglenaHasBeenBorn = (function (_super) {
                    __extends(EuglenaHasBeenBorn, _super);
                    function EuglenaHasBeenBorn(of) {
                        _super.call(this, { name: constants.particles.EuglenaHasBeenBorn, of: of }, true);
                    }
                    return EuglenaHasBeenBorn;
                }(being.particle.BooleanParticle));
                particle.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
                var SaveParticle = (function (_super) {
                    __extends(SaveParticle, _super);
                    function SaveParticle(content, of) {
                        _super.call(this, { name: constants.impacts.SaveParticle, of: of }, content);
                    }
                    return SaveParticle;
                }(Particle));
                particle.SaveParticle = SaveParticle;
                var ReadParticle = (function (_super) {
                    __extends(ReadParticle, _super);
                    function ReadParticle(content, of) {
                        _super.call(this, { name: constants.impacts.ReadParticle, of: of }, content);
                    }
                    return ReadParticle;
                }(Particle));
                particle.ReadParticle = ReadParticle;
                var ReadParticles = (function (_super) {
                    __extends(ReadParticles, _super);
                    function ReadParticles(particleName, of) {
                        _super.call(this, { name: constants.impacts.ReadParticles, of: of }, particleName);
                    }
                    return ReadParticles;
                }(Particle));
                particle.ReadParticles = ReadParticles;
                var ReadParticlesOf = (function (_super) {
                    __extends(ReadParticlesOf, _super);
                    function ReadParticlesOf(whose, of) {
                        _super.call(this, { name: constants.impacts.ReadParticlesOf, of: of }, whose);
                    }
                    return ReadParticlesOf;
                }(Particle));
                particle.ReadParticlesOf = ReadParticlesOf;
                var ReadMatchedParticles = (function (_super) {
                    __extends(ReadMatchedParticles, _super);
                    function ReadMatchedParticles(particleRef, of) {
                        _super.call(this, { name: constants.particles.ReadMatchedParticles, of: of }, particleRef);
                    }
                    return ReadMatchedParticles;
                }(Particle));
                particle.ReadMatchedParticles = ReadMatchedParticles;
                var ParticlesOf = (function (_super) {
                    __extends(ParticlesOf, _super);
                    function ParticlesOf(particles, of) {
                        _super.call(this, { name: constants.particles.ParticlesOf, of: of }, particles);
                    }
                    return ParticlesOf;
                }(Particle));
                particle.ParticlesOf = ParticlesOf;
                var RemoveParticle = (function (_super) {
                    __extends(RemoveParticle, _super);
                    function RemoveParticle(ref, of) {
                        _super.call(this, { name: constants.impacts.RemoveParticle, of: of }, ref);
                    }
                    return RemoveParticle;
                }(Particle));
                particle.RemoveParticle = RemoveParticle;
                var DoesParticleExist = (function (_super) {
                    __extends(DoesParticleExist, _super);
                    function DoesParticleExist(content, of) {
                        _super.call(this, { name: alive.constants.particles.DoesParticleExist, of: of }, content);
                    }
                    return DoesParticleExist;
                }(Particle));
                particle.DoesParticleExist = DoesParticleExist;
                var ImpactReceived = (function (_super) {
                    __extends(ImpactReceived, _super);
                    function ImpactReceived(content, of) {
                        _super.call(this, { name: constants.particles.ImpactReceived, of: of }, content);
                    }
                    return ImpactReceived;
                }(euglena_1.euglena.being.Particle));
                particle.ImpactReceived = ImpactReceived;
            })(particle = alive.particle || (alive.particle = {}));
        })(alive = being.alive || (being.alive = {}));
    })(being = euglena_template.being || (euglena_template.being = {}));
    var reference;
    (function (reference) {
        var being;
        (function (being) {
            var interaction;
            (function (interaction) {
                interaction.Impact = new euglena_1.euglena.being.interaction.Impact(new euglena_1.euglena.being.Particle({ name: "name", of: "of" }, "content"), "token");
            })(interaction = being.interaction || (being.interaction = {}));
            being.Particle = new euglena_1.euglena.being.Particle({ name: "name", of: "of" }, "content");
        })(being = reference.being || (reference.being = {}));
    })(reference = euglena_template.reference || (euglena_template.reference = {}));
})(euglena_template = exports.euglena_template || (exports.euglena_template = {}));
//# sourceMappingURL=index.js.map