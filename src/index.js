"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by codelovesme on 6/19/2015.
 */
var core_1 = require("@euglena/core");
var cessnalib_1 = require("cessnalib");
var BooleanParticle = (function (_super) {
    __extends(BooleanParticle, _super);
    function BooleanParticle(meta, data) {
        return _super.call(this, meta, data) || this;
    }
    return BooleanParticle;
}(core_1.ParticleV2));
exports.BooleanParticle = BooleanParticle;
var VoidParticle = (function (_super) {
    __extends(VoidParticle, _super);
    function VoidParticle(meta) {
        return _super.call(this, meta) || this;
    }
    return VoidParticle;
}(core_1.ParticleV2));
exports.VoidParticle = VoidParticle;
var subscription;
(function (subscription) {
    var Record = (function () {
        function Record() {
        }
        return Record;
    }());
    subscription.Record = Record;
    var StaticTools = (function () {
        function StaticTools() {
        }
        StaticTools.addSubscription = function (particleMatch, euglenaName) {
            var euglenas = StaticTools.getSubscriptions(particleMatch);
            if (euglenas) {
                if (!cessnalib_1.sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                    euglenas.push(euglenaName);
                }
            }
            else {
                StaticTools.subscriptionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
            }
        };
        StaticTools.removeSubscriptions = function (particleMatch) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return cessnalib_1.sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict, i).euglenas;
                }
            }
            return null;
        };
        StaticTools.removeSubscription = function (particleMatch, euglenaName) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    var index = StaticTools.subscriptionDict[i].euglenas.indexOf(euglenaName);
                    if (index >= 0) {
                        return cessnalib_1.sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict[i].euglenas, index) ? true : false;
                    }
                }
            }
            return false;
        };
        StaticTools.getSubscriptions = function (particleMatch) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return StaticTools.subscriptionDict[i].euglenas;
                }
            }
            return null;
        };
        StaticTools.isSubscribed = function (particleMatch, euglenaName) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return cessnalib_1.sys.type.StaticTools.Array.contains(StaticTools.subscriptionDict[i].euglenas, euglenaName);
                }
            }
        };
        return StaticTools;
    }());
    StaticTools.subscriptionDict = [];
    subscription.StaticTools = StaticTools;
})(subscription = exports.subscription || (exports.subscription = {}));
var alive;
(function (alive) {
    var constants;
    (function (constants) {
        var particles;
        (function (particles) {
            particles.Domain = "Domain";
            particles.WhoAmI = "WhoAmI";
            particles.Particles = "Particles";
            particles.EuglenaInfo = "EuglenaInfo";
            particles.OrganelleInfo = "OrganelleInfo";
            particles.OrganelleList = "OrganelleList";
            particles.EuglenaName = "EuglenaName";
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
            particles.Coordinate = "Coordinate";
            particles.SetTime = "SetTime";
            particles.DbIsOnline = "DbIsOnline";
            particles.NetOrganelleSap = "NetOrganelleSap";
            particles.NetClientOrganelleSap = "NetClientOrganelleSap";
            particles.TimeOrganelleSap = "TimeOrganelleSap";
            particles.WebOrganelleSap = "WebOrganelleSap";
            particles.GPSOrganelleSap = "GPSOrganelleSap";
            particles.WebUIOrganelleSap = "WebUIOrganelleSap";
            particles.DbOrganelleSap = "DbOrganelleSap";
            particles.CytoplasmInfo = "CytoplasmInfo";
            particles.ReadMatchedParticles = "ReadMatchedParticles";
            particles.ReadMatchedParticle = "ReadMatchedParticle";
            particles.Subscribe = "Subscribe";
            particles.subscriptionDict = "subscriptionDict";
            particles.Password = "Password";
            particles.AddGene = "AddGene";
            particles.TimeChanged = "TimeChanged";
            particles.ExceptionOccurred = "ExceptionOccurred";
            particles.SaveParticle = "SaveParticle";
            particles.SaveMatchedParticle = "SaveMatchedParticle";
            particles.ReadParticle = "ReadParticle";
            particles.RemoveParticle = "RemoveParticle";
            particles.RemoveMatchedParticles = "RemoveMatchedParticles";
        })(particles = constants.particles || (constants.particles = {}));
        var organelles;
        (function (organelles) {
            organelles.WebUIOrganelle = "WebUIOrganelle";
            organelles.GPSOrganelle = "GPSOrganelle";
            organelles.NetOrganelle = "NetOrganelle";
            organelles.TimeOrganelle = "TimeOrganelle";
            organelles.WebOrganelle = "WebOrganelle";
            organelles.DbOrganelle = "DbOrganelle";
            organelles.NetClientOrganelle = "NetClientOrganelle";
            organelles.Cytoplasm = "Cytoplasm";
        })(organelles = constants.organelles || (constants.organelles = {}));
    })(constants = alive.constants || (alive.constants = {}));
    var organelle;
    (function (organelle) {
        var Organelle = core_1.alive.Organelle;
        var TimeOrganelle = (function (_super) {
            __extends(TimeOrganelle, _super);
            function TimeOrganelle(className) {
                return _super.call(this, alive.constants.organelles.TimeOrganelle, className) || this;
            }
            return TimeOrganelle;
        }(Organelle));
        organelle.TimeOrganelle = TimeOrganelle;
        var NetOrganelle = (function (_super) {
            __extends(NetOrganelle, _super);
            function NetOrganelle(className) {
                return _super.call(this, constants.organelles.NetOrganelle, className) || this;
            }
            return NetOrganelle;
        }(Organelle));
        organelle.NetOrganelle = NetOrganelle;
        var WebOrganelle = (function (_super) {
            __extends(WebOrganelle, _super);
            function WebOrganelle(className) {
                return _super.call(this, constants.organelles.WebOrganelle, className) || this;
            }
            return WebOrganelle;
        }(Organelle));
        organelle.WebOrganelle = WebOrganelle;
        var WebUIOrganelle = (function (_super) {
            __extends(WebUIOrganelle, _super);
            function WebUIOrganelle(className) {
                return _super.call(this, constants.organelles.WebUIOrganelle, className) || this;
            }
            return WebUIOrganelle;
        }(Organelle));
        organelle.WebUIOrganelle = WebUIOrganelle;
        var DbOrganelle = (function (_super) {
            __extends(DbOrganelle, _super);
            function DbOrganelle(className) {
                return _super.call(this, constants.organelles.DbOrganelle, className) || this;
            }
            return DbOrganelle;
        }(Organelle));
        organelle.DbOrganelle = DbOrganelle;
        var NetClientOrganelle = (function (_super) {
            __extends(NetClientOrganelle, _super);
            function NetClientOrganelle(className) {
                return _super.call(this, constants.organelles.NetClientOrganelle, className) || this;
            }
            return NetClientOrganelle;
        }(Organelle));
        organelle.NetClientOrganelle = NetClientOrganelle;
        var GPSOrganelle = (function (_super) {
            __extends(GPSOrganelle, _super);
            function GPSOrganelle(className) {
                return _super.call(this, constants.organelles.GPSOrganelle, className) || this;
            }
            return GPSOrganelle;
        }(Organelle));
        organelle.GPSOrganelle = GPSOrganelle;
    })(organelle = alive.organelle || (alive.organelle = {}));
    var particle;
    (function (particle) {
        var Password = (function (_super) {
            __extends(Password, _super);
            function Password(euglenaName, value) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Password, euglenaName), value) || this;
            }
            return Password;
        }(core_1.ParticleV2));
        particle.Password = Password;
        var subscriptionDict = (function (_super) {
            __extends(subscriptionDict, _super);
            function subscriptionDict(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.subscriptionDict, of), new cessnalib_1.sys.type.Map(function (key1, key2) {
                    return cessnalib_1.js.Class.doesCover(key1, key2);
                })) || this;
            }
            return subscriptionDict;
        }(core_1.ParticleV2));
        particle.subscriptionDict = subscriptionDict;
        var Subscribe = (function (_super) {
            __extends(Subscribe, _super);
            function Subscribe(particleReference, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Subscribe, of), particleReference) || this;
            }
            return Subscribe;
        }(core_1.ParticleV2));
        particle.Subscribe = Subscribe;
        var Coordinate = (function (_super) {
            __extends(Coordinate, _super);
            function Coordinate(lat, lon, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Coordinate, of), { lat: lat, lon: lon }) || this;
            }
            return Coordinate;
        }(core_1.ParticleV2));
        particle.Coordinate = Coordinate;
        var WhoAmI = (function (_super) {
            __extends(WhoAmI, _super);
            function WhoAmI(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WhoAmI, of)) || this;
            }
            return WhoAmI;
        }(core_1.ParticleV2));
        particle.WhoAmI = WhoAmI;
        var NetClientOrganelleSap = (function (_super) {
            __extends(NetClientOrganelleSap, _super);
            function NetClientOrganelleSap(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.NetClientOrganelleSap, of), { euglenaName: of }) || this;
            }
            return NetClientOrganelleSap;
        }(core_1.ParticleV2));
        particle.NetClientOrganelleSap = NetClientOrganelleSap;
        var WebUIOrganelleSap = (function (_super) {
            __extends(WebUIOrganelleSap, _super);
            function WebUIOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WebUIOrganelleSap, of), content) || this;
            }
            return WebUIOrganelleSap;
        }(core_1.ParticleV2));
        particle.WebUIOrganelleSap = WebUIOrganelleSap;
        var WebOrganelleSap = (function (_super) {
            __extends(WebOrganelleSap, _super);
            function WebOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WebOrganelleSap, of), content) || this;
            }
            return WebOrganelleSap;
        }(core_1.ParticleV2));
        particle.WebOrganelleSap = WebOrganelleSap;
        var GPSOrganelleSap = (function (_super) {
            __extends(GPSOrganelleSap, _super);
            function GPSOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.GPSOrganelleSap, of), content) || this;
            }
            return GPSOrganelleSap;
        }(core_1.ParticleV2));
        particle.GPSOrganelleSap = GPSOrganelleSap;
        var NetOrganelleSap = (function (_super) {
            __extends(NetOrganelleSap, _super);
            function NetOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.NetOrganelleSap, of), content) || this;
            }
            return NetOrganelleSap;
        }(core_1.ParticleV2));
        particle.NetOrganelleSap = NetOrganelleSap;
        var DbOrganelleSap = (function (_super) {
            __extends(DbOrganelleSap, _super);
            function DbOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.DbOrganelleSap, of), content) || this;
            }
            return DbOrganelleSap;
        }(core_1.ParticleV2));
        particle.DbOrganelleSap = DbOrganelleSap;
        var TimeOrganelleSap = (function (_super) {
            __extends(TimeOrganelleSap, _super);
            function TimeOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.TimeOrganelleSap, of), content) || this;
            }
            return TimeOrganelleSap;
        }(core_1.ParticleV2));
        particle.TimeOrganelleSap = TimeOrganelleSap;
        var DbIsOnline = (function (_super) {
            __extends(DbIsOnline, _super);
            function DbIsOnline(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.DbIsOnline, of)) || this;
            }
            return DbIsOnline;
        }(VoidParticle));
        particle.DbIsOnline = DbIsOnline;
        var ReturnCurrentTime = (function (_super) {
            __extends(ReturnCurrentTime, _super);
            function ReturnCurrentTime(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReturnCurrentTime, of)) || this;
            }
            return ReturnCurrentTime;
        }(VoidParticle));
        particle.ReturnCurrentTime = ReturnCurrentTime;
        var ReturnIfConnectedToTheInternet = (function (_super) {
            __extends(ReturnIfConnectedToTheInternet, _super);
            function ReturnIfConnectedToTheInternet(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReturnIfConnectedToTheInternet, of)) || this;
            }
            return ReturnIfConnectedToTheInternet;
        }(VoidParticle));
        particle.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
        var OrganelleHasComeToLife = (function (_super) {
            __extends(OrganelleHasComeToLife, _super);
            function OrganelleHasComeToLife(organelleName, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleHasComeToLife, of), { organelleName: organelleName }) || this;
            }
            return OrganelleHasComeToLife;
        }(core_1.ParticleV2));
        particle.OrganelleHasComeToLife = OrganelleHasComeToLife;
        var Domain = (function (_super) {
            __extends(Domain, _super);
            function Domain(domain, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Domain, of), domain) || this;
            }
            return Domain;
        }(core_1.ParticleV2));
        particle.Domain = Domain;
        var Authenticate = (function (_super) {
            __extends(Authenticate, _super);
            function Authenticate(euglenaName, password, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Authenticate, of), { euglenaName: euglenaName, password: password }) || this;
            }
            return Authenticate;
        }(core_1.ParticleV2));
        particle.Authenticate = Authenticate;
        var Proxy = (function (_super) {
            __extends(Proxy, _super);
            function Proxy(from, to, expireTime, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Proxy, of, expireTime), { from: from, to: to }) || this;
            }
            return Proxy;
        }(core_1.ParticleV2));
        particle.Proxy = Proxy;
        var SetTime = (function (_super) {
            __extends(SetTime, _super);
            function SetTime(time, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.SetTime, of), time) || this;
            }
            return SetTime;
        }(core_1.ParticleV2));
        particle.SetTime = SetTime;
        var ConnectToEuglena = (function (_super) {
            __extends(ConnectToEuglena, _super);
            function ConnectToEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectToEuglena, of), euglenaInfo) || this;
            }
            return ConnectToEuglena;
        }(core_1.ParticleV2));
        particle.ConnectToEuglena = ConnectToEuglena;
        var ConnectedToEuglena = (function (_super) {
            __extends(ConnectedToEuglena, _super);
            function ConnectedToEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo) || this;
            }
            return ConnectedToEuglena;
        }(core_1.ParticleV2));
        particle.ConnectedToEuglena = ConnectedToEuglena;
        var DisconnectedFromEuglena = (function (_super) {
            __extends(DisconnectedFromEuglena, _super);
            function DisconnectedFromEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo) || this;
            }
            return DisconnectedFromEuglena;
        }(core_1.ParticleV2));
        particle.DisconnectedFromEuglena = DisconnectedFromEuglena;
        var Listen = (function (_super) {
            __extends(Listen, _super);
            function Listen(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Listen, of)) || this;
            }
            return Listen;
        }(VoidParticle));
        particle.Listen = Listen;
        var ThrowImpact = (function (_super) {
            __extends(ThrowImpact, _super);
            function ThrowImpact(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ThrowImpact, of), content) || this;
            }
            return ThrowImpact;
        }(core_1.ParticleV2));
        particle.ThrowImpact = ThrowImpact;
        var EuglenaInfo = (function (_super) {
            __extends(EuglenaInfo, _super);
            function EuglenaInfo(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaInfo, of), content) || this;
            }
            return EuglenaInfo;
        }(core_1.ParticleV2));
        particle.EuglenaInfo = EuglenaInfo;
        var OrganelleInfoLocationType;
        (function (OrganelleInfoLocationType) {
            OrganelleInfoLocationType[OrganelleInfoLocationType["FileSystemPath"] = 0] = "FileSystemPath";
            OrganelleInfoLocationType[OrganelleInfoLocationType["NodeModules"] = 1] = "NodeModules";
            OrganelleInfoLocationType[OrganelleInfoLocationType["Url"] = 2] = "Url";
        })(OrganelleInfoLocationType = particle.OrganelleInfoLocationType || (particle.OrganelleInfoLocationType = {}));
        var OrganelleInfo = (function (_super) {
            __extends(OrganelleInfo, _super);
            function OrganelleInfo(organelleName, locationType, locationPath, sap, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleInfo, of), { name: organelleName, location: { type: locationType, path: locationPath }, sap: sap }) || this;
            }
            return OrganelleInfo;
        }(core_1.ParticleV2));
        particle.OrganelleInfo = OrganelleInfo;
        var CytoplasmInfo = (function (_super) {
            __extends(CytoplasmInfo, _super);
            function CytoplasmInfo(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaInfo, of), content) || this;
            }
            return CytoplasmInfo;
        }(core_1.ParticleV2));
        particle.CytoplasmInfo = CytoplasmInfo;
        var OrganelleList = (function (_super) {
            __extends(OrganelleList, _super);
            function OrganelleList(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleList, of), content) || this;
            }
            return OrganelleList;
        }(core_1.ParticleV2));
        particle.OrganelleList = OrganelleList;
        var Exception = (function (_super) {
            __extends(Exception, _super);
            function Exception(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Exception, of), content) || this;
            }
            return Exception;
        }(core_1.ParticleV2));
        particle.Exception = Exception;
        var Time = (function (_super) {
            __extends(Time, _super);
            function Time(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Time, of), content) || this;
            }
            return Time;
        }(core_1.ParticleV2));
        particle.Time = Time;
        var Acknowledge = (function (_super) {
            __extends(Acknowledge, _super);
            function Acknowledge(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Acknowledge, of)) || this;
            }
            return Acknowledge;
        }(VoidParticle));
        particle.Acknowledge = Acknowledge;
        var ConnectedToTheInternet = (function (_super) {
            __extends(ConnectedToTheInternet, _super);
            function ConnectedToTheInternet(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToTheInternet, of), content) || this;
            }
            return ConnectedToTheInternet;
        }(BooleanParticle));
        particle.ConnectedToTheInternet = ConnectedToTheInternet;
        var EuglenaHasBeenBorn = (function (_super) {
            __extends(EuglenaHasBeenBorn, _super);
            function EuglenaHasBeenBorn(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaHasBeenBorn, of), true) || this;
            }
            return EuglenaHasBeenBorn;
        }(BooleanParticle));
        particle.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
        var SaveParticle = (function (_super) {
            __extends(SaveParticle, _super);
            function SaveParticle(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.SaveParticle, of), content) || this;
            }
            return SaveParticle;
        }(core_1.ParticleV2));
        particle.SaveParticle = SaveParticle;
        var SaveMatchedParticle = (function (_super) {
            __extends(SaveMatchedParticle, _super);
            function SaveMatchedParticle(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.SaveMatchedParticle, of), content) || this;
            }
            return SaveMatchedParticle;
        }(core_1.ParticleV2));
        particle.SaveMatchedParticle = SaveMatchedParticle;
        var ReadParticle = (function (_super) {
            __extends(ReadParticle, _super);
            function ReadParticle(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReadParticle, of), content) || this;
            }
            return ReadParticle;
        }(core_1.ParticleV2));
        particle.ReadParticle = ReadParticle;
        var ReadMatchedParticles = (function (_super) {
            __extends(ReadMatchedParticles, _super);
            function ReadMatchedParticles(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReadMatchedParticles, of), query) || this;
            }
            return ReadMatchedParticles;
        }(core_1.ParticleV2));
        particle.ReadMatchedParticles = ReadMatchedParticles;
        var ReadMatchedParticle = (function (_super) {
            __extends(ReadMatchedParticle, _super);
            function ReadMatchedParticle(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReadMatchedParticle, of), query) || this;
            }
            return ReadMatchedParticle;
        }(core_1.ParticleV2));
        particle.ReadMatchedParticle = ReadMatchedParticle;
        var Particles = (function (_super) {
            __extends(Particles, _super);
            function Particles(particles, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Particles, of), particles) || this;
            }
            return Particles;
        }(core_1.ParticleV2));
        particle.Particles = Particles;
        var RemoveParticle = (function (_super) {
            __extends(RemoveParticle, _super);
            function RemoveParticle(ref, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.RemoveParticle, of), ref) || this;
            }
            return RemoveParticle;
        }(core_1.ParticleV2));
        particle.RemoveParticle = RemoveParticle;
        var RemoveMatchedParticles = (function (_super) {
            __extends(RemoveMatchedParticles, _super);
            function RemoveMatchedParticles(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.RemoveMatchedParticles, of), query) || this;
            }
            return RemoveMatchedParticles;
        }(core_1.ParticleV2));
        particle.RemoveMatchedParticles = RemoveMatchedParticles;
        var DoesParticleExist = (function (_super) {
            __extends(DoesParticleExist, _super);
            function DoesParticleExist(content, of) {
                return _super.call(this, new core_1.MetaV2(alive.constants.particles.DoesParticleExist, of), content) || this;
            }
            return DoesParticleExist;
        }(core_1.ParticleV2));
        particle.DoesParticleExist = DoesParticleExist;
    })(particle = alive.particle || (alive.particle = {}));
})(alive = exports.alive || (exports.alive = {}));
//# sourceMappingURL=index.js.map