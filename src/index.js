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
                constructor(name, content, of) {
                    super(name, content, of);
                }
            }
            particle.BooleanParticle = BooleanParticle;
            class VoidParticle extends euglena_1.euglena.being.Particle {
                constructor(name, of) {
                    super(name, null, of);
                }
            }
            particle.VoidParticle = VoidParticle;
        })(particle = being.particle || (being.particle = {}));
        var alive;
        (function (alive) {
            var Particle = euglena_1.euglena.being.Particle;
            var constants;
            (function (constants) {
                var particles;
                (function (particles) {
                    particles.ParticlesOf = "ParticlesOf";
                    particles.EuglenaInfo = "EuglenaInfo";
                    particles.OrganelleList = "OrganelleList";
                    particles.DbOrganelleInitialProperties = "DbOrganelleInitialProperties";
                    particles.WebOrganelleInitialProperties = "WebOrganelleInitialProperties";
                    particles.NucleusOrganelleInitialProperties = "NucleusOrganelleInitialProperties";
                    particles.ReceptionOrganelleInitialProperties = "ReceptionOrganelleInitialProperties";
                    particles.EuglenaName = "EuglenaName";
                    particles.ImpactReceived = "ImpactReceived";
                    particles.EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
                    particles.Acknowledge = "Acknowledge";
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
                    particles.Session = "Session";
                    particles.SetTime = "SetTime";
                    particles.DbIsOnline = "DbIsOnline";
                    particles.NetOrganelleSap = "NetOrganelleSap";
                    particles.WebOrganelleSap = "WebOrganelleSap";
                    particles.DbOrganelleSap = "DbOrganelleSap";
                })(particles = constants.particles || (constants.particles = {}));
                var organelles;
                (function (organelles) {
                    organelles.NetOrganelle = "NetOrganelle";
                    organelles.TimeOrganelle = "TimeOrganelle";
                    organelles.WebOrganelle = "WebOrganelle";
                    organelles.DbOrganelle = "DbOrganelle";
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
                class DbOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.DbOrganelle, className);
                    }
                }
                organelle.DbOrganelle = DbOrganelle;
            })(organelle = alive.organelle || (alive.organelle = {}));
            var particle;
            (function (particle) {
                class WebOrganelleSap extends Particle {
                    constructor(content, of) {
                        super(constants.particles.WebOrganelleSap, content, of);
                    }
                }
                particle.WebOrganelleSap = WebOrganelleSap;
                class NetOrganelleSap extends Particle {
                    constructor(content, of) {
                        super(constants.particles.NetOrganelleSap, content, of);
                    }
                }
                particle.NetOrganelleSap = NetOrganelleSap;
                class DbOrganelleSap extends Particle {
                    constructor(content, of) {
                        super(constants.particles.DbOrganelleSap, content, of);
                    }
                }
                particle.DbOrganelleSap = DbOrganelleSap;
                class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of) {
                        super(constants.particles.DbIsOnline, of);
                    }
                }
                particle.DbIsOnline = DbIsOnline;
                var VoidParticle = euglena_template.being.particle.VoidParticle;
                class ReturnCurrentTime extends VoidParticle {
                    constructor(of) {
                        super(constants.particles.ReturnCurrentTime, of);
                    }
                }
                particle.ReturnCurrentTime = ReturnCurrentTime;
                class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of) {
                        super(constants.particles.ReturnIfConnectedToTheInternet, of);
                    }
                }
                particle.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
                class Session extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.Session, content, of);
                    }
                }
                particle.Session = Session;
                class SetTime extends Particle {
                    constructor(time, of) {
                        super(constants.particles.SetTime, time, of);
                    }
                }
                particle.SetTime = SetTime;
                class ConnectToEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super(constants.particles.ConnectToEuglena, euglenaInfo, of);
                    }
                }
                particle.ConnectToEuglena = ConnectToEuglena;
                class ConnectedToEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super(constants.particles.ConnectedToEuglena, euglenaInfo, of);
                    }
                }
                particle.ConnectedToEuglena = ConnectedToEuglena;
                class DisconnectedFromEuglena extends euglena_1.euglena.being.Particle {
                    constructor(euglenaInfo, of) {
                        super(constants.particles.ConnectedToEuglena, euglenaInfo, of);
                    }
                }
                particle.DisconnectedFromEuglena = DisconnectedFromEuglena;
                class Listen extends being.particle.VoidParticle {
                    constructor(of) {
                        super(constants.particles.Listen, of);
                    }
                }
                particle.Listen = Listen;
                class ThrowImpact extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.ThrowImpact, content, of);
                    }
                }
                particle.ThrowImpact = ThrowImpact;
                class EuglenaInfo {
                    constructor(name, url, port) {
                        this.name = name;
                        this.url = url;
                        this.port = port;
                    }
                }
                particle.EuglenaInfo = EuglenaInfo;
                class OrganelleList extends Particle {
                    constructor(content, of) {
                        super(constants.particles.OrganelleList, content, of);
                    }
                }
                particle.OrganelleList = OrganelleList;
                class Token extends Particle {
                    constructor(content, of) {
                        super(constants.particles.Token, content, of);
                    }
                }
                particle.Token = Token;
                class Exception extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.Exception, content, of);
                    }
                }
                particle.Exception = Exception;
                class Time extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.Time, content, of);
                    }
                }
                particle.Time = Time;
                class Acknowledge extends being.particle.VoidParticle {
                    constructor(of) {
                        super(constants.particles.Acknowledge, of);
                    }
                }
                particle.Acknowledge = Acknowledge;
                class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content, of) {
                        super(constants.particles.ConnectedToTheInternet, content, of);
                    }
                }
                particle.ConnectedToTheInternet = ConnectedToTheInternet;
                class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of) {
                        super(constants.particles.EuglenaHasBeenBorn, true, of);
                    }
                }
                particle.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
                class SaveParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.SaveParticle, content, of);
                    }
                }
                particle.SaveParticle = SaveParticle;
                class ReadParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.ReadParticle, content, of);
                    }
                }
                particle.ReadParticle = ReadParticle;
                class ReadParticles extends Particle {
                    constructor(particleName, of) {
                        super(constants.impacts.ReadParticles, particleName, of);
                    }
                }
                particle.ReadParticles = ReadParticles;
                class ReadParticlesOf extends Particle {
                    constructor(whose, of) {
                        super(constants.impacts.ReadParticlesOf, whose, of);
                    }
                }
                particle.ReadParticlesOf = ReadParticlesOf;
                class ParticlesOf extends Particle {
                    constructor(particles, of) {
                        super(constants.particles.ParticlesOf, particles, of);
                    }
                }
                particle.ParticlesOf = ParticlesOf;
                class RemoveParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.RemoveParticle, content, of);
                    }
                }
                particle.RemoveParticle = RemoveParticle;
                class DoesParticleExist extends Particle {
                    constructor(content, of) {
                        super(alive.constants.particles.DoesParticleExist, content, of);
                    }
                }
                particle.DoesParticleExist = DoesParticleExist;
                class ImpactReceived extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.ImpactReceived, content, of);
                        this.content = content;
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
                interaction.Impact = new euglena_1.euglena.being.interaction.Impact(new euglena_1.euglena.being.Particle("name", "content", "of"), "token");
            })(interaction = being.interaction || (being.interaction = {}));
            being.Particle = new euglena_1.euglena.being.Particle("name", "name", "of");
        })(being = reference.being || (reference.being = {}));
    })(reference = euglena_template.reference || (euglena_template.reference = {}));
})(euglena_template = exports.euglena_template || (exports.euglena_template = {}));
//# sourceMappingURL=index.js.map