"use strict";
/**
 * Created by codelovesme on 6/19/2015.
 */
const euglena_1 = require("euglena");
var euglena_template;
(function (euglena_template) {
    var being;
    (function (being) {
        var particle;
        (function (particle) {
            class BooleanParticle extends euglena_1.euglena.being.Particle {
                constructor(meta, data) {
                    super(meta, data);
                }
            }
            particle.BooleanParticle = BooleanParticle;
            class VoidParticle extends euglena_1.euglena.being.Particle {
                constructor(meta) {
                    super(meta, null);
                }
            }
            particle.VoidParticle = VoidParticle;
        })(particle = being.particle || (being.particle = {}));
        var subscribtion;
        (function (subscribtion) {
            class Record {
            }
            subscribtion.Record = Record;
            class StaticTools {
                static addSubscribtion(particleMatch, euglenaName) {
                    let euglenas = StaticTools.getSubscribtions(particleMatch);
                    if (euglenas) {
                        if (!euglena_1.euglena.sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                            euglenas.push(euglenaName);
                        }
                    }
                    else {
                        StaticTools.subscribtionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
                    }
                }
                static removeSubscribtions(particleMatch) {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena_1.euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict, i).euglenas;
                        }
                    }
                    return null;
                }
                static removeSubscribtion(particleMatch, euglenaName) {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            let index = StaticTools.subscribtionDict[i].euglenas.indexOf(euglenaName);
                            if (index >= 0) {
                                return euglena_1.euglena.sys.type.StaticTools.Array.removeAt(StaticTools.subscribtionDict[i].euglenas, index) ? true : false;
                            }
                        }
                    }
                    return false;
                }
                static getSubscribtions(particleMatch) {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return StaticTools.subscribtionDict[i].euglenas;
                        }
                    }
                    return null;
                }
                static isSubscribed(particleMatch, euglenaName) {
                    for (let i = 0; i < StaticTools.subscribtionDict.length; i++) {
                        if (euglena_1.euglena.js.Class.doesCover(particleMatch, StaticTools.subscribtionDict[i].particle)) {
                            return euglena_1.euglena.sys.type.StaticTools.Array.contains(StaticTools.subscribtionDict[i].euglenas, euglenaName);
                        }
                    }
                }
            }
            StaticTools.subscribtionDict = [];
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
                    particles.Proxy = "Proxy";
                    particles.ProxyRequest = "ProxyRequest";
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
                    particles.Session = "Session";
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
                class TimeOrganelle extends Organelle {
                    constructor(className) {
                        super(alive.constants.organelles.TimeOrganelle, className);
                    }
                }
                organelle.TimeOrganelle = TimeOrganelle;
                class NetOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.NetOrganelle, className);
                    }
                }
                organelle.NetOrganelle = NetOrganelle;
                class WebOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.WebOrganelle, className);
                    }
                }
                organelle.WebOrganelle = WebOrganelle;
                class WebUIOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.WebUIOrganelle, className);
                    }
                }
                organelle.WebUIOrganelle = WebUIOrganelle;
                class DbOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.DbOrganelle, className);
                    }
                }
                organelle.DbOrganelle = DbOrganelle;
                class NetClientOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.NetClientOrganelle, className);
                    }
                }
                organelle.NetClientOrganelle = NetClientOrganelle;
            })(organelle = alive.organelle || (alive.organelle = {}));
            var particle;
            (function (particle) {
                class NetClientOrganelleSap extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.NetClientOrganelleSap, of: of }, content);
                    }
                }
                particle.NetClientOrganelleSap = NetClientOrganelleSap;
                class WebUIOrganelleSap extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.WebUIOrganelleSap, of: of }, content);
                    }
                }
                particle.WebUIOrganelleSap = WebUIOrganelleSap;
                class WebOrganelleSap extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.WebOrganelleSap, of: of }, content);
                    }
                }
                particle.WebOrganelleSap = WebOrganelleSap;
                class NetOrganelleSap extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.NetOrganelleSap, of: of }, content);
                    }
                }
                particle.NetOrganelleSap = NetOrganelleSap;
                class DbOrganelleSap extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.DbOrganelleSap, of: of }, content);
                    }
                }
                particle.DbOrganelleSap = DbOrganelleSap;
                class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of) {
                        super({ name: constants.particles.DbIsOnline, of: of });
                    }
                }
                particle.DbIsOnline = DbIsOnline;
                var VoidParticle = euglena_template.being.particle.VoidParticle;
                class ReturnCurrentTime extends VoidParticle {
                    constructor(of) {
                        super({ name: constants.particles.ReturnCurrentTime, of: of });
                    }
                }
                particle.ReturnCurrentTime = ReturnCurrentTime;
                class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of) {
                        super({ name: constants.particles.ReturnIfConnectedToTheInternet, of: of });
                    }
                }
                particle.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
                class OrganelleHasComeToLife extends Particle {
                    constructor(organelleName, of) {
                        super({ name: constants.particles.OrganelleHasComeToLife, of: of }, { organelleName: organelleName });
                    }
                }
                particle.OrganelleHasComeToLife = OrganelleHasComeToLife;
                class Domain extends Particle {
                    constructor(domain, of) {
                        super({ name: constants.particles.Domain, of: of }, domain);
                    }
                }
                particle.Domain = Domain;
                class Authenticate extends euglena_1.euglena.being.Particle {
                    constructor(proxy) {
                        super({ name: constants.particles.Authenticate }, proxy);
                    }
                }
                particle.Authenticate = Authenticate;
                class Session extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.Session, of: of }, content);
                    }
                }
                particle.Session = Session;
                class SetTime extends Particle {
                    constructor(time, of) {
                        super({ name: constants.particles.SetTime, of: of }, time);
                    }
                }
                particle.SetTime = SetTime;
                class ConnectToEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super({ name: constants.particles.ConnectToEuglena, of: of }, euglenaInfo);
                    }
                }
                particle.ConnectToEuglena = ConnectToEuglena;
                class ConnectedToEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo);
                    }
                }
                particle.ConnectedToEuglena = ConnectedToEuglena;
                class DisconnectedFromEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo);
                    }
                }
                particle.DisconnectedFromEuglena = DisconnectedFromEuglena;
                class Listen extends being.particle.VoidParticle {
                    constructor(of) {
                        super({ name: constants.particles.Listen, of: of });
                    }
                }
                particle.Listen = Listen;
                class ThrowImpact extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.ThrowImpact, of: of }, content);
                    }
                }
                particle.ThrowImpact = ThrowImpact;
                class EuglenaInfo extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.EuglenaInfo, of: of }, content);
                    }
                }
                particle.EuglenaInfo = EuglenaInfo;
                class CytoplasmInfo extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.EuglenaInfo, of: of }, content);
                    }
                }
                particle.CytoplasmInfo = CytoplasmInfo;
                class OrganelleList extends Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.OrganelleList, of }, content);
                    }
                }
                particle.OrganelleList = OrganelleList;
                class Proxy extends Particle {
                    constructor(content, of, for_) {
                        super({ name: constants.particles.Proxy, of: of, for: for_ }, content);
                    }
                }
                particle.Proxy = Proxy;
                class ProxyRequest extends Particle {
                    constructor(euglenaName, password, of) {
                        super({ name: constants.particles.ProxyRequest, of: of }, { euglenaName: euglenaName, password: password });
                    }
                }
                particle.ProxyRequest = ProxyRequest;
                class Exception extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.Exception, of: of }, content);
                    }
                }
                particle.Exception = Exception;
                class Time extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.Time, of: of }, content);
                    }
                }
                particle.Time = Time;
                class Acknowledge extends being.particle.VoidParticle {
                    constructor(of) {
                        super({ name: constants.particles.Acknowledge, of: of });
                    }
                }
                particle.Acknowledge = Acknowledge;
                class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content, of) {
                        super({ name: constants.particles.ConnectedToTheInternet, of: of }, content);
                    }
                }
                particle.ConnectedToTheInternet = ConnectedToTheInternet;
                class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of) {
                        super({ name: constants.particles.EuglenaHasBeenBorn, of: of }, true);
                    }
                }
                particle.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
                class SaveParticle extends Particle {
                    constructor(content, of) {
                        super({ name: constants.impacts.SaveParticle, of: of }, content);
                    }
                }
                particle.SaveParticle = SaveParticle;
                class ReadParticle extends Particle {
                    constructor(content, of) {
                        super({ name: constants.impacts.ReadParticle, of: of }, content);
                    }
                }
                particle.ReadParticle = ReadParticle;
                class ReadParticles extends Particle {
                    constructor(particleName, of) {
                        super({ name: constants.impacts.ReadParticles, of: of }, particleName);
                    }
                }
                particle.ReadParticles = ReadParticles;
                class ReadParticlesOf extends Particle {
                    constructor(whose, of) {
                        super({ name: constants.impacts.ReadParticlesOf, of: of }, whose);
                    }
                }
                particle.ReadParticlesOf = ReadParticlesOf;
                class ReadMatchedParticles extends Particle {
                    constructor(particleRef, of) {
                        super({ name: constants.particles.ReadMatchedParticles, of: of }, particleRef);
                    }
                }
                particle.ReadMatchedParticles = ReadMatchedParticles;
                class ParticlesOf extends Particle {
                    constructor(particles, of) {
                        super({ name: constants.particles.ParticlesOf, of: of }, particles);
                    }
                }
                particle.ParticlesOf = ParticlesOf;
                class RemoveParticle extends Particle {
                    constructor(content, of) {
                        super({ name: constants.impacts.RemoveParticle, of: of }, content);
                    }
                }
                particle.RemoveParticle = RemoveParticle;
                class DoesParticleExist extends Particle {
                    constructor(content, of) {
                        super({ name: alive.constants.particles.DoesParticleExist, of: of }, content);
                    }
                }
                particle.DoesParticleExist = DoesParticleExist;
                class ImpactReceived extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super({ name: constants.particles.ImpactReceived, of: of }, content);
                    }
                }
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