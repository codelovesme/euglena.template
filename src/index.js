"use strict";
/**
 * Created by codelovesme on 6/19/2015.
 */
const euglena_1 = require("euglena");
var euglena_template;
(function (euglena_template) {
    var being;
    (function (being) {
        var particles;
        (function (particles) {
            class BooleanParticle extends euglena_1.euglena.being.Particle {
                constructor(name, content, of) {
                    super(name, content, of);
                }
            }
            particles.BooleanParticle = BooleanParticle;
            class VoidParticle extends euglena_1.euglena.being.Particle {
                constructor(name, of) {
                    super(name, null, of);
                }
            }
            particles.VoidParticle = VoidParticle;
        })(particles = being.particles || (being.particles = {}));
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
                    particles.EuglenaHasBeenDivided = "EuglenaHasBeenDivided";
                    particles.Acknowledge = "Acknowledge";
                    particles.Time = "Time";
                    particles.Exception = "Exception";
                    particles.ConnectedToTheInternet = "ConnectedToTheInternet";
                    particles.Token = "Token";
                    particles.Impacts = "Impacts";
                    particles.DoesParticleExist = "DoesParticleExist";
                    particles.DoesUniqueParticleExist = "DoesUniqueParticleExist";
                    particles.Gene = "Gene";
                })(particles = constants.particles || (constants.particles = {}));
                var organelles;
                (function (organelles) {
                    organelles.Net = "ReceptionOrganelle";
                    organelles.TimeOrganelle = "TimeOrganelle";
                    organelles.WebOrganelle = "WebOrganelle";
                    organelles.Db = "DbOrganelle";
                    organelles.Nucleus = "NucleusOrganelle";
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
            var organelles;
            (function (organelles) {
                var Organelle = euglena_1.euglena.being.alive.Organelle;
                class Nucleus extends Organelle {
                    constructor(className) {
                        super(alive.constants.organelles.Nucleus, className);
                    }
                }
                organelles.Nucleus = Nucleus;
                class TimeOrganelle extends Organelle {
                    constructor(className) {
                        super(alive.constants.organelles.TimeOrganelle, className);
                    }
                }
                organelles.TimeOrganelle = TimeOrganelle;
                class ReceptionOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.Net, className);
                    }
                }
                organelles.ReceptionOrganelle = ReceptionOrganelle;
                class WebOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.WebOrganelle, className);
                    }
                }
                organelles.WebOrganelle = WebOrganelle;
                class DbOrganelle extends Organelle {
                    constructor(className) {
                        super(constants.organelles.Db, className);
                    }
                }
                organelles.DbOrganelle = DbOrganelle;
            })(organelles = alive.organelles || (alive.organelles = {}));
            var particles;
            (function (particles_1) {
                class EuglenaInfo {
                    constructor(name, url, port) {
                        this.name = name;
                        this.url = url;
                        this.port = port;
                    }
                }
                particles_1.EuglenaInfo = EuglenaInfo;
                class OrganelleList extends Particle {
                    constructor(content, of) {
                        super(constants.particles.OrganelleList, content, of);
                    }
                }
                particles_1.OrganelleList = OrganelleList;
                class Token extends Particle {
                    constructor(content, of) {
                        super(constants.particles.Token, content, of);
                    }
                }
                particles_1.Token = Token;
                class Exception extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.Exception, content, of);
                    }
                }
                particles_1.Exception = Exception;
                class Time extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.Time, content, of);
                    }
                }
                particles_1.Time = Time;
                class Acknowledge extends being.particles.VoidParticle {
                    constructor(content, of) {
                        super(constants.particles.Acknowledge, of);
                    }
                }
                particles_1.Acknowledge = Acknowledge;
                class ConnectedToTheInternet extends being.particles.BooleanParticle {
                    constructor(content, of) {
                        super(constants.particles.ConnectedToTheInternet, content, of);
                    }
                }
                particles_1.ConnectedToTheInternet = ConnectedToTheInternet;
                class EuglenaHasBeenBorn extends being.particles.BooleanParticle {
                    constructor(of) {
                        super(constants.particles.EuglenaHasBeenBorn, true, of);
                    }
                }
                particles_1.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
                class EuglenaHasBeenDivided extends being.particles.BooleanParticle {
                    constructor(of) {
                        super(constants.particles.EuglenaHasBeenDivided, true, of);
                    }
                }
                particles_1.EuglenaHasBeenDivided = EuglenaHasBeenDivided;
                class SaveParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.SaveParticle, content, of);
                    }
                }
                particles_1.SaveParticle = SaveParticle;
                class ReadParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.ReadParticle, content, of);
                    }
                }
                particles_1.ReadParticle = ReadParticle;
                class ReadParticles extends Particle {
                    constructor(particleName, of) {
                        super(constants.impacts.ReadParticles, particleName, of);
                    }
                }
                particles_1.ReadParticles = ReadParticles;
                class ReadParticlesOf extends Particle {
                    constructor(whose, of) {
                        super(constants.impacts.ReadParticlesOf, whose, of);
                    }
                }
                particles_1.ReadParticlesOf = ReadParticlesOf;
                class ParticlesOf extends Particle {
                    constructor(particles, of) {
                        super(constants.particles.ParticlesOf, particles, of);
                    }
                }
                particles_1.ParticlesOf = ParticlesOf;
                class RemoveParticle extends Particle {
                    constructor(content, of) {
                        super(constants.impacts.RemoveParticle, content, of);
                    }
                }
                particles_1.RemoveParticle = RemoveParticle;
                class DoesParticleExist extends Particle {
                    constructor(content, of) {
                        super(alive.constants.particles.DoesParticleExist, content, of);
                    }
                }
                particles_1.DoesParticleExist = DoesParticleExist;
                class ImpactReceived extends euglena_1.euglena.being.Particle {
                    constructor(content, of) {
                        super(constants.particles.ImpactReceived, content, of);
                        this.content = content;
                    }
                }
                particles_1.ImpactReceived = ImpactReceived;
            })(particles = alive.particles || (alive.particles = {}));
        })(alive = being.alive || (being.alive = {}));
        var ghost;
        (function (ghost) {
            var organelle;
            (function (organelle) {
                var impactthrower;
                (function (impactthrower) {
                    var incomingparticles;
                    (function (incomingparticles) {
                        class ThrowImpact extends euglena_1.euglena.being.Particle {
                            constructor(content, of) {
                                super(constants.incomingparticles.ThrowImpact, content, of);
                            }
                        }
                        incomingparticles.ThrowImpact = ThrowImpact;
                    })(incomingparticles = impactthrower.incomingparticles || (impactthrower.incomingparticles = {}));
                    var constants;
                    (function (constants) {
                        var incomingparticles;
                        (function (incomingparticles) {
                            incomingparticles.ThrowImpact = "ThrowImpact";
                        })(incomingparticles = constants.incomingparticles || (constants.incomingparticles = {}));
                    })(constants = impactthrower.constants || (impactthrower.constants = {}));
                })(impactthrower = organelle.impactthrower || (organelle.impactthrower = {}));
                var reception;
                (function (reception) {
                    var incomingparticles;
                    (function (incomingparticles) {
                        class Listen extends being.particles.VoidParticle {
                            constructor(of) {
                                super(constants.incomingparticles.Listen, of);
                            }
                        }
                        incomingparticles.Listen = Listen;
                        class ThrowImpact extends euglena_1.euglena.being.Particle {
                            constructor(content, of) {
                                super(constants.incomingparticles.ThrowImpact, content, of);
                            }
                        }
                        incomingparticles.ThrowImpact = ThrowImpact;
                    })(incomingparticles = reception.incomingparticles || (reception.incomingparticles = {}));
                    var outgoingparticles;
                    (function (outgoingparticles) {
                        class ImpactReceived extends euglena_1.euglena.being.Particle {
                            constructor(impact, of) {
                                super(constants.outgoingparticles.ImpactReceived, impact, of);
                            }
                        }
                        outgoingparticles.ImpactReceived = ImpactReceived;
                        class ConnectedToEuglena extends euglena_1.euglena.being.Particle {
                            constructor(euglenaInfo, of) {
                                super(constants.outgoingparticles.ConnectedToEuglena, euglenaInfo, of);
                            }
                        }
                        outgoingparticles.ConnectedToEuglena = ConnectedToEuglena;
                        class DisconnectedFromEuglena extends euglena_1.euglena.being.Particle {
                            constructor(euglenaInfo, of) {
                                super(constants.outgoingparticles.ConnectedToEuglena, euglenaInfo, of);
                            }
                        }
                        outgoingparticles.DisconnectedFromEuglena = DisconnectedFromEuglena;
                    })(outgoingparticles = reception.outgoingparticles || (reception.outgoingparticles = {}));
                    var constants;
                    (function (constants) {
                        var incomingparticles;
                        (function (incomingparticles) {
                            incomingparticles.Listen = "Listen";
                            incomingparticles.ThrowImpact = "ThrowImpact";
                        })(incomingparticles = constants.incomingparticles || (constants.incomingparticles = {}));
                        var outgoingparticles;
                        (function (outgoingparticles) {
                            outgoingparticles.ImpactReceived = "ImpactReceived";
                            outgoingparticles.ConnectedToEuglena = "ConnectedToEuglena";
                            outgoingparticles.DisconnectedFromEuglena = "DisconnectedFromEuglena";
                        })(outgoingparticles = constants.outgoingparticles || (constants.outgoingparticles = {}));
                    })(constants = reception.constants || (reception.constants = {}));
                })(reception = organelle.reception || (organelle.reception = {}));
                var impacttransmitter;
                (function (impacttransmitter) {
                    var incomingparticles;
                    (function (incomingparticles) {
                        class ConnectToEuglena extends euglena_1.euglena.being.Particle {
                            constructor(euglenaInfo, of) {
                                super(constants.incomingparticles.ConnectToEuglena, euglenaInfo, of);
                            }
                        }
                        incomingparticles.ConnectToEuglena = ConnectToEuglena;
                        class ThrowImpact extends euglena_1.euglena.being.Particle {
                            constructor(content, of) {
                                super(constants.incomingparticles.ThrowImpact, content, of);
                            }
                        }
                        incomingparticles.ThrowImpact = ThrowImpact;
                    })(incomingparticles = impacttransmitter.incomingparticles || (impacttransmitter.incomingparticles = {}));
                    var constants;
                    (function (constants) {
                        var incomingparticles;
                        (function (incomingparticles) {
                            incomingparticles.ConnectToEuglena = "ConnectToEuglena";
                            incomingparticles.ThrowImpact = "ThrowImpact";
                        })(incomingparticles = constants.incomingparticles || (constants.incomingparticles = {}));
                    })(constants = impacttransmitter.constants || (impacttransmitter.constants = {}));
                })(impacttransmitter = organelle.impacttransmitter || (organelle.impacttransmitter = {}));
                var web;
                (function (web) {
                    var constants;
                    (function (constants) {
                        var incomingparticles;
                        (function (incomingparticles) {
                            incomingparticles.ReturnCurrentTime = "ReturnCurrentTime";
                            incomingparticles.Serve = "Serve";
                            incomingparticles.ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                        })(incomingparticles = constants.incomingparticles || (constants.incomingparticles = {}));
                    })(constants = web.constants || (web.constants = {}));
                    var incomingparticles;
                    (function (incomingparticles) {
                        var VoidParticle = euglena_template.being.particles.VoidParticle;
                        class Serve extends VoidParticle {
                            constructor(of) {
                                super(constants.incomingparticles.Serve, of);
                            }
                        }
                        incomingparticles.Serve = Serve;
                        class ReturnCurrentTime extends VoidParticle {
                            constructor(of) {
                                super(constants.incomingparticles.ReturnCurrentTime, of);
                            }
                        }
                        incomingparticles.ReturnCurrentTime = ReturnCurrentTime;
                        class ReturnIfConnectedToTheInternet extends VoidParticle {
                            constructor(of) {
                                super(constants.incomingparticles.ReturnIfConnectedToTheInternet, of);
                            }
                        }
                        incomingparticles.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
                    })(incomingparticles = web.incomingparticles || (web.incomingparticles = {}));
                })(web = organelle.web || (organelle.web = {}));
                var time;
                (function (time_1) {
                    var Particle = euglena_1.euglena.being.Particle;
                    var incomingparticles;
                    (function (incomingparticles) {
                        class SetTime extends Particle {
                            constructor(time, of) {
                                super(constants.incomingparticles.SetTime, time, of);
                            }
                        }
                        incomingparticles.SetTime = SetTime;
                        class StartClock extends being.particles.VoidParticle {
                            constructor(of) {
                                super(constants.incomingparticles.StartClock, of);
                            }
                        }
                        incomingparticles.StartClock = StartClock;
                    })(incomingparticles = time_1.incomingparticles || (time_1.incomingparticles = {}));
                    var constants;
                    (function (constants) {
                        var incomingparticles;
                        (function (incomingparticles) {
                            incomingparticles.SetTime = "SetTime";
                            incomingparticles.StartClock = "StartClock";
                        })(incomingparticles = constants.incomingparticles || (constants.incomingparticles = {}));
                    })(constants = time_1.constants || (time_1.constants = {}));
                })(time = organelle.time || (organelle.time = {}));
                var db;
                (function (db) {
                    var incomingparticles;
                    (function (incomingparticles) {
                        class StartDatabase extends being.particles.VoidParticle {
                            constructor(of) {
                                super(constants.StartDatabase, of);
                            }
                        }
                        incomingparticles.StartDatabase = StartDatabase;
                    })(incomingparticles = db.incomingparticles || (db.incomingparticles = {}));
                    var outgoingparticles;
                    (function (outgoingparticles) {
                        class DbIsOnline extends being.particles.VoidParticle {
                            constructor(of) {
                                super(constants.DbIsOnline, of);
                            }
                        }
                        outgoingparticles.DbIsOnline = DbIsOnline;
                    })(outgoingparticles = db.outgoingparticles || (db.outgoingparticles = {}));
                    var constants;
                    (function (constants) {
                        constants.StartDatabase = "StartDatabase";
                        constants.DbIsOnline = "DbIsOnline";
                    })(constants = db.constants || (db.constants = {}));
                })(db = organelle.db || (organelle.db = {}));
            })(organelle = ghost.organelle || (ghost.organelle = {}));
        })(ghost = being.ghost || (being.ghost = {}));
    })(being = euglena_template.being || (euglena_template.being = {}));
})(euglena_template = exports.euglena_template || (exports.euglena_template = {}));
//# sourceMappingURL=index.js.map